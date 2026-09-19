import { BadgeCheck, ExternalLink, MapPin, Pill, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { MANUFACTURER, QUALITY } from '../data/product'
import type { QualityKey } from '../i18n/types'
import { useI18n } from '../i18n/context'
import { Reveal } from './Reveal'
import { Section } from './layout/Section'

const ICONS: Record<QualityKey, LucideIcon> = {
  made: MapPin,
  practices: ShieldCheck,
  ingredients: BadgeCheck,
  capsule: Pill,
}

const POINTS: readonly QualityKey[] = ['made', 'practices', 'ingredients', 'capsule']

export function QualitySection() {
  const { messages } = useI18n()
  const t = messages.quality

  return (
    <Section
      id="qualite"
      index="05"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <address className="not-italic rounded-2xl border border-ink/10 bg-base p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              {t.manufacturer}
            </p>
            <p className="mt-3 font-display text-3xl text-ink">
              {MANUFACTURER.name}
            </p>
            <div className="mt-2 space-y-1 text-ink-soft">
              <p>{MANUFACTURER.addressLine}</p>
              <p>{MANUFACTURER.city}</p>
            </div>
            <p className="mt-4 border-t border-ink/10 pt-4 text-sm text-ink-soft">
              {QUALITY.regulations[0]}
              <br />
              {QUALITY.regulations[1]}
            </p>
            <a
              href={MANUFACTURER.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-berry hover:text-berry-deep"
            >
              {t.siteLabel}
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </address>
          <p className="mt-4 px-1 text-sm leading-relaxed text-ink-soft">
            {QUALITY.frenchAuthority}
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {POINTS.map((key, i) => {
            const Icon = ICONS[key]
            const point = t.points[key]
            return (
              <Reveal as="li" key={key} delay={i * 80} className="list-none">
                <article className="h-full rounded-2xl bg-peach p-6 sm:p-7">
                  <span className="flex size-11 items-center justify-center rounded-full bg-base/80 text-berry">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl leading-tight">
                    {point.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {point.body}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}