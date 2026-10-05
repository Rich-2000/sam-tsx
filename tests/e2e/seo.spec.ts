import { expect, test } from '@playwright/test'
import { site } from '../../src/content/site.js'
import { siteRoutes } from '../../src/sitePages.js'

// Read-only checks of what search engines and AI assistants are given.
test.describe('search engine tags @smoke', () => {
  for (const route of siteRoutes) {
    test(`${route} has canonical, preview and structured data tags`, async ({ request }) => {
      const html = await (await request.get(route)).text()
      const url = route === '/' ? `${site.url}/` : `${site.url}${route}`

      expect(html).toContain(`<link rel="canonical" href="${url}"/>`)
      expect(html).toContain(`<meta property="og:image" content="${site.url}${site.socialImage}"/>`)
      expect(html.match(/<h1[\s>]/g) ?? []).toHaveLength(1)
      expect(html).toMatch(/<meta content="[^"]{50,}" name="description"\/>/)

      const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]
      const types = (JSON.parse(json!)['@graph'] as { '@type': string | string[] }[]).flatMap(
        (node) => node['@type'],
      )
      expect(types).toEqual(expect.arrayContaining(['Organization', 'WebSite']))
    })
  }

  test('robots.txt, the sitemap and llms.txt are served', async ({ request }) => {
    const robots = await (await request.get('/robots.txt')).text()
    expect(robots).toContain(`Sitemap: ${site.url}/sitemap.xml`)

    const sitemap = await (await request.get('/sitemap.xml')).text()
    for (const route of siteRoutes) {
      expect(sitemap).toContain(`<loc>${site.url}${route === '/' ? '/' : route}</loc>`)
    }

    const llms = await request.get('/llms.txt')
    expect(llms.status()).toBe(200)
    expect(await llms.text()).toContain(site.name)
  })

  test('addresses from the previous website redirect permanently', async ({ request }) => {
    const moved: [string, string][] = [
      ['/about.html', '/about-us'],
      ['/cybersecurity-services.html', '/cybersecurity-services'],
      ['/contact.html', '/get-in-touch'],
      ['/retail-brokers', '/cybersecurity-services'],
    ]
    for (const [from, to] of moved) {
      const response = await request.get(from, { maxRedirects: 0 })
      expect(response.status(), from).toBe(301)
      expect(response.headers()['location'], from).toBe(to)
    }
  })
})
