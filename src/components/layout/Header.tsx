import { useEffect, useId, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { useI18n } from '../../i18n/context'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { Container } from './Container'

function Wordmark() {
  return (
    <p className="font-display text-xl tracking-tight">
      Ovocyplus
      <span className="align-super text-xs text-berry">®</span>
    </p>
  )
}

export function Header() {
  const { messages } = useI18n()
  const [open, setOpen] = useState(false)
  const menuId = useId()

  const nav = [
    { href: '#formule', label: messages.nav.formula },
    { href: '#qualite', label: messages.nav.quality },
    { href: '#experiences', label: messages.nav.experiences },
    { href: '#faq', label: messages.nav.faq },
  ]

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-base/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="rounded-md" aria-label="Ovocyplus">
          <Wordmark />
        </a>

        <nav
          aria-label={messages.nav.formula}
          className="hidden items-center gap-7 lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-berry"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <LanguageSwitcher />
            <Button href="#buy" size="sm">
              {messages.header.cta}
            </Button>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? messages.a11y.closeMenu : messages.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-md text-ink transition-colors hover:text-berry lg:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        className={cn(
          'border-t border-ink/10 bg-base lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <Container className="flex flex-col gap-6 py-6">
          <nav
            aria-label={messages.nav.formula}
            className="flex flex-col gap-1"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-md px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-peach hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
            <LanguageSwitcher />
            <Button href="#buy" onClick={close}>
              {messages.header.cta}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}