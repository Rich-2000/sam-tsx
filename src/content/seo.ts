import { leaders } from './leadership.js'
import { partnerPageConfigs } from './partnerPages.js'
import { absoluteUrl, site } from './site.js'
import { technologyPageConfigs } from './technologyPages.js'

type ServiceEntry = { path: string; name: string; description: string }

const pageName = (title: string) => title.split(' | ')[0] ?? title

/** Every service page, in the order they are listed to search engines and AI assistants. */
export const serviceEntries: ServiceEntry[] = [
  {
    path: '/cybersecurity-services',
    name: 'Cybersecurity services and security assessment',
    description:
      'Penetration testing, vulnerability assessments, managed SOC monitoring, identity and cloud security, with findings ranked by risk and clear remediation guidance.',
  },
  {
    path: '/software-development',
    name: 'Software development',
    description:
      'Custom software, websites, portals, payment flows and systems integration built for how an organisation works.',
  },
  ...technologyPageConfigs.map((config) => ({
    path: config.path,
    name: pageName(config.title),
    description: config.description,
  })),
  ...partnerPageConfigs.map((config) => ({
    path: config.path,
    name: pageName(config.title),
    description: config.description,
  })),
]

const pageLabels: Record<string, string> = {
  '/services': 'Services',
  '/about-us': 'About us',
  '/get-in-touch': 'Contact us',
  '/privacy-policy': 'Privacy policy',
  '/terms-of-use': 'Terms of use',
  ...Object.fromEntries(serviceEntries.map((entry) => [entry.path, entry.name])),
}

const organizationId = `${site.url}/#organization`
const websiteId = `${site.url}/#website`

function organization() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': organizationId,
    name: site.name,
    alternateName: site.shortName,
    url: absoluteUrl('/'),
    logo: { '@type': 'ImageObject', url: absoluteUrl(site.logo) },
    image: absoluteUrl(site.socialImage),
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: [
      { '@type': 'City', name: 'Accra' },
      { '@type': 'Country', name: 'Ghana' },
      { '@type': 'Place', name: 'West Africa' },
      { '@type': 'Place', name: 'Africa' },
    ],
    knowsAbout: site.expertise,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: site.phone,
      email: site.email,
      areaServed: 'GH',
      availableLanguage: 'English',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: serviceEntries.map((entry) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: entry.name, url: absoluteUrl(entry.path) },
      })),
    },
  }
}

function pageType(path: string): string {
  if (path === '/about-us') return 'AboutPage'
  if (path === '/get-in-touch') return 'ContactPage'
  return 'WebPage'
}

/** schema.org data for one page, describing the company, the page and what it offers. */
export function structuredData(path: string) {
  const url = absoluteUrl(path)
  const graph: object[] = [
    organization(),
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: absoluteUrl('/'),
      name: site.name,
      inLanguage: 'en',
      publisher: { '@id': organizationId },
    },
    {
      '@type': pageType(path),
      '@id': `${url}#webpage`,
      url,
      inLanguage: 'en',
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
      ...(path === '/' ? {} : { breadcrumb: { '@id': `${url}#breadcrumb` } }),
    },
  ]

  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: pageLabels[path] ?? path, item: url },
      ],
    })
  }

  const service = serviceEntries.find((entry) => entry.path === path)
  if (service) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service.name,
      description: service.description,
      url,
      provider: { '@id': organizationId },
      areaServed: [
        { '@type': 'Country', name: 'Ghana' },
        { '@type': 'Place', name: 'Africa' },
      ],
    })
  }

  if (path === '/about-us') {
    for (const leader of leaders) {
      graph.push({
        '@type': 'Person',
        name: leader.name,
        jobTitle: leader.role,
        image: absoluteUrl(leader.image),
        description: leader.bio[0],
        worksFor: { '@id': organizationId },
      })
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

/** Addresses from the previous website and from earlier drafts of this one, sent to their new home. */
const redirects: Record<string, string> = {
  '/index.html': '/',
  '/about.html': '/about-us',
  '/team.html': '/about-us#team',
  '/team-single.html': '/about-us#team',
  '/contact.html': '/get-in-touch',
  '/pricing.html': '/get-in-touch',
  '/services.html': '/services',
  '/technologies.html': '/services',
  '/cybersecurity-services.html': '/cybersecurity-services',
  '/software-development.html': '/software-development',
  '/website-development.html': '/software-development',
  '/web-solutions.html': '/software-development',
  '/iot-services.html': '/iot-smart-cards',
  '/ict-procurement.html': '/ict-procurement',
  '/uav.html': '/uav',
  '/cardlogix.html': '/partners/cardlogix',
  '/zenduit.html': '/partners/zenduit',
  '/zaelet.html': '/services',
  '/faqs.html': '/',
  '/testimonials.html': '/',
  '/blog.html': '/',
  '/blog-single.html': '/',
  '/products-appetite': '/services',
  '/retail-brokers': '/cybersecurity-services',
  '/carriers': '/software-development',
}

export function redirectFor(path: string): string | undefined {
  return redirects[path.length > 1 ? path.replace(/\/+$/, '') : path]
}

export function robotsTxt(): string {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    '# AI assistants and AI search engines are welcome to read and cite this site.',
    'User-agent: GPTBot',
    'User-agent: OAI-SearchBot',
    'User-agent: ChatGPT-User',
    'User-agent: ClaudeBot',
    'User-agent: Claude-SearchBot',
    'User-agent: Claude-User',
    'User-agent: PerplexityBot',
    'User-agent: Perplexity-User',
    'User-agent: Google-Extended',
    'User-agent: Applebot-Extended',
    'User-agent: CCBot',
    'Allow: /',
    '',
    `Sitemap: ${absoluteUrl('/sitemap.xml')}`,
    '',
  ].join('\n')
}

export function sitemapXml(routes: string[]): string {
  const urls = routes.map((route) => `  <url><loc>${absoluteUrl(route)}</loc></url>`).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

/** A plain-text summary of the company for AI assistants (see llmstxt.org). */
export function llmsTxt(): string {
  const { address } = site
  return [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## Key facts',
    '',
    `- Name: ${site.name} (also written ${site.shortName})`,
    `- Type: cybersecurity and software company`,
    `- Location: ${address.street}, ${address.locality}, ${address.countryName}`,
    `- Postal address: ${site.postalAddress}`,
    `- Serves: businesses and public organisations in Accra, across Ghana and elsewhere in Africa`,
    `- Phone: ${site.phoneDisplay} (${site.phone})`,
    `- Email: ${site.email}`,
    `- Website: ${absoluteUrl('/')}`,
    '- Pricing: by quote, after a short conversation about scope',
    '',
    '## Services',
    '',
    ...serviceEntries.map(
      (entry) => `- [${entry.name}](${absoluteUrl(entry.path)}): ${entry.description}`,
    ),
    '',
    '## Leadership',
    '',
    ...leaders.map((leader) => `- ${leader.name}, ${leader.role}`),
    '',
    '## Pages',
    '',
    `- [Home](${absoluteUrl('/')})`,
    `- [All services](${absoluteUrl('/services')})`,
    `- [About and leadership](${absoluteUrl('/about-us')})`,
    `- [Contact and quote requests](${absoluteUrl('/get-in-touch')})`,
    '',
  ].join('\n')
}
