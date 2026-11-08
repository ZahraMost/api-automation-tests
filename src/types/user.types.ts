export interface CreateUserRequest {
  name: string;
  username: string;
  email: string;
}

export interface UserResponse extends CreateUserRequest {
  id: number;
}
