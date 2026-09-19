import { NUTRIENTS } from '../data/product'
import { useI18n } from '../i18n/context'
import { formatDecimal } from '../lib/format'
import { Section } from './layout/Section'

export function FormulaSection() {
  const { messages, locale } = useI18n()
  const t = messages.formula

  return (
    <Section
      id="formule"
      index="04"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-base">
        <div className="hidden grid-cols-12 gap-4 border-b border-ink/10 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-ink-soft sm:grid sm:px-6">
          <span className="col-span-3">{t.columnLabels.nutrient}</span>
          <span className="col-span-2">{t.columnLabels.amount}</span>
          <span className="col-span-2">{t.rdaShort}</span>
          <span className="col-span-5">{t.columnLabels.role}</span>
        </div>

        <ul>
          {NUTRIENTS.map((n) => {
            const copy = t.nutrients[n.id]
            return (
              <li
                key={n.id}
                className="grid gap-1 border-b border-ink/10 px-2 py-5 last:border-b-0 sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:px-6"
              >
                <h3 className="font-display text-xl leading-snug sm:col-span-3">
                  {copy.name}
                </h3>
                <p className="text-lg font-semibold text-ink sm:col-span-2 sm:text-base">
                  {formatDecimal(n.amount, locale)} {n.unit}
                </p>
                <p className="text-sm font-medium text-berry sm:col-span-2 sm:text-sm">
                  {formatDecimal(n.rda, locale)} %
                </p>
                <p className="text-sm leading-relaxed text-ink-soft sm:col-span-5">
                  {copy.claim}
                </p>
              </li>
            )
          })}
        </ul>
      </div>

      <p className="mt-4 px-1 text-xs leading-relaxed text-ink-soft">
        {t.rdaNote}
      </p>

      <div className="mt-10 rounded-2xl bg-beige p-6 sm:p-8">
        <h3 className="kicker uppercase">{t.ingredientsLabel}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {t.ingredients}
        </p>
      </div>
    </Section>
  )
}