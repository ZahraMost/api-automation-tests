import { test, expect } from '../../src/fixtures/api.fixture';
import { UserResponse } from '../../src/types/user.types';

test('PUT updates an existing user', async ({ api }) => {
  const updatedUser = {
    name: 'Updated User',
    username: 'updateduser',
    email: 'updated@example.com',
  };

  const response = await api.put('/users/1', updatedUser);

  expect(response.status()).toBe(200);

  const body = await response.json() as UserResponse;

  expect(body.id).toBe(1);
  expect(body.name).toBe(updatedUser.name);
  expect(body.username).toBe(updatedUser.username);
  expect(body.email).toBe(updatedUser.email);
});