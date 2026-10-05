/** Company facts shared by search-engine tags, structured data, the sitemap and llms.txt. */
export const site = {
  /** The one address search engines should index. `www` redirects here. */
  url: 'https://maddygroupltd.com',
  name: 'Maddy Group Ltd',
  shortName: 'Maddy Group',
  description:
    'Maddy Group Ltd is a cybersecurity and software company based in Accra, Ghana. It provides penetration testing, vulnerability assessments, managed security monitoring, incident response, custom software, websites, IoT and smart cards, UAV operations, ICT procurement and cybersecurity training to businesses and public organisations in Ghana and across Africa.',
  email: 'info@maddygroupltd.com',
  phone: '+233551111551',
  phoneDisplay: '0551111551',
  address: {
    street: 'GD-219-3654, Adjetey Mensah Owusu St, Adjiriganor',
    locality: 'Accra',
    region: 'Greater Accra',
    country: 'GH',
    countryName: 'Ghana',
  },
  postalAddress: 'P.O. Box 10606, Accra North, Ghana',
  logo: '/images/maddy-logo-icon.jpg',
  socialImage: '/images/og-default.jpg',
  socialImageAlt: 'Maddy Group Ltd, cybersecurity and software company in Accra, Ghana',
  expertise: [
    'Cybersecurity',
    'Penetration testing',
    'Vulnerability assessment',
    'Managed security operations centre (SOC)',
    'Incident response',
    'Digital forensics',
    'Cloud security',
    'Identity and access security',
    'Custom software development',
    'Website development',
    'IoT systems',
    'Smart cards and secure identity',
    'UAV and drone operations',
    'ICT procurement',
    'Cybersecurity training',
  ],
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return path === '/' ? `${site.url}/` : `${site.url}${path}`
}
