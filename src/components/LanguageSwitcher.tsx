import { useI18n } from '../i18n/context'
import type { Locale } from '../i18n/types'
import { cn } from '../lib/cn'

const locales: ReadonlyArray<{ code: Locale; label: string; full: string }> = [
  { code: 'fr', label: 'FR', full: 'Français' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'ar', label: 'AR', full: 'العربية' },
]

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, messages } = useI18n()

  return (
    <div
      role="group"
      aria-label={messages.a11y.changeLanguage}
      className={cn('inline-flex items-center gap-1 text-sm font-semibold', className)}
    >
      {locales.map((item, index) => (
        <span key={item.code} className="flex items-center gap-1">
          {index > 0 ? (
            <span aria-hidden="true" className="text-ink/30">
              ·
            </span>
          ) : null}
          <button
            type="button"
            lang={item.code}
            title={item.full}
            aria-pressed={locale === item.code}
            onClick={() => setLocale(item.code)}
            className={cn(
              'min-h-9 min-w-8 rounded-md px-1.5 py-1 transition-colors',
              locale === item.code
                ? 'text-berry'
                : 'text-ink-soft hover:text-ink',
            )}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  )
}