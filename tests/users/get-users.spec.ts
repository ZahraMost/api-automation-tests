import { test, expect } from '../../src/fixtures/api.fixture';
import { userSchema } from '../../src/schemas/user.schema';

test('GET existing user returns 200', async ({ api }) => {
  const response = await api.get('/users/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  const validationResult = userSchema.safeParse(body);

  expect(
    validationResult.success,
    JSON.stringify(validationResult.error?.issues, null, 2)
  ).toBe(true);
});

test('GET non-existing user returns 404', async ({ api }) => {
  const response = await api.get('/users/999');

  expect(response.status()).toBe(404);
});