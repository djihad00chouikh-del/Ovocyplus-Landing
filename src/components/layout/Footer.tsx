import { ExternalLink } from 'lucide-react'

import { MANUFACTURER } from '../../data/product'
import { useI18n } from '../../i18n/context'
import { Container } from './Container'
import { LanguageSwitcher } from '../LanguageSwitcher'

export function Footer() {
  const { messages } = useI18n()
  const t = messages.footer
  const nav = messages.nav
  const year = new Date().getFullYear()

  const links = [
    { href: '#formule', label: nav.formula },
    { href: '#qualite', label: nav.quality },
    { href: '#experiences', label: nav.experiences },
    { href: '#utilisation', label: nav.utilisation },
    { href: '#faq', label: nav.faq },
  ]

  return (
    <footer className="border-t border-ink/12 bg-peach/40">
      <div className="border-b border-ink/10 bg-peach/70">
        <Container>
          <p className="py-5 text-center text-xs leading-relaxed text-ink-soft">
            {t.disclaimer}
          </p>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl text-ink">
              Ovocyplus<sup className="text-berry">®</sup>
            </p>
            <p className="kicker mt-2">{t.brandKicker}</p>
            <p className="mt-4 max-w-[46ch] text-sm text-ink-soft">
              {t.madeInFrance}
            </p>
            <p className="mt-2 text-sm text-ink-soft">{t.notMedicine}</p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                {t.languageLabel}
              </p>
              <LanguageSwitcher className="mt-2" />
            </div>
          </div>

          <nav aria-label={t.navLabel} className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              {t.navLabel}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-medium text-ink transition-colors hover:text-berry"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              DCMG
            </p>
            <address className="mt-5 space-y-1 text-sm not-italic text-ink-soft">
              <p>{MANUFACTURER.name}</p>
              <p>{MANUFACTURER.addressLine}</p>
              <p>{MANUFACTURER.city}</p>
            </address>
            <a
              href={MANUFACTURER.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-berry hover:text-berry-deep"
            >
              {messages.quality.siteLabel}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-soft">
            © {year} {MANUFACTURER.name}. {t.rights}
          </p>
          <a
            href="#"
            aria-label={t.backToTop}
            className="text-xs font-semibold text-ink-soft transition-colors hover:text-berry"
          >
            {t.backToTop} ↑
          </a>
        </div>
      </Container>
    </footer>
  )
}