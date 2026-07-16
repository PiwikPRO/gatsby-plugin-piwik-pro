import { defineConfig, devices } from '@playwright/test'

const PORT = 9000
const BASE_URL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry'
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `yarn build && yarn serve --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      GATSBY_CONTAINER_ID:
        process.env.GATSBY_CONTAINER_ID ?? '0a0b8661-8c10-4d59-a8be-1c926ab5d184',
      GATSBY_CONTAINER_URL:
        process.env.GATSBY_CONTAINER_URL ?? 'https://example.piwik.pro'
    }
  }
})
