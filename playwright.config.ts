import path from 'node:path'
import process from 'node:process'

import { defineConfig, devices } from '@playwright/test'
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '.env') })

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // Disable auto-open
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    testIdAttribute: 'data-cy',
    viewport: { width: 1920, height: 1080 },
  },
  expect: {
    timeout: 10000, // Timeout for expect assertions
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'travelplanet.pl',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.BASEPAGE_PL,
      },
    },
    {
      name: 'invia.sk',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.BASEPAGE_SK },
    },
    {
      name: 'invia.hu',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.BASEPAGE_HU },
    },
    {
      name: 'invia.cz',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.BASEPAGE_CZ },
    },
  ],
})
