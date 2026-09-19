import { useI18n } from '../i18n/context'
import { Container } from './layout/Container'

export function CtaBand() {
  const { messages } = useI18n()
  const t = messages.cta

  return (
    <section aria-labelledby="cta-title" className="pb-20 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-berry px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full bg-berry-deep/50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-12 size-64 rounded-full bg-blush/25"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="cta-title"
              className="font-display text-3xl leading-tight text-base sm:text-5xl"
            >
              {t.title}
            </h2>
            <p className="mt-5 text-base text-base/90 sm:text-lg">{t.subtitle}</p>
            <div className="mt-9 flex justify-center">
              <a
                href="#buy"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-base px-8 text-base font-semibold text-berry transition-colors hover:bg-peach"
              >
                {t.ctaLabel}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {t.chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-base/20 bg-base/10 px-3 py-1 text-xs font-semibold text-base"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}