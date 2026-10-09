import { expect, test } from '@playwright/test'
import { gotoReady, isDesktop } from './helpers.js'

/** Top/left/right/bottom of the first element matching a selector. */
async function box(page: import('@playwright/test').Page, selector: string) {
  const found = await page.locator(selector).first().boundingBox()
  expect(found, `${selector} should be on the page`).not.toBeNull()
  return found!
}

test.describe('contact page layout @smoke', () => {
  test.beforeEach(async ({ page }) => {
    await gotoReady(page, '/get-in-touch')
  })

  test('phone: intro, then form, then phone / email / office', async ({ page }, testInfo) => {
    test.skip(isDesktop(testInfo), 'phone layout only')
    const heading = await box(page, '.is-contact-hero h1')
    const intro = await box(page, '.git-intro')
    const form = await box(page, '.is-contact-hero .form-block')
    const details = await box(page, '.git-details-block')

    expect(heading.y).toBeLessThan(intro.y)
    expect(intro.y + intro.height).toBeLessThanOrEqual(form.y + 1)
    expect(form.y + form.height).toBeLessThanOrEqual(details.y + 1)
  })

  test('phone: the whole clip sits over the full-card video, mascots clear', async ({
    page,
  }, testInfo) => {
    test.skip(isDesktop(testInfo), 'phone layout only')
    const hero = await box(page, '.section.is-contact-hero')
    const video = await box(page, '.is-contact-hero .hero-media__video-whole')
    const details = await box(page, '.git-details-block')

    // Full width of the card, in the clip's own 1600:902 shape: nothing cropped.
    const fullCard = await box(page, '.is-contact-hero .hero-media__video')
    expect(fullCard.height).toBeGreaterThanOrEqual(hero.height - 1) // still fills the card
    expect(video.width).toBeGreaterThanOrEqual(hero.width - 1)
    expect(video.width / video.height).toBeCloseTo(1600 / 902, 1)

    // Pinned to the bottom of the card, as its background.
    expect(Math.abs(video.y + video.height - (hero.y + hero.height))).toBeLessThanOrEqual(2)

    // The mascots stand in the lowest 28% of the clip; no content reaches them.
    const mascotsTop = video.y + video.height * 0.72
    expect(details.y + details.height).toBeLessThanOrEqual(mascotsTop)

    const overflowX = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )
    expect(overflowX).toBeLessThanOrEqual(1)
  })

  test('desktop: text on the left, form on the right', async ({ page }, testInfo) => {
    test.skip(!isDesktop(testInfo), 'desktop layout only')
    await expect(page.locator('.hero-media__video-whole')).toBeHidden()
    const intro = await box(page, '.git-intro')
    const form = await box(page, '.is-contact-hero .form-block')
    const details = await box(page, '.git-details-block')

    expect(form.x).toBeGreaterThanOrEqual(intro.x + intro.width)
    expect(form.x).toBeGreaterThanOrEqual(details.x + details.width)
    expect(details.y).toBeGreaterThan(intro.y)
  })
})
