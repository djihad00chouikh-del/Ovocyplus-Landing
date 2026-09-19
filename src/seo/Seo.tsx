import { useEffect } from 'react'

import { MANUFACTURER } from '../data/product'
import { useI18n } from '../i18n/context'
import { LOCALE_PATH } from '../i18n/navigation'
import type { Locale } from '../i18n/types'

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
  'https://ovocyplus.pages.dev'

const OG_LOCALE: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  ar: 'ar_SA',
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  )
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="alternate"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`
  let link = document.head.querySelector<HTMLLinkElement>(selector)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    if (hreflang) {
      link.setAttribute('type', 'text/html')
      link.setAttribute('hreflang', hreflang)
    }
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function upsertJsonLd(id: string, data: object) {
  const existing = document.querySelector(`script#${id}`)
  if (existing) {
    existing.textContent = JSON.stringify(data)
    return
  }
  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

type SeoProps = {
  title: string
  description: string
}

export function Seo({ title, description }: SeoProps) {
  const { locale, messages } = useI18n()

  useEffect(() => {
    const url = `${SITE_URL}${LOCALE_PATH[locale]}`
    document.title = title

    upsertMeta('name', 'description', description)

    upsertLink('canonical', url)

    for (const [l, path] of Object.entries(LOCALE_PATH)) {
      upsertLink('alternate', `${SITE_URL}${path}`, l)
    }
    upsertLink('alternate', `${SITE_URL}/`, 'x-default')

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', 'Ovocyplus®')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:image', `${SITE_URL}/og-image.jpg`)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:locale', OG_LOCALE[locale])

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', `${SITE_URL}/og-image.jpg`)

    upsertJsonLd('seo-product', {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Ovocyplus®',
      description,
      image: [`${SITE_URL}/og-image.jpg`],
      brand: {
        '@type': 'Brand',
        name: MANUFACTURER.name,
      },
    })

    upsertJsonLd('seo-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: MANUFACTURER.name,
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: MANUFACTURER.addressLine,
        addressLocality: 'Paris',
        postalCode: '75011',
        addressCountry: 'FR',
      },
    })

    upsertJsonLd('seo-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: messages.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    })
  }, [title, description, messages, locale])

  return null
}