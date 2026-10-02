import { expect, type Page, type Response, type TestInfo } from '@playwright/test'

export const isDesktop = (testInfo: TestInfo) => testInfo.project.name === 'desktop'

/**
 * Opens a page and waits until the site's loader has finished, so the page is
 * visible and clickable (the loader covers everything until images are in).
 */
export async function gotoReady(page: Page, path: string): Promise<Response | null> {
  const response = await page.goto(path, { waitUntil: 'load' })
  await page.waitForFunction(() => !document.documentElement.classList.contains('is-page-loading'))
  const loader = page.locator('.maddy-loader')
  if (await loader.count()) await expect(loader.first()).toHaveClass(/is-done/)
  return response
}

/** Opens the hamburger menu when the navbar is in its collapsed (mobile) layout. */
export async function openMobileMenu(page: Page) {
  const button = page.locator('.menu-button')
  if (await button.isVisible()) {
    await button.click()
    await expect(page.locator('.nav-menu')).toBeVisible()
  }
}
