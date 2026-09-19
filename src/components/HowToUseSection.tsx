import { CalendarDays, HeartPulse, Pill } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import type { HowToStepKey } from '../i18n/types'
import { useI18n } from '../i18n/context'
import { Reveal } from './Reveal'
import { Section } from './layout/Section'

const STEPS: readonly HowToStepKey[] = ['take', 'duration', 'followup']

const ICONS: Record<HowToStepKey, LucideIcon> = {
  take: Pill,
  duration: CalendarDays,
  followup: HeartPulse,
}

export function HowToUseSection() {
  const { messages } = useI18n()
  const t = messages.howToUse

  return (
    <Section
      id="utilisation"
      index="07"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <ol className="grid gap-4">
        {STEPS.map((step, i) => {
          const Icon = ICONS[step]
          const copy = t.steps[step]
          return (
            <Reveal as="li" key={step} delay={i * 80} className="list-none">
              <article className="flex items-start gap-5 rounded-2xl border border-ink/10 bg-base p-6 sm:p-8">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-peach text-berry">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-berry">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-xl leading-snug text-ink">
                    {copy.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {copy.body}
                  </p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </ol>

      <p className="hairline mt-10 border-t pt-5 text-center text-sm font-medium text-ink">
        {t.dosageSummary}
      </p>
      <p className="mt-2 px-1 text-center text-xs text-ink-soft">
        {t.reminder}
      </p>
    </Section>
  )
}