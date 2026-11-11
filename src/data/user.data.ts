import { CreateUserRequest } from '../types/user.types';

export const validUser: CreateUserRequest = {
  name: 'Test User',
  username: 'testuser',
  email: 'test@example.com',
};

export const additionalValidUsers: CreateUserRequest[] = [
  {
    name: 'Alice Johnson',
    username: 'alicejohnson',
    email: 'alice@example.com',
  },
  {
    name: 'Michael Smith',
    username: 'michaelsmith',
    email: 'michael@example.com',
  },
];

export const incompleteUser = {
  name: 'Incomplete User',
};