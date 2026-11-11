import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.email(),
});

export const usersSchema = z.array(userSchema);