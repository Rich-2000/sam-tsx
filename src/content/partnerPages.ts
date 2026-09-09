export type PartnerCategory = {
  title: string
  body: string
  items: string[]
}

export type PartnerPageConfig = {
  slug: string
  path: string
  pageId: string
  navLabel: string
  title: string
  description: string
  heroAccent: string
  heroRest: string
  heroBody: string
  heroImageSrc: string
  overviewTitle: string
  overviewBody: string
  overviewPoints: string[]
  categoriesTitle: string
  categoriesIntro: string
  categories: PartnerCategory[]
  quoteInterests: string[]
  quoteHeading: string
  quoteBody: string
}

export const partnerPageConfigs: PartnerPageConfig[] = [
  {
    slug: 'cardlogix',
    path: '/partners/cardlogix',
    pageId: 'maddy-partner-cardlogix',
    navLabel: 'CardLogix',
    title: 'CardLogix Smart Cards & Secure Identity | Maddy Group Ltd',
    description:
      'CardLogix smart cards, card printers, readers, biometric enrolment and SDKs — supplied and integrated by Maddy Group Ltd in Accra. Pricing by quote.',
    heroAccent: 'CardLogix smart cards ',
    heroRest: 'and secure identity',
    heroBody:
      'Smart cards, card printers, readers and developer tools for secure identity, access and payment — supplied, integrated and supported by Maddy Group Ltd in Accra.',
    heroImageSrc: '/images/brand/secure-access-man-susanne-plank-13657444.jpg',
    overviewTitle: 'What CardLogix covers',
    overviewBody:
      'Everything you need to issue and use secure cards: the cards themselves, the equipment to personalise them, the readers to use them and the software to build it all into your systems. We handle supply, integration and support locally.',
    overviewPoints: [
      'Contact and contactless smart cards',
      'Card printers and encoding equipment',
      'Readers, terminals and biometric enrolment',
      'SDKs and software for integration',
    ],
    categoriesTitle: 'Products and services',
    categoriesIntro:
      'Ask for a quote on any category below. We can also advise on the right mix of cards, hardware and software for your project.',
    categories: [
      {
        title: 'Smart Cards',
        body: 'Secure cards for identity, access, payment and loyalty programmes.',
        items: [
          'Contact, contactless and dual-interface cards',
          'Java Card and secure memory cards',
          'ID, payment and loyalty card options',
        ],
      },
      {
        title: 'Card Printers & Encoding',
        body: 'Personalise and program cards in-house with the right equipment.',
        items: [
          'Card printers and personalisation systems',
          'Encoding and issuance equipment',
        ],
      },
      {
        title: 'Readers & Terminals',
        body: 'Read and process cards reliably across your operations.',
        items: [
          'Contact and contactless readers',
          'Terminals for access and payment',
        ],
      },
      {
        title: 'Biometrics & Enrolment',
        body: 'Strengthen identity checks with biometric capture.',
        items: [
          'Fingerprint and biometric enrolment',
          'Secure authentication workflows',
        ],
      },
      {
        title: 'SDKs & Software',
        body: 'Build card technology into your own applications.',
        items: [
          'Software development kits (SDKs)',
          'Card management and issuance software',
        ],
      },
    ],
    quoteInterests: [
      'Smart Cards',
      'Card Printers & Encoding',
      'Readers & Terminals',
      'Biometrics & Enrolment',
      'SDKs & Software',
      'Not sure yet',
    ],
    quoteHeading: 'Request a CardLogix quote',
    quoteBody:
      'Tell us what you need to issue or secure — cards, hardware, software or the full setup — and we will come back with a clear quote.',
  },
  {
    slug: 'zenduit',
    path: '/partners/zenduit',
    pageId: 'maddy-partner-zenduit',
    navLabel: 'ZenduIT',
    title: 'ZenduIT Fleet Management & Telematics | Maddy Group Ltd',
    description:
      'ZenduIT GPS tracking, AI dash cameras, maintenance, ELD compliance and dispatch tools — deployed and supported by Maddy Group Ltd in Accra. Pricing by quote.',
    heroAccent: 'ZenduIT fleet ',
    heroRest: 'management and telematics',
    heroBody:
      'GPS tracking, AI dash cameras, maintenance and compliance tools to measure, monitor and manage your fleet — deployed, configured and supported by Maddy Group Ltd in Accra.',
    heroImageSrc: '/images/brand/accra-business-district-kwaku-37304183.jpg',
    overviewTitle: 'What ZenduIT covers',
    overviewBody:
      'A connected platform for fleets of any size: know where your vehicles and assets are, keep drivers safe, stay compliant and cut running costs — with local setup and support.',
    overviewPoints: [
      'Real-time GPS tracking and telematics',
      'AI dash cameras and driver safety',
      'Maintenance and asset management',
      'ELD compliance and reporting',
    ],
    categoriesTitle: 'Products and services',
    categoriesIntro:
      'Ask for a quote on any category below. We can scope a deployment for a single depot or a nationwide fleet.',
    categories: [
      {
        title: 'Fleet Telematics',
        body: 'Real-time location, trips, diagnostics and fault monitoring.',
        items: [
          'Live GPS tracking and trip history',
          'Engine diagnostics and fault alerts',
        ],
      },
      {
        title: 'Video Safety',
        body: 'AI dash cameras that watch the road and the driver.',
        items: [
          '360° AI dash cameras',
          'Driver behaviour alerts and coaching',
        ],
      },
      {
        title: 'Asset Tracking',
        body: 'Track powered and non-powered assets across sites.',
        items: [
          'Trailer and equipment tracking',
          'Fuel insights and utilisation',
        ],
      },
      {
        title: 'Maintenance & Asset Management',
        body: 'Keep vehicles serviced and running costs visible.',
        items: [
          'Service scheduling and reminders',
          'Ownership and running-cost analysis',
        ],
      },
      {
        title: 'Compliance (ELD)',
        body: 'Electronic logs and regulatory reporting.',
        items: [
          'Electronic logbooks (ELD)',
          'Compliance and audit reporting',
        ],
      },
      {
        title: 'Routing & Dispatch',
        body: 'Plan routes and dispatch work efficiently.',
        items: [
          'Route optimisation',
          'Automated dispatch and smart forms',
        ],
      },
    ],
    quoteInterests: [
      'Fleet Telematics',
      'Video Safety',
      'Asset Tracking',
      'Maintenance & Asset Management',
      'Compliance (ELD)',
      'Routing & Dispatch',
      'Not sure yet',
    ],
    quoteHeading: 'Request a ZenduIT quote',
    quoteBody:
      'Tell us your fleet size and what you want to improve — tracking, safety, maintenance or compliance — and we will come back with a clear quote.',
  },
  {
    slug: 'zaelet',
    path: '/partners/zaelet',
    pageId: 'maddy-partner-zaelet',
    navLabel: 'Zaelet Precision',
    title: 'Zaelet Precision Geospatial Instruments | Maddy Group Ltd',
    description:
      'Zaelet Precision GNSS receivers, total stations, theodolites, levels and surveying software — supplied, configured and supported by Maddy Group Ltd in Accra. Pricing by quote.',
    heroAccent: 'Zaelet Precision ',
    heroRest: 'surveying instruments',
    heroBody:
      'High-precision geospatial and surveying equipment — GNSS receivers, total stations, theodolites, levels and field software — supplied, configured and supported by Maddy Group Ltd in Accra.',
    heroImageSrc: '/images/brand/accra-modern-architecture-larry-dre-7066315.jpg',
    overviewTitle: 'What Zaelet covers',
    overviewBody:
      'From satellite positioning to field measurement and data collection, Zaelet instruments give surveyors and engineers accurate results at a practical price. We handle supply, setup and after-sales support locally.',
    overviewPoints: [
      'GNSS receivers for RTK and reference-station work',
      'Total stations and theodolites for precise angles',
      'Digital levels and radio data links',
      'Field and office surveying software',
    ],
    categoriesTitle: 'Products and services',
    categoriesIntro:
      'Ask for a quote on any category below. We can also advise on the right configuration for your survey work.',
    categories: [
      {
        title: 'GNSS Receivers',
        body: 'Full-constellation RTK receivers for high-precision positioning and reference-station setups.',
        items: [
          'F1 Mini portable receiver with tilt compensation',
          'F1 Pro compact smart receiver',
          'R26 base station',
          'R27 and R61 receivers',
        ],
      },
      {
        title: 'Total Stations',
        body: 'Advanced measurement for precise surveying and layout.',
        items: [
          'RNS total station (Android OS, 2" accuracy)',
          'RQS total station (1500m non-prism range)',
        ],
      },
      {
        title: 'Theodolites',
        body: 'Reliable angle measurement for construction and layout.',
        items: ['Disteo23 (2" accuracy, 300m range)'],
      },
      {
        title: 'Levels',
        body: 'Accurate levelling for engineering and construction.',
        items: ['RAL4 automatic level (1.5mm accuracy, 32x)'],
      },
      {
        title: 'Radio Communication',
        body: 'Long-range data links for RTK surveying.',
        items: ['UHF eRadio HX-DU8616D (up to 20km range)'],
      },
      {
        title: 'Surveying Software',
        body: 'Field and office software for data collection and processing.',
        items: [
          'tSurvey modular engineering software',
          'RTK Go positioning software',
        ],
      },
      {
        title: 'Accessories & Support',
        body: 'Field accessories, spares and local after-sales support.',
        items: [
          'Poles, tribrachs, batteries and spares',
          'Setup, training and technical support',
        ],
      },
    ],
    quoteInterests: [
      'GNSS Receivers',
      'Total Stations',
      'Theodolites',
      'Levels',
      'Radio Communication',
      'Surveying Software',
      'Accessories & Support',
      'Not sure yet',
    ],
    quoteHeading: 'Request a Zaelet quote',
    quoteBody:
      'Tell us the instruments or survey work you have in mind and we will come back with a clear quote and the right configuration.',
  },
]

export const partnerNavItems = partnerPageConfigs.map((config) => ({
  href: config.path,
  label: config.navLabel,
}))
