import { test, expect, type Page } from '@playwright/test'

declare global {
  interface Window {
    _paq?: unknown[][]
  }
}

const getPaq = (page: Page) => page.evaluate(() => window._paq ?? [])

const waitForTracking = (page: Page) =>
  page.waitForFunction(() => (window._paq?.length ?? 0) > 0)

test.beforeEach(async ({ page }) => {
  await page.route(/\/\/[^/]*piwik\.pro\//, (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/javascript',
      body: ''
    })
  )
})

test('on app load, the plugin initializes tracking and tags _paq with the "gatsby" source provider', async ({
  page
}) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await waitForTracking(page)

  expect(await getPaq(page)).toContainEqual(
    expect.arrayContaining(['setTrackingSourceProvider', 'gatsby'])
  )
})

test('clicking the PageViews button pushes a "trackPageView" command to _paq', async ({
  page
}) => {
  await page.goto('/PageViews', { waitUntil: 'domcontentloaded' })
  await waitForTracking(page)

  const before = await getPaq(page)
  expect(before).not.toContainEqual(
    expect.arrayContaining(['trackPageView', 'optional title from button'])
  )

  await page.getByRole('button', { name: 'PageViews.trackPageView' }).click()

  expect(await getPaq(page)).toContainEqual(
    expect.arrayContaining(['trackPageView', 'optional title from button'])
  )
})

test('clicking the CustomEvent button pushes a "trackEvent" command to _paq', async ({
  page
}) => {
  await page.goto('/CustomEvent', { waitUntil: 'domcontentloaded' })
  await waitForTracking(page)

  const before = await getPaq(page)
  expect(before).not.toContainEqual(expect.arrayContaining(['trackEvent']))

  await page.getByRole('button', { name: 'CustomEvent.trackEvent' }).click()

  expect(await getPaq(page)).toContainEqual(
    expect.arrayContaining(['trackEvent', 'Button'])
  )
})
