import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/clients/api-client';
import { validUser, incompleteUser } from '../../src/data/user.data';
import { UserResponse } from '../../src/types/user.types';

test('POST creates a new user', async ({ request }) => {
  const api = new ApiClient(request);

  const response = await api.post('/users', validUser);

  expect(response.status()).toBe(201);

  const body = await response.json() as UserResponse;

  expect(body.name).toBe(validUser.name);
  expect(body.username).toBe(validUser.username);
  expect(body.email).toBe(validUser.email);
  expect(body.id).toBeTruthy();
});

test('POST with incomplete data returns 201', async ({ request }) => {
  const api = new ApiClient(request);

  const response = await api.post('/users', incompleteUser);

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.name).toBe(incompleteUser.name);
  expect(body.id).toBeTruthy();
});
