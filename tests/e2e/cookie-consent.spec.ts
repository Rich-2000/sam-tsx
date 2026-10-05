import { expect, test } from '@playwright/test'
import { gotoReady } from './helpers.js'

test.describe('cookie choice banner', () => {
  test('asks once, remembers the choice and can be reopened from the footer', async ({ page }) => {
    await gotoReady(page, '/about-us')
    const banner = page.locator('[data-cookie-banner]')
    await expect(banner).toBeVisible()
    expect(await page.evaluate(() => window.maddyConsent)).toEqual({
      decided: false,
      analytics: false,
      marketing: false,
    })

    await banner.getByRole('button', { name: 'Reject optional' }).click()
    await expect(banner).toBeHidden()
    expect(await page.evaluate(() => window.maddyConsent)).toEqual({
      decided: true,
      analytics: false,
      marketing: false,
    })

    await gotoReady(page, '/')
    await expect(banner).toBeHidden()

    await page.locator('[data-cookie-settings]').click()
    await expect(banner).toBeVisible()
    // The link reopens the banner in place; it must not raise the page-transition loader.
    await expect(page.locator('html')).not.toHaveClass(/is-page-loading/)
    await expect(page).toHaveURL(/\/$/)
    await banner.getByRole('button', { name: 'Accept all' }).click()
    await expect(banner).toBeHidden()
    expect(await page.evaluate(() => window.maddyConsent)).toEqual({
      decided: true,
      analytics: true,
      marketing: true,
    })
  })

  test('lets the visitor allow one kind of cookie and not another', async ({ page }) => {
    await gotoReady(page, '/about-us')
    const banner = page.locator('[data-cookie-banner]')
    const options = banner.locator('[data-cookie-options]')
    await expect(options).toBeHidden()

    await banner.getByRole('button', { name: 'Manage choices' }).click()
    await expect(options).toBeVisible()
    await expect(banner.getByRole('switch', { name: /Necessary/ })).toBeDisabled()
    await expect(banner.getByRole('switch', { name: /Analytics/ })).not.toBeChecked()

    await banner.getByRole('switch', { name: /Analytics/ }).check()
    await banner.getByRole('button', { name: 'Save choices' }).click()
    await expect(banner).toBeHidden()
    expect(await page.evaluate(() => window.maddyConsent)).toEqual({
      decided: true,
      analytics: true,
      marketing: false,
    })

    // Reopening from the footer shows the saved choice.
    await page.locator('[data-cookie-settings]').click()
    await expect(banner.getByRole('switch', { name: /Analytics/ })).toBeChecked()
    await expect(banner.getByRole('switch', { name: /Marketing/ })).not.toBeChecked()
  })
})

declare global {
  interface Window {
    maddyConsent: { decided: boolean; analytics: boolean; marketing: boolean }
  }
}
