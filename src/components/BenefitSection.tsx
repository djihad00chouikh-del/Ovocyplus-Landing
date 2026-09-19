import { Dna, Flower2, ShieldCheck, Sprout } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { NUTRIENT_GROUPS } from '../data/product'
import type { GroupId, NutrientId } from '../data/product'
import { useI18n } from '../i18n/context'
import { cn } from '../lib/cn'
import { Reveal } from './Reveal'
import { Section } from './layout/Section'

const ICONS: Record<GroupId, LucideIcon> = {
  antioxidant: ShieldCheck,
  fertility: Flower2,
  cellular: Dna,
  folate: Sprout,
}

const CARD_TONES: Record<GroupId, string> = {
  antioxidant: 'bg-peach',
  fertility: 'bg-beige',
  cellular: 'bg-peach',
  folate: 'bg-beige',
}

export function BenefitSection() {
  const { messages } = useI18n()
  const t = messages.benefits
  const formula = messages.formula

  return (
    <Section
      id="benefices"
      index="02"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {NUTRIENT_GROUPS.map((group, i) => {
          const Icon = ICONS[group.id]
          const copy = t.groups[group.id]
          return (
            <Reveal as="li" key={group.id} delay={i * 90} className="list-none">
              <article
                className={cn(
                  'flex h-full flex-col rounded-2xl p-6',
                  CARD_TONES[group.id],
                )}
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-base/80 text-berry">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl leading-tight">
                  {copy.heading}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {copy.body}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {group.nutrientIds.map((id) => (
                    <li
                      key={id}
                      className="rounded-full bg-base/80 px-3 py-1 text-xs font-semibold text-ink"
                    >
                      {formula.nutrients[id as NutrientId].name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}