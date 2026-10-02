import { expect, test } from '@playwright/test'
import { siteRoutes } from '../../src/sitePages.js'
import { gotoReady } from './helpers.js'

test.describe('page layout @smoke', () => {
  for (const route of siteRoutes) {
    test(`${route}: footer sits at the bottom, no sideways scroll`, async ({ page }) => {
      await gotoReady(page, route)
      const layout = await page.evaluate(() => {
        const footer = document.querySelector('.mf')
        const root = document.documentElement
        return {
          gapBelowFooter: footer
            ? Math.round(root.scrollHeight - (footer.getBoundingClientRect().bottom + scrollY))
            : null,
          overflowX: root.scrollWidth - root.clientWidth,
        }
      })
      // Hidden elements after the footer once added up to 295px of blank page.
      if (layout.gapBelowFooter !== null)
        expect(Math.abs(layout.gapBelowFooter)).toBeLessThanOrEqual(1)
      expect(layout.overflowX).toBeLessThanOrEqual(1)
    })
  }
})

test.describe('alignment on desktop', () => {
  test.skip(({ isMobile }) => isMobile, 'desktop layout only')

  for (const route of siteRoutes) {
    test(`${route}: hero text lines up with the navbar`, async ({ page }) => {
      await gotoReady(page, route)
      const edges = await page.evaluate(() => {
        const heading = document.querySelector('section[class*="hero"] h1')
        const container = heading?.closest('.w-container')
        const navbar = document.querySelector('.navbar .nav-flex')
        if (!container || !navbar) return null
        const a = container.getBoundingClientRect()
        const b = navbar.getBoundingClientRect()
        return { left: a.left - b.left, right: a.right - b.right }
      })
      test.skip(edges === null, 'page has no hero')
      expect(Math.abs(edges!.left)).toBeLessThanOrEqual(2)
      expect(Math.abs(edges!.right)).toBeLessThanOrEqual(2)
    })
  }

  test('About Us mission photo keeps its portrait shape at tablet width', async ({ page }) => {
    await page.setViewportSize({ width: 900, height: 900 })
    await gotoReady(page, '/about-us')
    const box = await page.locator('.rounded-feature-picture.about-logo').boundingBox()
    // 33:35 portrait; it used to collapse into a short strip between 768 and 991px.
    expect(box!.width / box!.height).toBeCloseTo(33 / 35, 1)
  })
})
