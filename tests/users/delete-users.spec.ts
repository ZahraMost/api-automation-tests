import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/clients/api-client';

test('DELETE removes an existing user', async ({ request }) => {
  const api = new ApiClient(request);

  const response = await api.delete('/users/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toEqual({});
});
