import { Info, PackageOpen, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { useI18n } from '../i18n/context'
import type { IntroKey } from '../i18n/types'
import { Reveal } from './Reveal'
import { Section } from './layout/Section'

const ICONS: Record<IntroKey, LucideIcon> = {
  what: PackageOpen,
  who: Users,
  caution: Info,
}

export function ProductIntro() {
  const { messages } = useI18n()
  const t = messages.productIntro

  return (
    <Section
      id="produit"
      index="01"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <ol className="grid gap-5 sm:grid-cols-3">
        {t.items.map((item, i) => {
          const Icon = ICONS[item.key]
          return (
            <Reveal as="li" key={item.key} delay={i * 100} className="list-none">
              <article className="flex h-full flex-col rounded-2xl bg-peach p-6 sm:p-8">
                <span className="flex size-12 items-center justify-center rounded-full bg-blush text-ink">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl">{item.heading}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </article>
            </Reveal>
          )
        })}
      </ol>

      <p className="hairline mt-10 border-t pt-5 text-center text-sm text-ink-soft">
        {t.reminder}
      </p>
    </Section>
  )
}