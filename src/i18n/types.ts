import type { GroupId, NutrientId } from '../data/product'
import type { ReviewMarketplace } from '../data/reviews'

export type Locale = 'fr' | 'en' | 'ar'

export type IntroKey = 'what' | 'who' | 'caution'

export type QualityKey = 'made' | 'practices' | 'ingredients' | 'capsule'

export type HowToStepKey = 'take' | 'duration' | 'followup'

export interface Messages {
  a11y: {
    skipToContent: string
    changeLanguage: string
    openMenu: string
    closeMenu: string
  }
  nav: {
    formula: string
    quality: string
    experiences: string
    faq: string
    utilisation: string
  }
  header: {
    cta: string
  }
  hero: {
    kicker: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    badges: readonly string[]
    capsuleBadge: string
    imageAlt: string
  }
  productIntro: {
    kicker: string
    title: string
    description: string
    items: readonly {
      key: IntroKey
      heading: string
      body: string
    }[]
    reminder: string
  }
  benefits: {
    kicker: string
    title: string
    description: string
    includesLabel: string
    groups: Record<
      GroupId,
      {
        heading: string
        body: string
      }
    >
  }
  showcase: {
    kicker: string
    title: string
    description: string
    galleryLabel: string
    slides: readonly string[]
    videoLabel: string
    videoFallbackAlt: string
  }
  formula: {
    kicker: string
    title: string
    description: string
    perTwoCapsules: string
    rdaShort: string
    columnLabels: {
      nutrient: string
      amount: string
      role: string
    }
    rdaNote: string
    nutrients: Record<
      NutrientId,
      {
        name: string
        claim: string
      }
    >
    groupLabels: Record<GroupId, string>
    ingredientsLabel: string
    ingredients: string
  }
  quality: {
    kicker: string
    title: string
    description: string
    points: Record<
      QualityKey,
      {
        heading: string
        body: string
      }
    >
    manufacturer: string
    siteLabel: string
  }
  reviews: {
    kicker: string
    title: string
    description: string
    scoreLabel: string
    scoreOf: string
    basedOn: string
    sourceNote: string
    via: string
    markets: Record<ReviewMarketplace, string>
    disclaimer: string
  }
  howToUse: {
    kicker: string
    title: string
    description: string
    dosageSummary: string
    reminder: string
    steps: Record<
      HowToStepKey,
      {
        heading: string
        body: string
      }
    >
  }
  faq: {
    kicker: string
    title: string
    description: string
    items: readonly {
      q: string
      a: string
    }[]
    contactHint: string
    contactCta: string
  }
  cta: {
    title: string
    subtitle: string
    ctaLabel: string
    chips: readonly string[]
  }
  footer: {
    brandKicker: string
    navLabel: string
    languageLabel: string
    madeInFrance: string
    notMedicine: string
    disclaimer: string
    rights: string
    backToTop: string
  }
  seo: {
    title: string
    description: string
  }
}