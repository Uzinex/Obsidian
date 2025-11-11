import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { availableLanguages, translations } from '../src/i18n/translations.js'

const overrides = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      products: 'Продукты',
      principles: 'Принципы',
      menu: 'Меню',
      languageLabel: 'Язык',
    },
    footer: {
      rights: '© {year} Obsidian. Все права защищены.',
    },
    home: {
      hero: {
        title: 'Obsidian',
      },
    },
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Biz haqimizda',
      products: 'Mahsulotlar',
      principles: 'Tamoyillar',
      menu: 'Menyu',
      languageLabel: 'Til',
    },
    footer: {
      rights: '© {year} Obsidian. Barcha huquqlar himoyalangan.',
    },
    home: {
      hero: {
        title: 'Obsidian',
      },
    },
  },
  kk: {
    nav: {
      home: 'Басты бет',
      about: 'Біз туралы',
      products: 'Өнімдер',
      principles: 'Қағидаттар',
      menu: 'Мәзір',
      languageLabel: 'Тіл',
    },
    footer: {
      rights: '© {year} Obsidian. Барлық құқықтар қорғалған.',
      tagline: 'Оттан шыңдалған.',
    },
    home: {
      hero: {
        title: 'Obsidian',
      },
    },
  },
  ky: {
    nav: {
      home: 'Башкы бет',
      about: 'Биз жөнүндө',
      products: 'Продуктылар',
      principles: 'Принциптер',
      menu: 'Меню',
      languageLabel: 'Тил',
    },
    footer: {
      rights: '© {year} Obsidian. Бардык укуктар корголгон.',
    },
    home: {
      hero: {
        title: 'Obsidian',
      },
    },
  },
  tg: {
    nav: {
      home: 'Саҳифаи асосӣ',
      about: 'Дар бораи мо',
      products: 'Маҳсулот',
      principles: 'Принсипҳо',
      menu: 'Меню',
      languageLabel: 'Забон',
    },
    footer: {
      rights: '© {year} Obsidian. Ҳамаи ҳуқуқҳо ҳифз шудаанд.',
    },
    home: {
      hero: {
        title: 'Obsidian',
      },
    },
  },
  uk: {
    nav: {
      home: 'Головна',
      about: 'Про нас',
      products: 'Продукти',
      principles: 'Принципи',
      menu: 'Меню',
      languageLabel: 'Мова',
    },
    footer: {
      rights: '© {year} Obsidian. Усі права захищено.',
    },
    home: {
      hero: {
        title: 'Obsidian',
      },
    },
  },
}

const enforceYearPlaceholder = (value) => {
  if (typeof value !== 'string') {
    return value
  }
  return value.replace(/\{[^}]+\}/g, '{year}')
}

const deepMerge = (target, source) => {
  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (!target[key] || typeof target[key] !== 'object') {
        target[key] = {}
      }
      deepMerge(target[key], value)
    } else {
      target[key] = value
    }
  }
}

for (const language of Object.keys(translations)) {
  const footer = translations[language]?.footer
  if (footer && footer.rights) {
    footer.rights = enforceYearPlaceholder(footer.rights)
  }
}

for (const [language, override] of Object.entries(overrides)) {
  if (translations[language]) {
    deepMerge(translations[language], override)
  }
}

const output = `export const availableLanguages = ${JSON.stringify(availableLanguages, null, 2)}\n\nexport const translations = ${JSON.stringify(translations, null, 2)}\n`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const targetPath = path.resolve(__dirname, '../src/i18n/translations.js')
await fs.writeFile(targetPath, output)
