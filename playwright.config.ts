import { defineConfig, devices } from '@playwright/test'

const PORT = 4173
// Set BASE_URL to run the same tests against a preview or the live site
// instead of a local build, e.g. BASE_URL=https://sam-tsx.vercel.app
const baseURL = process.env.BASE_URL ?? `http://localhost:${PORT}`
const isCI = Boolean(process.env.CI)

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  reporter: isCI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'phone',
      use: { ...devices['Pixel 7'] },
    },
  ],
  // Build and serve the site the way production does, unless a URL was given.
  ...(process.env.BASE_URL
    ? {}
    : {
        webServer: {
          command: 'npm run build && npm start',
          url: baseURL,
          env: { PORT: String(PORT) },
          reuseExistingServer: !isCI,
          timeout: 120_000,
        },
      }),
})
