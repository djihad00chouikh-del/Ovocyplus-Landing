import type { Messages } from '../types'

export const fr = {
  a11y: {
    skipToContent: 'Aller au contenu',
    changeLanguage: 'Changer de langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
nav: {
    formula: 'La formule',
    quality: 'La qualité',
    experiences: 'Avis clientes',
    faq: 'FAQ',
    utilisation: "Mode d'emploi",
  },
  header: {
    cta: 'Accès au produit',
  },
  hero: {
    kicker: 'DCMG Laboratoires · France',
    title: 'Des nutriments ciblés pour les femmes qui désirent un enfant.',
    subtitle:
      "Ovocyplus® est un complément alimentaire français, formulé pour couvrir les besoins nutritionnels des femmes désirant un enfant — 12 vitamines et minéraux, deux capsules par jour.",
    primaryCta: 'Accès au produit',
    secondaryCta: 'Découvrir la formule',
    badges: ['Fabriqué en France', '12 nutriments', 'Gélules végétales', 'Vegan'],
    capsuleBadge: '60 gélules — 2 / jour',
    imageAlt: "Boîte d'Ovocyplus®, complément alimentaire DCMG Laboratoires",
  },
  productIntro: {
    kicker: 'Le produit',
    title: 'Un complément alimentaire pensé pour la préconception.',
    description:
      "En bref : ce que contient Ovocyplus, pour qui il est conçu, et ce qu'il n'est pas.",
    items: [
      {
        key: 'what',
        heading: 'Ce que c’est',
        body: 'Ovocyplus® réunit 12 vitamines et minéraux ciblés dans deux capsules végétales par jour.',
      },
      {
        key: 'who',
        heading: 'Pour qui',
        body: 'Formulé pour les femmes qui désirent un enfant et souhaitent couvrir leurs besoins nutritionnels.',
      },
      {
        key: 'caution',
        heading: 'Ce que ce n’est pas',
        body: 'Ovocyplus est un complément alimentaire : il ne remplace ni une alimentation variée et équilibrée, ni un avis médical.',
      },
    ],
    reminder: 'Complément alimentaire · 60 gélules · 2 par jour',
  },
  benefits: {
    kicker: 'Apport nutritionnel',
    title: 'Quatre familles de nutriments, un objectif.',
    description:
      'Les nutriments d’Ovocyplus sont regroupés selon leur rôle, comme décrit dans la formule officielle du laboratoire.',
    includesLabel: 'Dans ce groupe',
    groups: {
      antioxidant: {
        heading: 'Protection antioxydante',
        body: 'Les vitamines C et E, le sélénium, le manganèse et le cuivre contribuent à protéger les cellules contre le stress oxydatif.',
      },
      fertility: {
        heading: 'Fertilité & équilibre hormonal',
        body: 'Le zinc contribue à une fertilité et une reproduction normales ; la vitamine B6 aide à réguler l’activité hormonale.',
      },
      cellular: {
        heading: 'Division cellulaire & ADN',
        body: 'Zinc, fer, magnésium, cuivre, vitamines B12 et D jouent un rôle dans le processus de division cellulaire ; le zinc participe à la synthèse normale de l’ADN.',
      },
      folate: {
        heading: 'Folate & tissus maternels',
        body: 'Le folate contribue à la croissance des tissus maternels durant la grossesse — un compagnon dès la préconception.',
      },
    },
  },
  showcase: {
    kicker: 'En 3D',
    title: 'La boîte, en trois dimensions.',
    description:
      'Un aperçu stylisé du pack, librement manipulable — accompagné du film produit, diffusé sans son.',
    dragHint: 'Faites pivoter',
    stylizedNote: 'Représentation stylisée',
    videoLabel: 'Vidéo de présentation Ovocyplus®',
    videoFallbackAlt: 'Image fixe du film produit',
  },
  formula: {
    kicker: 'La formule',
    title: '12 vitamines et minéraux, la liste complète.',
    description:
      'Quantités pour 2 capsules, avec leur part de l’apport journalier de référence (AJR*).',
    perTwoCapsules: 'Pour 2 capsules',
    rdaShort: 'AJR*',
    columnLabels: {
      nutrient: 'Nutriment',
      amount: 'Pour 2 capsules',
      role: 'Rôle',
    },
    rdaNote:
      '* AJR : apport journalier de référence, pour 2 capsules par jour. Les quantités correspondent à la dose quotidienne recommandée.',
    nutrients: {
      vc: {
        name: 'Vitamine C',
        claim: 'Protège les cellules contre le stress oxydatif · augmente l’absorption du fer',
      },
      ve: {
        name: 'Vitamine E',
        claim: 'Protège les cellules contre le stress oxydatif',
      },
      folate: {
        name: 'Folate',
        claim: 'Contribue à la croissance des tissus maternels durant la grossesse',
      },
      b6: {
        name: 'Vitamine B6',
        claim: 'Aide à réguler l’activité hormonale',
      },
      b12: {
        name: 'Vitamine B12',
        claim: 'Joue un rôle dans le processus de division cellulaire',
      },
      zinc: {
        name: 'Zinc',
        claim: 'Contribue à une fertilité et une reproduction normales · à la synthèse normale de l’ADN',
      },
      iron: {
        name: 'Fer',
        claim: 'Joue un rôle dans le processus de division cellulaire',
      },
      magnesium: {
        name: 'Magnésium',
        claim: 'Joue un rôle dans le processus de division cellulaire',
      },
      selenium: {
        name: 'Sélénium',
        claim: 'Contribue à protéger les cellules contre le stress oxydatif',
      },
      manganese: {
        name: 'Manganèse',
        claim: 'Contribue à protéger les cellules contre le stress oxydatif',
      },
      vd: {
        name: 'Vitamine D',
        claim: 'Joue un rôle dans le processus de division cellulaire',
      },
      copper: {
        name: 'Cuivre',
        claim: 'Augmente l’absorption du fer · protège les cellules contre le stress oxydatif',
      },
    },
    groupLabels: {
      antioxidant: 'Antioxydants',
      fertility: 'Fertilité & hormones',
      cellular: 'Division cellulaire & ADN',
      folate: 'Folate & grossesse',
    },
    ingredientsLabel: 'Ingrédients',
    ingredients:
      'Oxyde de magnésium ; vitamine C ; vitamine E ; sulfate de fer ; sulfate de zinc ; levure de sélénium ; sulfate de manganèse ; antiagglomérant ; stéarate de magnésium d’origine végétale ; vitamine B6 ; vitamine B12 ; vitamine D ; folates ; cuivre ; gélule d’origine végétale.',
  },
  quality: {
    kicker: 'Qualité française',
    title: 'Conçue et fabriquée en France.',
    description:
      'Ovocyplus est conçu, produit et contrôlé par DCMG Laboratoires, à Paris, selon les exigences des bonnes pratiques de fabrication.',
    points: {
      made: {
        heading: 'Fabriqué en France',
        body: 'Conception, production et contrôle qualité assumés par DCMG Laboratoires, à Paris.',
      },
      practices: {
        heading: 'Bonnes pratiques',
        body: 'Fabrication et contrôles conformes aux règlements (CE) n° 178/2002 et (CE) n° 852/2004.',
      },
      ingredients: {
        heading: 'Ingrédients autorisés',
        body: 'Tous les ingrédients sont autorisés en France pour entrer dans la composition de compléments alimentaires.',
      },
      capsule: {
        heading: 'Gélule d’origine végétale',
        body: 'Gélule HPMC d’origine végétale, adaptée aux régimes vegan.',
      },
    },
    manufacturer: 'Le laboratoire',
    siteLabel: 'Voir le site du laboratoire',
  },
  reviews: {
    kicker: 'Avis clients',
    title: 'Ce qu’elles en disent.',
    description:
      'Avis réels publiés sur les boutiques en ligne partenaires du laboratoire.',
    scoreLabel: 'Note moyenne',
    scoreOf: '/10',
    basedOn: 'sur 8 avis clients, bivea.fr',
    sourceNote: 'Sources : bivea.fr et shop.bivea-medical.fr',
    via: 'via',
    markets: {
      'bivea-fr': 'Bivea',
      'bivea-med': 'Shop Bivea Médical',
    },
    disclaimer:
      'Avis laissés par de réelles clientes sur les boutiques partenaires : des expériences individuelles, sans garantie de résultat.',
  },
  howToUse: {
    kicker: 'Mode d’emploi',
    title: 'Simple et régulier, dès maintenant.',
    description:
      'Un rituel simple à tenir, comme votre projet bébé — jour après jour.',
    dosageSummary: '2 gélules par jour · boîte de 60 · cure de 3 mois',
    reminder:
      'Complément alimentaire qui ne remplace ni une alimentation variée et équilibrée, ni un mode de vie sain.',
    steps: {
      take: {
        heading: 'Prenez 2 gélules par jour',
        body: 'La dose conseillée est de 2 gélules par jour, à prendre de préférence au cours d’un repas.',
      },
      duration: {
        heading: 'Une cure d’au moins 3 mois',
        body: 'Comme pour tout complément nutritionnel, la cure est conseillée sur 3 mois minimum pour accompagner durablement le projet bébé.',
      },
      followup: {
        heading: 'En lien avec votre suivi médical',
        body: 'Poursuivez votre suivi et parlez-en à votre professionnel de santé, qui vous conseillera sur une complémentation adaptée.',
      },
    },
  },
  faq: {
    kicker: 'FAQ',
    title: 'Les questions fréquentes.',
    description:
      'Des réponses courtes et vérifiées, pour lever les derniers doutes.',
    items: [
      {
        q: 'Qu’est-ce qu’Ovocyplus® ?',
        a: 'Ovocyplus® est un complément alimentaire français de DCMG Laboratoires. Il réunit 12 vitamines et minéraux — zinc, acide folique, vitamines B6, B12, C, D entre autres — pour couvrir les besoins nutritionnels des femmes qui souhaitent un enfant. Il se présente sous forme de gélules, à raison de 2 par jour. Ce n’est pas un médicament.',
      },
      {
        q: 'Combien de temps le prendre ?',
        a: '2 gélules par jour, de préférence au cours d’un repas. Comme pour tout complément nutritionnel, la cure est conseillée sur au moins 3 mois, en poursuivant par ailleurs votre suivi habituel.',
      },
      {
        q: 'En quoi est-il spécifique au projet bébé ?',
        a: 'Sa formule cible la période pré-conceptionnelle : le zinc contribue à une fertilité et à une reproduction normales, le folate à la croissance des tissus maternels pendant la grossesse, et la vitamine B6 à la régulation de l’activité hormonale.',
      },
      {
        q: 'Puis-je le prendre pendant la grossesse ou l’allaitement ?',
        a: 'Avant toute prise, et en cas de grossesse, d’allaitement ou de traitement en cours, demandez l’avis d’un professionnel de santé.',
      },
      {
        q: 'Est-il adapté aux régimes vegan ?',
        a: 'Les gélules sont d’origine végétale (HPMC), adaptées à un régime vegan. Vérifiez toutefois avec votre professionnel de santé la pertinence d’une complémentation dans votre cas.',
      },
      {
        q: 'Y a-t-il des précautions d’emploi ?',
        a: 'Ne pas dépasser la dose journalière conseillée, ne pas multiplier les compléments alimentaires et tenir hors de portée des jeunes enfants. Un complément alimentaire ne doit pas se substituer à une alimentation variée et équilibrée ni à un mode de vie sain.',
      },
      {
        q: 'Où l’acheter ?',
        a: 'Ovocyplus® est disponible en ligne, notamment sur bivea.fr et shop.bivea-medical.fr.',
      },
    ],
    contactHint: 'Une autre question ?',
    contactCta: 'Consultez le site du laboratoire',
  },
  cta: {
    title: 'Votre projet bébé mérite un soutien adapté.',
    subtitle:
      'Ovocyplus® : 12 vitamines et minéraux, 2 gélules par jour, une fabrication française.',
    ctaLabel: "Voir où l'acheter",
    chips: [
      '60 gélules',
      '2 par jour',
      'Fabriqué en France',
      "Gélules d'origine végétale",
    ],
  },
  footer: {
    brandKicker: 'Complément alimentaire — 60 gélules',
    navLabel: 'Navigation',
    languageLabel: 'Langue',
    madeInFrance: 'Conçu et fabriqué en France',
    notMedicine: 'Ce produit est un complément alimentaire, et non un médicament.',
    disclaimer:
      "Ce produit est un complément alimentaire, et non un médicament. Respectez la dose journalière indiquée et ne la dépassez pas. Une alimentation variée et équilibrée et un mode de vie sain restent essentiels. En cas de grossesse, d'allaitement ou de traitement médical, demandez conseil à un professionnel de santé. Tenir hors de portée des jeunes enfants. Les effets observés peuvent varier d'une personne à l'autre et ne sont pas garantis.",
    rights: 'Tous droits réservés.',
    backToTop: 'Haut de page',
  },
  seo: {
    title: 'Ovocyplus® | Complément alimentaire — DCMG Laboratoires',
    description:
      "Ovocyplus®, complément alimentaire français de DCMG Laboratoires : 12 vitamines et minéraux (zinc, folate, vitamines B6, C, D…) pour couvrir les besoins nutritionnels des femmes désirant un enfant. 60 gélules végétales.",
  },
} satisfies Messages