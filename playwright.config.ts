import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: false,
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 800 },
    // launchOptions: {
    //   slowMo: 500,
    // },
  },
});