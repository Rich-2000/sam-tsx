export type TechnologyFeatureBlock = {
  title: string
  body: string
  points: string[]
  imageSrc: string
  imageAlt: string
  imageFirst?: boolean
}

export type TechnologyPageConfig = {
  path: string
  pageId: string
  title: string
  description: string
  heroAccent: string
  heroRest: string
  heroBody: string
  heroImageSrc: string
  heroImageAlt: string
  overviewTitle: string
  overviewBody: string
  overviewPoints: string[]
  featureBlocks: TechnologyFeatureBlock[]
  ctaAccent: string
  ctaRest: string
  ctaBody: string
}

export const technologyPageConfigs: TechnologyPageConfig[] = [
  {
    path: '/uav',
    pageId: 'maddy-uav',
    title: 'UAV Operations | Maddy Group Ltd',
    description:
      'Aerial surveillance, mapping, inspection and monitoring services from Maddy Group Ltd in Accra. Pricing is by quote.',
    heroAccent: 'UAV operations ',
    heroRest: 'for Ghana',
    heroBody:
      'Aerial surveillance, precision mapping, infrastructure inspection and environmental monitoring for organisations that need clear views from above.',
    heroImageSrc: '/images/brand/accra-spintex-skyline-storm.jpg',
    heroImageAlt: 'Accra skyline under storm clouds',
    overviewTitle: 'What we fly for',
    overviewBody:
      'From security monitoring to construction documentation, we plan and deliver UAV missions with clear scopes and deliverables. Platforms referenced include NEXTECH, DELTAQUAD, JOUAV and VTOL options.',
    overviewPoints: [
      'Aerial surveillance and security monitoring',
      'Precision mapping and 3D surveying',
      'Infrastructure inspection and thermal imaging',
      'Agricultural, environmental and construction documentation',
    ],
    featureBlocks: [
      {
        title: 'Mapping and inspection',
        body: 'Capture site data your teams can act on: orthomosaics, inspection imagery and progress documentation for projects across Ghana.',
        points: [
          'Precision mapping and surveying support',
          'Infrastructure and facility inspection flights',
          'Construction documentation and progress views',
          'Thermal imaging when heat signatures matter',
        ],
        imageSrc:
          'https://maddy-web-assets.lon1.cdn.digitaloceanspaces.com/UAV%20-%20Operations-1.avif',
        imageAlt: 'Modern glass architecture in Accra',
        imageFirst: true,
      },
      {
        title: 'Surveillance and response support',
        body: 'Use aerial views for security monitoring, emergency situational awareness and wide-area environmental checks.',
        points: [
          'Aerial surveillance for security teams',
          'Emergency response situational views',
          'Agricultural and environmental monitoring',
          'Clear deliverables defined before each mission',
        ],
        imageSrc:
          'https://maddy-web-assets.lon1.cdn.digitaloceanspaces.com/UAV%20-%20Operations%20-2.jpg',
        imageAlt: 'Accra city skyline with modern towers',
      },
    ],
    ctaAccent: 'Ready to ',
    ctaRest: 'plan a flight',
    ctaBody: 'Tell us the site, outcome and timeline. We will come back with a clear quote.',
  },
  {
    path: '/iot-smart-cards',
    pageId: 'maddy-iot',
    title: 'IoT & Smart Cards | Maddy Group Ltd',
    description:
      'IoT systems, smart cards and secure access solutions from Maddy Group Ltd in Accra, backed by CardLogix partnership options. Pricing is by quote.',
    heroAccent: 'IoT and ',
    heroRest: 'smart cards',
    heroBody:
      'Connected systems, sensor networks and smart card solutions for access control, identity and industrial operations, with CardLogix partnership options where cards are required.',
    heroImageSrc: '/images/brand/smart-card-susanne-plank-13657375.jpg',
    heroImageAlt: 'Access card presented to a secure reader',
    overviewTitle: 'What we deploy',
    overviewBody:
      'From sensor networks and building automation to employee ID and secure authentication cards, we design systems your operators can run day to day.',
    overviewPoints: [
      'Custom IoT systems and sensor networks',
      'Smart building automation and industrial IoT',
      'Access control, payment, ID and loyalty cards',
      'Biometric enrolment and secure authentication options',
    ],
    featureBlocks: [
      {
        title: 'Connected operations',
        body: 'Build the field data layer for plants, yards, buildings and multi-site operations that need reliable sensors and controls.',
        points: [
          'Sensor networks matched to your sites',
          'Smart building and facility monitoring',
          'Industrial IoT for plants and yards',
          'Integration with the tools you already run',
        ],
        imageSrc: '/images/brand/industrial-automation-freek-wolsink-34222005.jpg',
        imageAlt: 'Industrial automation equipment on a production line',
        imageFirst: true,
      },
      {
        title: 'Cards and identity',
        body: 'Smart cards for access, ID and authentication, with enrolment workflows when biometrics strengthen checks.',
        points: [
          'Employee and student ID cards',
          'Access control and secure authentication',
          'Payment and loyalty card options',
          'CardLogix-backed enrolment pathways',
        ],
        imageSrc: '/images/brand/secure-access-woman-susanne-plank-13657415.jpg',
        imageAlt: 'Identity card used at a secure access reader',
      },
    ],
    ctaAccent: 'Ready to ',
    ctaRest: 'scope a deployment',
    ctaBody: 'Tell us the sites, users and outcomes. We will come back with a clear quote.',
  },
  {
    path: '/ict-procurement',
    pageId: 'maddy-ict',
    title: 'ICT Procurement | Maddy Group Ltd',
    description:
      'ICT equipment sourcing and software licensing support from Maddy Group Ltd in Accra. Pricing is by quote.',
    heroAccent: 'ICT tools ',
    heroRest: 'you can run',
    heroBody:
      'Equipment sourcing and software licensing so teams can buy the tools they need without running a separate procurement project.',
    heroImageSrc: '/images/brand/server-rack-panumas-17489156.jpg',
    heroImageAlt: 'Server infrastructure in a modern data centre',
    overviewTitle: 'What we source',
    overviewBody:
      'We help organisations specify, source and stand up the hardware and software that sit under their cybersecurity and application work.',
    overviewPoints: [
      'ICT equipment sourcing for projects and operations',
      'Software licensing aligned to your stack',
      'Advice that fits security and delivery scopes',
      'Support through quote, supply and handover',
    ],
    featureBlocks: [
      {
        title: 'Procurement with context',
        body: 'Buying is easier when the same team understands how the tools will be secured, integrated and supported.',
        points: [
          'Hardware and licensing recommendations by use case',
          'Vendor coordination for quotes and delivery',
          'Handover that matches your deployment plan',
          'Optional follow-on support and maintenance',
        ],
        imageSrc: 'https://maddy-web-assets.lon1.cdn.digitaloceanspaces.com/Ict-procurement-3.avif',
        imageAlt: 'Network cabling in data-centre infrastructure',
        imageFirst: true,
      },
    ],
    ctaAccent: 'Ready to ',
    ctaRest: 'source tools',
    ctaBody: 'Share the equipment or licences you need. We will come back with a clear quote.',
  },
  {
    path: '/training',
    pageId: 'maddy-training',
    title: 'Training | Maddy Group Ltd',
    description:
      'Cybersecurity training programmes for staff and partners from Maddy Group Ltd in Accra, including third-party risk management courses. Pricing is by quote.',
    heroAccent: 'Training that ',
    heroRest: 'sticks',
    heroBody:
      'Cybersecurity training programmes for staff and partners, including focused courses such as third-party risk management.',
    heroImageSrc: '/images/brand/accra-electronics-workshop-zeal-33920035.jpg',
    heroImageAlt: 'Electronics workshop setup in Accra',
    overviewTitle: 'What we teach',
    overviewBody:
      'Practical sessions that help teams recognise risk, follow process and improve day-to-day security habits without drowning them in theory.',
    overviewPoints: [
      'Cybersecurity awareness and role-based training',
      'Third-party risk management programmes',
      'Phishing and incident readiness exercises',
      'Operator training after system deployments',
    ],
    featureBlocks: [
      {
        title: 'Programmes for real teams',
        body: 'We tailor sessions to the people in the room: executives, operators, procurement and technical staff.',
        points: [
          'Short courses with clear learning outcomes',
          'Third-party risk management workshops',
          'Security training paired with phishing simulation',
          'Operator training after IoT or software go-live',
        ],
        imageSrc: '/images/brand/accra-stem-class-zeal-33920052.jpg',
        imageAlt: 'Technology classroom environment in Accra',
        imageFirst: true,
      },
    ],
    ctaAccent: 'Ready to ',
    ctaRest: 'train your team',
    ctaBody: 'Tell us the audience and topic. We will come back with a clear quote.',
  },
  {
    path: '/software-products',
    pageId: 'maddy-software-products',
    title: 'Software Products | Maddy Group Ltd',
    description:
      'Maddy Memo, Security Ops, MaddyOps, MaddyCMS and other platforms from Maddy Group Ltd in Accra. Request a demo or quote.',
    heroAccent: 'Software ',
    heroRest: 'products',
    heroBody:
      'Our own platforms sit alongside custom build work: intranet communications, investigations, industrial operations and enterprise messaging.',
    heroImageSrc: '/images/brand/accra-ecobank-tower.jpg',
    heroImageAlt: 'Ecobank tower rising above Accra',
    overviewTitle: 'Flagship platforms',
    overviewBody:
      'Ask for a demo or quote for any product below. We can also customise workflows when your organisation needs more than the standard pack.',
    overviewPoints: [
      'Maddy Memo for on-prem internal communications',
      'Maddy Security Ops for investigations and OSINT',
      'MaddyOps for industrial operations',
      'MaddyCMS for high-volume enterprise messaging',
    ],
    featureBlocks: [
      {
        title: 'Communications and investigations',
        body: 'Memo keeps records on your own server. Security Ops supports case intake, OSINT, geospatial views and command oversight for security teams.',
        points: [
          'Maddy Memo: e-memo, announcements and audit-ready records',
          'Offline resilience and data sovereignty options',
          'Maddy Security Ops: cases, OSINT and link analysis',
          'Built for law enforcement and corporate security use',
        ],
        imageSrc:
          'https://maddy-web-assets.lon1.cdn.digitaloceanspaces.com/software-products-1.jpg',
        imageAlt: 'Application code open on a laptop',
        imageFirst: true,
      },
      {
        title: 'Operations and messaging',
        body: 'MaddyOps covers industrial modules from fleet telemetry to secure ID. MaddyCMS centralises SMS, email and WhatsApp for high-volume enterprises.',
        points: [
          'MaddyOps Command View, fleet, energy, shifts and safety',
          'Stock, sales, messaging and Secure ID modules',
          'MaddyCMS delivery analytics and approval workflows',
          'AkontaX and BeaconOS for finance and HR needs',
        ],
        imageSrc:
          'https://maddy-web-assets.lon1.cdn.digitaloceanspaces.com/software-products-2.avif',
        imageAlt: 'Developers reviewing application work together',
      },
    ],
    ctaAccent: 'Ready to ',
    ctaRest: 'see a demo',
    ctaBody: 'Tell us which product you want to explore. We will come back with next steps.',
  },
]
