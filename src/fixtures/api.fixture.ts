import { test as base } from '@playwright/test';
import { ApiClient } from '../clients/api-client';

type ApiFixtures = {
  api: ApiClient;
};

export const test = base.extend<ApiFixtures>({
  api: async ({ request }, use) => {
    const api = new ApiClient(request);
    await use(api);
  },
});

export { expect } from '@playwright/test';