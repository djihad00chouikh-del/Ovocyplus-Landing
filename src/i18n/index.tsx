import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { I18nContext } from './context'
import { LOCALE_PATH, localeFromPathname } from './navigation'
import { ar } from './locales/ar'
import { en } from './locales/en'
import { fr } from './locales/fr'
import type { Locale, Messages } from './types'

const dictionaries: Record<Locale, Messages> = { fr, en, ar }

const defaultLocale: Locale =
  (import.meta.env.VITE_DEFAULT_LOCALE as Locale | undefined) ?? 'fr'

const STORAGE_KEY = 'ovocyplus-locale'

function isLocale(value: string | null): value is Locale {
  return value === 'fr' || value === 'en' || value === 'ar'
}

function urlTarget(next: Locale): string {
  return `${LOCALE_PATH[next]}${window.location.search}${window.location.hash}`
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return defaultLocale
    const pathLocale = localeFromPathname(window.location.pathname)
    if (pathLocale !== 'fr') return pathLocale
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (isLocale(stored)) return stored
    } catch {
      // storage unavailable — fall through to default
    }
    return defaultLocale
  })

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // storage unavailable — locale still applies for the session
    }
    window.history.pushState({ locale: next }, '', urlTarget(next))
  }, [])

  useEffect(() => {
    const onPopState = () => {
      setLocaleState(localeFromPathname(window.location.pathname))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      messages: dictionaries[locale],
      dir: locale === 'ar' ? ('rtl' as const) : ('ltr' as const),
      setLocale,
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}