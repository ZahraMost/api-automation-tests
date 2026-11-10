import { test, expect } from '../../src/fixtures/api.fixture';
import { UserResponse } from '../../src/types/user.types';

test('GET existing user returns 200', async ({ api }) => {
  const response = await api.get('/users/1');

  expect(response.status()).toBe(200);

  const body = await response.json() as UserResponse;

  expect(body.id).toBe(1);
  expect(body.name).toBeTruthy();
  expect(body.email).toBeTruthy();
});

test('GET non-existing user returns 404', async ({ api }) => {
  const response = await api.get('/users/999');

  expect(response.status()).toBe(404);
});