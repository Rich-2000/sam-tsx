import { expect, test, type Page } from '@playwright/test'
import { partnerPageConfigs } from '../../src/content/partnerPages.js'
import { gotoReady } from './helpers.js'

const partnerPath = partnerPageConfigs[0]!.path

async function fillTextFields(page: Page, formSelector: string) {
  const form = page.locator(formSelector)
  await form.locator('input[name="name"]').fill('Ama Mensah')
  await form.locator('input[name="email"]').fill('ama@example.com')
  await form.locator('input[name="company"]').fill('Example Ltd')
  await form.locator('textarea[name="message"]').fill('We would like a security assessment.')
}

/** Records POST requests so we can prove a submit stays in the browser. */
function trackPosts(page: Page) {
  const posts: string[] = []
  page.on('request', (request) => {
    if (request.method() === 'POST') posts.push(request.url())
  })
  return posts
}

test.describe('forms are served securely', () => {
  for (const path of ['/get-in-touch', partnerPath]) {
    test(`${path}: form does not post to mailto (Chrome flags it as not secure)`, async ({
      page,
    }) => {
      await gotoReady(page, path)
      const action = await page.locator('form.form').first().getAttribute('action')
      expect(action).toBeTruthy()
      expect(action).not.toMatch(/^mailto:/i)
    })
  }
})

test.describe('contact page dropdowns', () => {
  test.beforeEach(async ({ page }) => {
    await gotoReady(page, '/get-in-touch')
  })

  test('choosing an option fills the hidden select', async ({ page }) => {
    const trigger = page.locator('.glass-select__trigger').first()
    await trigger.click()
    const menu = page.locator('#Enquiry-type-listbox')
    await expect(menu).toHaveClass(/is-open/)
    await expect(menu).toBeVisible()

    // Opens right below (or above) its field, not elsewhere on the page.
    const field = (await trigger.boundingBox())!
    const list = (await menu.boundingBox())!
    const touching =
      Math.abs(list.y - (field.y + field.height)) <= 8 ||
      Math.abs(field.y - (list.y + list.height)) <= 8
    expect(touching).toBe(true)

    await menu.locator('.glass-select__option', { hasText: 'Software development' }).click()
    await expect(menu).not.toHaveClass(/is-open/)
    await expect(page.locator('select[name="enquiry"]')).toHaveValue('Software development')
    await expect(trigger).toContainText('Software development')
  })

  test('the keyboard can choose an option', async ({ page }) => {
    const trigger = page.locator('.glass-select__trigger').nth(1)
    await trigger.focus()
    await page.keyboard.press('ArrowDown') // opens on the first option
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await expect(page.locator('select[name="source"]')).toHaveValue('Event')
    await expect(trigger).toBeFocused()
  })

  test('only one list is open, and clicking outside closes it', async ({ page }) => {
    const triggers = page.locator('.glass-select__trigger')
    // Second first: on a phone the first list opens over the second field.
    await triggers.nth(1).click()
    await triggers.nth(0).click()
    await expect(page.locator('.glass-select__menu.is-open')).toHaveCount(1)
    await page.locator('h1').click()
    await expect(page.locator('.glass-select__menu.is-open')).toHaveCount(0)
  })
})

test.describe('submitting', () => {
  test('the contact form needs "How can we help?"', async ({ page }) => {
    await gotoReady(page, '/get-in-touch')
    await fillTextFields(page, '#email-form')
    await page.locator('#email-form [type="submit"]').click()
    await expect(page.locator('.glass-select').first()).toHaveClass(/is-invalid/)
    await expect(page.locator('.w-form-done')).toBeHidden()
  })

  test('a complete contact form shows the thank-you message', async ({ page }) => {
    await gotoReady(page, '/get-in-touch')
    const posts = trackPosts(page)
    await fillTextFields(page, '#email-form')
    await page.locator('.glass-select__trigger').first().click()
    await page.locator('#Enquiry-type-listbox .glass-select__option').first().click()
    await page.locator('#email-form [type="submit"]').click()
    await expect(page.locator('.w-form-done')).toBeVisible()
    expect(posts).toEqual([])
  })

  test('a complete partner quote form shows the thank-you message', async ({ page }) => {
    await gotoReady(page, partnerPath)
    const posts = trackPosts(page)
    await fillTextFields(page, '#partner-quote-form')
    await page.locator('#partner-quote-form select[name="interest"]').selectOption({ index: 1 })
    await page.locator('#partner-quote-form [type="submit"]').click()
    await expect(page.locator('.w-form-done')).toBeVisible()
    expect(posts).toEqual([])
  })
})
