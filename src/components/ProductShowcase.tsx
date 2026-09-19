import { MousePointer2 } from 'lucide-react'

import ovocyplusCommercial from '../assets/product/ovocyplus-commercial.mp4'
import ovocyplusFrame2 from '../assets/product/ovocyplus-frame-2.webp'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useI18n } from '../i18n/context'
import { cn } from '../lib/cn'
import { Section } from './layout/Section'
import { ProductViewer3D } from './viewer/ProductViewer3D'

export function ProductShowcase() {
  const { messages } = useI18n()
  const t = messages.showcase
  const reduced = useReducedMotion()
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '0px 0px 300px 0px' })
  const playVideo = inView && !reduced

  return (
    <Section
      id="showcase"
      index="03"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="overflow-hidden rounded-3xl bg-beige p-4 sm:p-6 lg:col-span-3">
          <ProductViewer3D />
          <div className="mt-2 flex items-center justify-between gap-3 px-2 pb-1 sm:flex-row flex-col sm:items-center">
            <span className="flex items-center gap-2 text-sm text-ink-soft">
              <MousePointer2 size={16} aria-hidden="true" />
              {t.dragHint}
            </span>
            <span className="text-xs text-ink-soft">{t.stylizedNote}</span>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div
            ref={ref}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-beige"
          >
            <img
              src={ovocyplusFrame2}
              alt={t.videoFallbackAlt}
              className={cn(
                'absolute inset-0 size-full object-cover transition-opacity duration-500',
                playVideo ? 'opacity-0' : 'opacity-100',
              )}
            />
            {playVideo ? (
              <video
                className="absolute inset-0 size-full object-cover"
                src={ovocyplusCommercial}
                poster={ovocyplusFrame2}
                muted
                loop
                playsInline
                autoPlay
                preload="auto"
                role="img"
                aria-label={t.videoLabel}
              />
            ) : null}
          </div>
          <p className="mt-3 px-1 text-sm text-ink-soft">{t.videoLabel}</p>
        </div>
      </div>
    </Section>
  )
}