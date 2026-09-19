import { createContext, useContext } from 'react'

import type { Locale, Messages } from './types'

export type I18nContextValue = {
  locale: Locale
  messages: Messages
  dir: 'ltr' | 'rtl'
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return ctx
}