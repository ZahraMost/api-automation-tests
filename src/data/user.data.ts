import { CreateUserRequest } from '../types/user.types';

export const validUser: CreateUserRequest = {
  name: 'Test User',
  username: 'testuser',
  email: 'test@example.com',
};

export const incompleteUser = {
  name: 'Incomplete User',
};
