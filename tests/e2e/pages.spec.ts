import { expect, test } from '@playwright/test'
import { siteRoutes } from '../../src/sitePages.js'
import { gotoReady } from './helpers.js'

// Read-only checks, safe to run against a preview or the live site.
test.describe('every page loads @smoke', () => {
  for (const route of siteRoutes) {
    test(`${route} renders without errors`, async ({ page, baseURL }) => {
      const origin = new URL(baseURL!).origin
      const pageErrors: string[] = []
      const failedRequests: string[] = []
      page.on('pageerror', (error) => pageErrors.push(error.message))
      page.on('response', (response) => {
        if (response.url().startsWith(origin) && response.status() >= 400) {
          failedRequests.push(`${response.status()} ${response.url()}`)
        }
      })
      page.on('requestfailed', (request) => {
        const reason = request.failure()?.errorText ?? ''
        // Media requests are cancelled when the browser has buffered enough.
        if (request.url().startsWith(origin) && !reason.includes('ERR_ABORTED')) {
          failedRequests.push(`${reason} ${request.url()}`)
        }
      })

      const response = await gotoReady(page, route)

      expect(response?.status()).toBe(200)
      await expect(page).toHaveTitle(/\S/)
      await expect(page.locator('h1').first()).toBeVisible()
      expect(pageErrors, 'JavaScript errors on the page').toEqual([])
      expect(failedRequests, 'failed requests for the site’s own files').toEqual([])
    })
  }

  test('an unknown address shows the 404 page', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist')
    expect(response?.status()).toBe(404)
    await expect(page.locator('body')).toContainText(/\S/)
  })
})
