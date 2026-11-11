import { test, expect } from '../../src/fixtures/api.fixture';
import {
  validUser,
  additionalValidUsers,
  incompleteUser,
} from '../../src/data/user.data';
import { userSchema } from '../../src/schemas/user.schema';

const validUsers = [validUser, ...additionalValidUsers];

for (const user of validUsers) {
  test(`POST creates a new user: ${user.username}`, async ({ api }) => {
    const response = await api.post('/users', user);

    expect(response.status()).toBe(201);

    const body = await response.json();

    const validationResult = userSchema.safeParse(body);

    expect(
      validationResult.success,
      JSON.stringify(validationResult.error?.issues, null, 2)
    ).toBe(true);

    expect(body.name).toBe(user.name);
    expect(body.username).toBe(user.username);
    expect(body.email).toBe(user.email);
  });
}

test('POST with incomplete data returns 201', async ({ api }) => {
  const response = await api.post('/users', incompleteUser);

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.name).toBe(incompleteUser.name);
  expect(body.id).toBeTruthy();
});