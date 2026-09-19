import { Star } from 'lucide-react'

import { REVIEWS, REVIEW_SCORE } from '../data/reviews'
import { useI18n } from '../i18n/context'
import { formatDate, formatDecimal } from '../lib/format'
import { Reveal } from './Reveal'
import { Section } from './layout/Section'

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="flex items-center gap-0.5 text-berry"
      role="img"
      aria-label={`${rating}/5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={15}
          aria-hidden="true"
          className={i <= rating ? 'fill-berry text-berry' : 'text-ink/20'}
        />
      ))}
    </span>
  )
}

export function ReviewsSection() {
  const { messages, locale } = useI18n()
  const t = messages.reviews

  return (
    <Section
      id="experiences"
      index="06"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col justify-center rounded-2xl bg-peach p-6 sm:p-8 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {t.scoreLabel}
          </p>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="font-display text-6xl text-ink">
              {formatDecimal(REVIEW_SCORE.value, locale)}
            </span>
            <span className="text-lg font-medium text-ink-soft">
              {t.scoreOf}
            </span>
          </p>
          <div className="mt-3">
            <Stars rating={5} />
          </div>
          <p className="mt-2 text-sm text-ink-soft">{t.basedOn}</p>
          <p className="mt-4 text-xs text-ink-soft">{t.sourceNote}</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {REVIEWS.map((review, i) => (
            <Reveal as="li" key={review.id} delay={i * 100} className="list-none">
              <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-base p-6 sm:p-7">
                <Stars rating={review.rating} />
                <p className="mt-4 font-display text-lg text-ink">
                  {review.author}
                </p>
                <p className="mt-1 text-xs text-ink-soft">
                  {formatDate(review.date, locale)}
                </p>
                <span className="mt-auto inline-block w-fit rounded-full bg-beige px-3 py-1 text-xs font-semibold text-ink">
                  {t.via} {t.markets[review.marketplace]}
                </span>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>

      <p className="mt-6 px-1 text-xs italic leading-relaxed text-ink-soft">
        {t.disclaimer}
      </p>
    </Section>
  )
}