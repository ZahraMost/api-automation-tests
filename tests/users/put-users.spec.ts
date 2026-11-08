import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/clients/api-client';
import { UserResponse } from '../../src/types/user.types';

test('PUT updates an existing user', async ({ request }) => {
  const api = new ApiClient(request);

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
