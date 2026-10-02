import { expect, test, type Page } from '@playwright/test'
import { gotoReady, isDesktop, openMobileMenu } from './helpers.js'

const dropdown = (page: Page, index: number) => page.locator('.navbar .w-dropdown').nth(index)
const toggle = (page: Page, index: number) => dropdown(page, index).locator('.w-dropdown-toggle')
const panel = (page: Page, index: number) => dropdown(page, index).locator('.w-dropdown-list')

async function expectOpen(page: Page, index: number, open: boolean) {
  if (open) {
    await expect(panel(page, index)).toHaveClass(/w--open/)
    await expect(panel(page, index)).toBeVisible()
  } else {
    await expect(panel(page, index)).not.toHaveClass(/w--open/)
    await expect(panel(page, index)).toBeHidden()
  }
}

test.describe('navbar on desktop', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(!isDesktop(testInfo), 'desktop layout only')
    await gotoReady(page, '/')
  })

  test('dropdowns open on hover and close when the mouse leaves', async ({ page }) => {
    await toggle(page, 0).hover()
    await expectOpen(page, 0, true)

    await toggle(page, 1).hover()
    await expectOpen(page, 1, true)
    await expectOpen(page, 0, false)

    await page.mouse.move(700, 800)
    await expectOpen(page, 1, false)
  })

  test('clicking a dropdown toggles it', async ({ page }) => {
    await toggle(page, 0).hover()
    await expectOpen(page, 0, true)
    await toggle(page, 0).click()
    await expectOpen(page, 0, false)
    await toggle(page, 0).click()
    await expectOpen(page, 0, true)
  })

  test('a dropdown item fills on hover and navigates on click', async ({ page }) => {
    await toggle(page, 0).hover()
    const item = panel(page, 0).locator('a.arrow-fill', { hasText: 'Training' })
    await item.hover()
    await expect(item.locator('.arrow-fill__fill')).toHaveCSS(
      'background-color',
      'rgb(77, 81, 171)',
    )
    await item.click()
    await expect(page).toHaveURL(/\/training$/)
  })

  test('Contact Us button matches the menu pill height', async ({ page }) => {
    const pill = await page.locator('.navbar .nav-menu').boundingBox()
    const button = await page.locator('.navbar .is-navbar-button').boundingBox()
    expect(Math.abs(button!.height - pill!.height)).toBeLessThanOrEqual(1)
    expect(Math.abs(button!.y - pill!.y)).toBeLessThanOrEqual(1)
  })

  test('logo turns navy once the navbar turns white on scroll', async ({ page }) => {
    const light = page.locator('.navbar .maddy-logo-light')
    const dark = page.locator('.navbar .maddy-logo-dark')
    await expect(light).toHaveCSS('opacity', '1')
    await expect(dark).toHaveCSS('opacity', '0')

    await page.mouse.move(700, 500)
    for (let i = 0; i < 8; i++) await page.mouse.wheel(0, 150)
    await expect(dark).toHaveCSS('opacity', '1')
    await expect(light).toHaveCSS('opacity', '0')
  })

  test('in the collapsed menu, hover does nothing and clicks toggle', async ({ page }) => {
    // A mouse at a narrow window width: hover and click used to cancel out.
    await page.setViewportSize({ width: 800, height: 900 })
    await openMobileMenu(page)
    await toggle(page, 0).hover()
    await expectOpen(page, 0, false)
    await toggle(page, 0).click()
    await expectOpen(page, 0, true)
    await toggle(page, 0).click()
    await expectOpen(page, 0, false)
  })
})

test.describe('navbar on a phone', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(isDesktop(testInfo), 'phone layout only')
    await gotoReady(page, '/')
    await openMobileMenu(page)
  })

  test('tapping toggles a dropdown, one open at a time', async ({ page }) => {
    await toggle(page, 0).tap()
    await expectOpen(page, 0, true)
    await toggle(page, 1).tap()
    await expectOpen(page, 1, true)
    await expectOpen(page, 0, false)
    await toggle(page, 1).tap()
    await expectOpen(page, 1, false)
  })

  test('the navy logo shows on the white bar', async ({ page }) => {
    await expect(page.locator('.navbar .maddy-logo-dark')).toHaveCSS('opacity', '1')
  })
})
