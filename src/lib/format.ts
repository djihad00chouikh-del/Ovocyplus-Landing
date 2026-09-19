const LOCALE_MAP: Record<string, string> = {
  fr: 'fr-FR',
  en: 'en-US',
}

export function formatDecimal(value: number, locale: string) {
  return new Intl.NumberFormat(
    locale === 'ar' ? 'ar' : LOCALE_MAP[locale] ?? 'en-US',
    { maximumFractionDigits: 1, minimumFractionDigits: 0 },
  ).format(value)
}

export function formatDate(iso: string, locale: string) {
  const loc = locale === 'ar' ? 'ar' : LOCALE_MAP[locale] ?? 'en-US'
  return new Intl.DateTimeFormat(loc, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}