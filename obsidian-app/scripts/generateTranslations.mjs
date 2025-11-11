import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { execFile } from 'child_process'
import { availableLanguages, translations } from '../src/i18n/translations.js'

const targetLanguages = availableLanguages.filter((lang) => lang.code !== 'en').map((lang) => lang.code)

const base = translations.en

const cache = new Map()

const execFileAsync = (...args) =>
  new Promise((resolve, reject) => {
    execFile(...args, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve({ stdout, stderr })
      }
    })
  })

const translateText = async (text, target) => {
  if (!text) {
    return text
  }

  const cacheKey = `${target}:::${text}`
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)
  }

  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: target,
    dt: 't',
    q: text,
  })

  const url = `https://translate.googleapis.com/translate_a/single?${params.toString()}`
  const { stdout } = await execFileAsync('curl', ['-s', url])
  const data = JSON.parse(stdout)
  const translated = data[0].map((entry) => entry[0]).join('')

  cache.set(cacheKey, translated)
  return translated
}

const isUpperCase = (value) => {
  if (typeof value !== 'string') {
    return false
  }
  const letters = value.replace(/[^A-Za-zА-ЯЁІЇЄҐ]/g, '')
  return letters.length > 0 && letters === letters.toUpperCase()
}

const translateNode = async (node, target) => {
  if (typeof node === 'string') {
    const translated = await translateText(node, target)
    return isUpperCase(node) ? translated.toUpperCase() : translated
  }

  if (Array.isArray(node)) {
    const results = []
    for (const item of node) {
      results.push(await translateNode(item, target))
    }
    return results
  }

  if (node && typeof node === 'object') {
    const result = {}
    for (const [key, value] of Object.entries(node)) {
      result[key] = await translateNode(value, target)
    }
    return result
  }

  return node
}

const main = async () => {
  const result = { en: base }

  for (const lang of targetLanguages) {
    if (translations[lang]) {
      result[lang] = translations[lang]
      continue
    }

    console.log(`Translating content for ${lang}...`)
    result[lang] = await translateNode(base, lang)
  }

  const outputLanguages = availableLanguages

  const output = `export const availableLanguages = ${JSON.stringify(outputLanguages, null, 2)}\n\nexport const translations = ${JSON.stringify(result, null, 2)}\n`

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const targetPath = path.resolve(__dirname, '../src/i18n/translations.js')
  await fs.writeFile(targetPath, output)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
