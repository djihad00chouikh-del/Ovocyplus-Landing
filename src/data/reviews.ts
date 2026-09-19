export type ReviewMarketplace = 'bivea-fr' | 'bivea-med'

export type Review = {
  id: string
  author: string
  marketplace: ReviewMarketplace
  /** ISO date of publication on the partner shop */
  date: string
  rating: 1 | 2 | 3 | 4 | 5
}

export const REVIEW_SCORE = {
  value: 9.8,
  scale: 10,
  count: 8,
} as const

export const REVIEWS: readonly Review[] = [
  {
    id: 'marie-cecile-2023',
    author: 'Marie Cécile M.',
    marketplace: 'bivea-med',
    date: '2023-09-18',
    rating: 5,
  },
  {
    id: 'ezideen-2025',
    author: 'Ezideen M.',
    marketplace: 'bivea-med',
    date: '2025-05-26',
    rating: 5,
  },
]