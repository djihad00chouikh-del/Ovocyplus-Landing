import { useEffect, useState } from 'react'

import ovocyplusCommercial from '../assets/product/ovocyplus-commercial.mp4'
import ovocyplusFrame1 from '../assets/product/ovocyplus-frame-1.webp'
import ovocyplusFrame2 from '../assets/product/ovocyplus-frame-2.webp'
import ovocyplusPack from '../assets/product/ovocyplus-pack-500.jpg'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useI18n } from '../i18n/context'
import { cn } from '../lib/cn'
import { Section } from './layout/Section'

const galleryImages = [ovocyplusFrame1, ovocyplusFrame2, ovocyplusPack]

export function ProductShowcase() {
  const { messages } = useI18n()
  const t = messages.showcase
  const reduced = useReducedMotion()
  const { ref: galleryRef, inView: galleryInView } = useInView<HTMLDivElement>()
  const { ref: videoRef, inView: videoInView } = useInView<HTMLDivElement>()
  const playVideo = videoInView && !reduced

  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!galleryInView || reduced) return
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % galleryImages.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [galleryInView, reduced])

  return (
    <Section
      id="showcase"
      index="03"
      kicker={t.kicker}
      title={t.title}
      description={t.description}
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="overflow-hidden rounded-3xl bg-beige p-3 sm:p-4 lg:col-span-3">
          <div
            ref={galleryRef}
            role="group"
            aria-roledescription="carousel"
            aria-label={t.galleryLabel}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            {galleryImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={t.slides[i]}
                className={cn(
                  'absolute inset-0 size-full object-cover transition-opacity duration-700',
                  i === active ? 'opacity-100' : 'opacity-0',
                )}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 pb-1">
            {galleryImages.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${t.galleryLabel} — ${i + 1}/${galleryImages.length}`}
                aria-current={i === active ? 'true' : undefined}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300',
                  i === active ? 'w-6 bg-ink' : 'w-2.5 bg-ink/30 hover:bg-ink/50',
                )}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div
            ref={videoRef}
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