import type { Locale } from './types'

export const LOCALE_PATH: Record<Locale, string> = {
  fr: '/',
  en: '/en/',
  ar: '/ar/',
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0]?.toLowerCase()
  if (first === 'en') return 'en'
  if (first === 'ar') return 'ar'
  return 'fr'
}