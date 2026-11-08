import { defineConfig } from '@playwright/test';
import { env } from './config/env';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    baseURL: env.apiBaseUrl,
    actionTimeout: env.apiTimeoutMs,
    trace: 'on-first-retry',
  },
});
