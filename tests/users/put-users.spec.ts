import { test, expect } from '../../src/fixtures/api.fixture';
import { userSchema } from '../../src/schemas/user.schema';

test('PUT updates an existing user', async ({ api }) => {
  const updatedUser = {
    name: 'Updated User',
    username: 'updateduser',
    email: 'updated@example.com',
  };

  const response = await api.put('/users/1', updatedUser);

  expect(response.status()).toBe(200);

  const body = await response.json();

  const validationResult = userSchema.safeParse(body);

  expect(
    validationResult.success,
    JSON.stringify(validationResult.error?.issues, null, 2)
  ).toBe(true);

  expect(body.id).toBe(1);
  expect(body.name).toBe(updatedUser.name);
  expect(body.username).toBe(updatedUser.username);
  expect(body.email).toBe(updatedUser.email);
});