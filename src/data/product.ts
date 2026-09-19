export type NutrientId =
  | 'vc'
  | 've'
  | 'folate'
  | 'b6'
  | 'b12'
  | 'zinc'
  | 'iron'
  | 'magnesium'
  | 'selenium'
  | 'manganese'
  | 'vd'
  | 'copper'

export type GroupId = 'antioxidant' | 'fertility' | 'cellular' | 'folate'

export type Nutrient = {
  id: NutrientId
  amount: number
  unit: 'mg' | 'µg'
  /** % of the reference intake for a daily dose of 2 capsules */
  rda: number
}

export const NUTRIENTS: readonly Nutrient[] = [
  { id: 'vc', amount: 160, unit: 'mg', rda: 200 },
  { id: 've', amount: 24, unit: 'mg', rda: 200 },
  { id: 'folate', amount: 200, unit: 'µg', rda: 100 },
  { id: 'b6', amount: 2, unit: 'mg', rda: 142 },
  { id: 'b12', amount: 2.5, unit: 'µg', rda: 100 },
  { id: 'zinc', amount: 15, unit: 'mg', rda: 150 },
  { id: 'iron', amount: 14, unit: 'mg', rda: 100 },
  { id: 'magnesium', amount: 300, unit: 'mg', rda: 80 },
  { id: 'selenium', amount: 50, unit: 'µg', rda: 90 },
  { id: 'manganese', amount: 3.5, unit: 'mg', rda: 175 },
  { id: 'vd', amount: 5, unit: 'µg', rda: 100 },
  { id: 'copper', amount: 2, unit: 'mg', rda: 200 },
] as const

export const NUTRIENT_BY_ID: Readonly<Record<NutrientId, Nutrient>> =
  Object.fromEntries(NUTRIENTS.map((n) => [n.id, n])) as Readonly<
    Record<NutrientId, Nutrient>
  >

export const NUTRIENT_GROUPS: readonly {
  id: GroupId
  nutrientIds: readonly NutrientId[]
}[] = [
  {
    id: 'antioxidant',
    nutrientIds: ['vc', 've', 'selenium', 'manganese', 'copper'],
  },
  { id: 'fertility', nutrientIds: ['zinc', 'b6'] },
  {
    id: 'cellular',
    nutrientIds: ['zinc', 'iron', 'magnesium', 'copper', 'b12', 'vd'],
  },
  { id: 'folate', nutrientIds: ['folate'] },
]

export const DOSAGE = {
  capsulesPerDay: 2,
  capsulesPerBox: 60,
  courseMonths: 3,
} as const

export const MANUFACTURER = {
  name: 'DCMG Laboratoires',
  addressLine: '75 & 77 avenue Parmentier',
  city: '75011 Paris, France',
  website: 'https://www.dcmg-laboratoires.com',
} as const

export const QUALITY = {
  practices:
    'Bonnes pratiques de fabrication et de contrôle de la qualité',
  regulations: [
    '(CE) n° 178/2002 du 28 janvier 2002',
    '(CE) n° 852/2004 du 29 avril 2004',
  ] as const,
  frenchAuthority:
    "L'ensemble des ingrédients est autorisé en France pour entrer dans la composition de compléments alimentaires.",
} as const