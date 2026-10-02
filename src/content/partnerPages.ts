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
        items: ['Card printers and personalisation systems', 'Encoding and issuance equipment'],
      },
      {
        title: 'Readers & Terminals',
        body: 'Read and process cards reliably across your operations.',
        items: ['Contact and contactless readers', 'Terminals for access and payment'],
      },
      {
        title: 'Biometrics & Enrolment',
        body: 'Strengthen identity checks with biometric capture.',
        items: ['Fingerprint and biometric enrolment', 'Secure authentication workflows'],
      },
      {
        title: 'SDKs & Software',
        body: 'Build card technology into your own applications.',
        items: ['Software development kits (SDKs)', 'Card management and issuance software'],
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
        items: ['Live GPS tracking and trip history', 'Engine diagnostics and fault alerts'],
      },
      {
        title: 'Video Safety',
        body: 'AI dash cameras that watch the road and the driver.',
        items: ['360° AI dash cameras', 'Driver behaviour alerts and coaching'],
      },
      {
        title: 'Asset Tracking',
        body: 'Track powered and non-powered assets across sites.',
        items: ['Trailer and equipment tracking', 'Fuel insights and utilisation'],
      },
      {
        title: 'Maintenance & Asset Management',
        body: 'Keep vehicles serviced and running costs visible.',
        items: ['Service scheduling and reminders', 'Ownership and running-cost analysis'],
      },
      {
        title: 'Compliance (ELD)',
        body: 'Electronic logs and regulatory reporting.',
        items: ['Electronic logbooks (ELD)', 'Compliance and audit reporting'],
      },
      {
        title: 'Routing & Dispatch',
        body: 'Plan routes and dispatch work efficiently.',
        items: ['Route optimisation', 'Automated dispatch and smart forms'],
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
    slug: 'palo-alto-networks',
    path: '/partners/palo-alto-networks',
    pageId: 'maddy-partner-palo-alto-networks',
    navLabel: 'Palo Alto Networks',
    title: 'Palo Alto Networks Security Platforms | Maddy Group Ltd',
    description:
      'Palo Alto Networks next-generation firewalls, Prisma SASE and cloud security, Cortex security operations and Unit 42 threat intelligence, deployed and supported by Maddy Group Ltd in Accra. Pricing by quote.',
    heroAccent: 'Palo Alto Networks ',
    heroRest: 'security platforms',
    heroBody:
      'Next-generation firewalls, secure access, cloud security and AI driven security operations, sized, deployed and supported by Maddy Group Ltd in Accra.',
    heroImageSrc: '/images/brand/security-analyst-kampus-8204353.jpg',
    overviewTitle: 'What Palo Alto Networks covers',
    overviewBody:
      'Palo Alto Networks builds its products around a small number of platforms rather than separate point tools. Network security, secure access, cloud security and security operations share the same policy and threat intelligence, so a detection in one place informs the others. We size the deployment, configure it and support it locally.',
    overviewPoints: [
      'Next-generation firewalls in hardware, virtual and container form',
      'Prisma SASE for branch offices and staff working away from the office',
      'Prisma Cloud for workloads running in AWS, Azure and Google Cloud',
      'Cortex XDR and XSIAM for detection and response',
    ],
    categoriesTitle: 'Products and services',
    categoriesIntro:
      'Ask for a quote on any platform below. We can also advise on the right sizing and licensing for your environment.',
    categories: [
      {
        title: 'Network Security',
        body: 'Next-generation firewalls and the cloud delivered security services that run on them.',
        items: [
          'PA-Series hardware firewalls',
          'VM-Series virtual firewalls and CN-Series container firewalls',
          'Panorama central management and Strata Cloud Manager',
          'Advanced Threat Prevention, Advanced URL Filtering and Advanced WildFire',
          'Advanced DNS Security and IoT Security',
        ],
      },
      {
        title: 'Secure Access (Prisma SASE)',
        body: 'Security and networking delivered from the cloud for branch sites and remote staff.',
        items: [
          'Prisma Access',
          'Prisma SD-WAN',
          'Prisma Browser and Remote Browser Isolation',
          'GlobalProtect',
          'SaaS Security and Enterprise Data Loss Prevention',
        ],
      },
      {
        title: 'Cloud Security',
        body: 'Protection for workloads and accounts across public and private cloud.',
        items: ['Prisma Cloud', 'Cortex Cloud', 'Cloud NGFW for AWS and Cloud NGFW for Azure'],
      },
      {
        title: 'Security Operations (Cortex)',
        body: 'Detection, investigation and response for the security team.',
        items: [
          'Cortex XSIAM',
          'Cortex XDR',
          'Cortex XSOAR',
          'Cortex Xpanse attack surface management',
          'Cortex ITDR',
        ],
      },
      {
        title: 'AI Security',
        body: 'Controls for the AI applications and models your organisation builds or uses.',
        items: ['Prisma AIRS', 'AI Runtime Security', 'AI Access Security'],
      },
      {
        title: 'Identity Security',
        body: 'Privileged access, workforce identity and the credentials machines use.',
        items: [
          'Human identities, including privileged access management',
          'Machine identities and secrets management',
          'Agentic identities for AI agents',
        ],
      },
      {
        title: 'Unit 42 and Local Support',
        body: 'Threat intelligence and incident response from Palo Alto Networks, with day to day support from our team in Accra.',
        items: [
          'Unit 42 incident response and threat intelligence',
          'Unit 42 managed detection and response',
          'Sizing, deployment, migration and policy tuning',
          'Licence renewals and technical support',
        ],
      },
    ],
    quoteInterests: [
      'Network Security',
      'Secure Access (Prisma SASE)',
      'Cloud Security',
      'Security Operations (Cortex)',
      'AI Security',
      'Identity Security',
      'Unit 42 and Local Support',
      'Not sure yet',
    ],
    quoteHeading: 'Request a Palo Alto Networks quote',
    quoteBody:
      'Tell us what you are protecting, how many users or sites are involved and what you run today. We will come back with a clear quote and a sizing recommendation.',
  },
]

export const partnerNavItems = partnerPageConfigs.map((config) => ({
  href: config.path,
  label: config.navLabel,
}))
