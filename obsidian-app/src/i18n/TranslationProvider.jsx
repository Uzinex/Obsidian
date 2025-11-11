import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { availableLanguages, translations } from './translations'

const DEFAULT_LANGUAGE = 'en'

const TranslationContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  availableLanguages,
  t: (path) => path,
})

const resolvePath = (lang, path) => {
  const segments = Array.isArray(path) ? path : path.split('.')
  return segments.reduce((acc, segment) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, segment)) {
      return acc[segment]
    }
    return undefined
  }, translations[lang])
}

const translateValue = (language, path, fallback) => {
  if (!translations[language]) {
    language = DEFAULT_LANGUAGE
  }

  const value = resolvePath(language, path)
  if (value !== undefined) {
    return value
  }

  const fallbackValue = resolvePath(DEFAULT_LANGUAGE, path)
  if (fallbackValue !== undefined) {
    return fallbackValue
  }

  return fallback
}

export const TranslationProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('obsidian.language') || DEFAULT_LANGUAGE
    }
    return DEFAULT_LANGUAGE
  })

  useEffect(() => {
    if (typeof document !== 'undefined' && availableLanguages.some((lang) => lang.code === language)) {
      document.documentElement.lang = language
    }
  }, [language])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('obsidian.language', language)
    }
  }, [language])

  const changeLanguage = (code) => {
    if (availableLanguages.some((lang) => lang.code === code)) {
      setLanguageState(code)
    } else {
      setLanguageState(DEFAULT_LANGUAGE)
    }
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      availableLanguages,
      t: (path, fallback) => translateValue(language, path, fallback ?? path),
    }),
    [language],
  )

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export const useTranslation = () => useContext(TranslationContext)
