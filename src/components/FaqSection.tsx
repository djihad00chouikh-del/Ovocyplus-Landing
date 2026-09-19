import { ChevronDown } from 'lucide-react'

import { MANUFACTURER } from '../data/product'
import { useI18n } from '../i18n/context'
import { Reveal } from './Reveal'
import { Section } from './layout/Section'

export function FaqSection() {
  const { messages } = useI18n()
  const t = messages.faq

  return (
    <Section
      id="faq"
      index="08"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {t.items.map((item, i) => (
          <Reveal key={item.q} delay={i * 40}>
            <details className="group rounded-2xl border border-ink/10 bg-base transition-colors open:border-ink/25">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-lg leading-snug text-ink">
                {item.q}
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-berry transition-transform duration-300 open:rotate-180"
                />
              </summary>
              <p className="border-t border-ink/10 px-5 py-4 text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ink-soft">
        {t.contactHint}{' '}
        <a
          href={MANUFACTURER.website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-berry hover:text-berry-deep"
        >
          {t.contactCta}
        </a>
      </p>
    </Section>
  )
}