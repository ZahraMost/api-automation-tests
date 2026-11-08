import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/clients/api-client';
import { UserResponse } from '../../src/types/user.types';

test('GET existing user returns 200', async ({ request }) => {
  const api = new ApiClient(request);

  const response = await api.get('/users/1');

  expect(response.status()).toBe(200);

  const body = await response.json() as UserResponse;

  expect(body.id).toBe(1);
  expect(body.name).toBeTruthy();
  expect(body.email).toBeTruthy();
});

test('GET non-existing user returns 404', async ({ request }) => {
  const api = new ApiClient(request);

  const response = await api.get('/users/999');

  expect(response.status()).toBe(404);
});
