import { test, expect } from '../../src/fixtures/api.fixture';

test('DELETE removes an existing user', async ({ api }) => {
  const response = await api.delete('/users/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toEqual({});
});