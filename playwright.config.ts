import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, 'test_data', '.env.qa') });

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',

  /* Dosyalardaki testler paralel çalışır */
  fullyParallel: true,

  /* CI'da test.only unutulmuşsa build'i düşür */
  forbidOnly: isCI,

  /* Yalnızca CI'da yeniden dene */
  retries: isCI ? 2 : 0,

  /* CI'da tek worker, yerelde otomatik */
  workers: isCI ? 1 : undefined,

  /* HTML raporu + konsol çıktısı */
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  use: {
    baseURL: process.env.BASE_URL,
    serviceWorkers: 'block',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: isCI,
        viewport: isCI ? { width: 1920, height: 1080 } : null,
        launchOptions: { args: ['--start-maximized'] },
      },
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: isCI,
        viewport: isCI ? { width: 1920, height: 1080 } : null,
      },
    },

    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        headless: isCI,
      },
    },
  ],
});
