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
    })

    await banner.getByRole('button', { name: 'Reject optional' }).click()
    await expect(banner).toBeHidden()
    expect(await page.evaluate(() => window.maddyConsent)).toEqual({
      decided: true,
      analytics: false,
    })

    await gotoReady(page, '/')
    await expect(banner).toBeHidden()

    await page.locator('[data-cookie-settings]').click()
    await expect(banner).toBeVisible()
    await banner.getByRole('button', { name: 'Accept all' }).click()
    await expect(banner).toBeHidden()
    expect(await page.evaluate(() => window.maddyConsent)).toEqual({
      decided: true,
      analytics: true,
    })
  })
})

declare global {
  interface Window {
    maddyConsent: { decided: boolean; analytics: boolean }
  }
}
