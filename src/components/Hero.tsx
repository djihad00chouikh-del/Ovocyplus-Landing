import ovocyplusFrame1 from '../assets/product/ovocyplus-frame-1.webp'

import { useI18n } from '../i18n/context'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Container } from './layout/Container'

export function Hero() {
  const { messages } = useI18n()
  const t = messages.hero

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="overflow-hidden py-14 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="kicker">{t.kicker}</p>
            <h1
              id="hero-title"
              className="mt-5 font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            >
              {t.title}
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg text-ink-soft">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#buy" size="lg">
                {t.primaryCta}
              </Button>
              <Button href="#formule" variant="secondary" size="lg">
                {t.secondaryCta}
              </Button>
            </div>

            <ul className="mt-9 flex flex-wrap gap-2" aria-label={t.kicker}>
              {t.badges.map((badge) => (
                <li key={badge}>
                  <Badge>{badge}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto max-w-[420px]">
              <div
                aria-hidden="true"
                className="absolute inset-x-2 -top-6 bottom-4 -z-10 rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-b from-blush to-beige"
              />
              <div className="relative rounded-t-[999px] rounded-b-[2rem] bg-beige px-10 pb-6 pt-12 sm:pt-14">
                <img
                  src={ovocyplusFrame1}
                  alt={t.imageAlt}
                  width={1200}
                  height={1200}
                  fetchPriority="high"
                  decoding="async"
                  className="mx-auto w-[min(100%,360px)] drop-shadow-[0_28px_36px_rgba(39,26,32,0.22)]"
                />
              </div>
              <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-base px-5 py-2 text-sm font-semibold text-ink shadow-[0_12px_28px_-10px_rgba(39,26,32,0.3)]">
                {t.capsuleBadge}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}