import { JwtPayload } from 'jsonwebtoken';

import { User } from '@prisma/client';

export interface Token {
  generateToken(user: Omit<User, 'password'>, remember?: boolean): string;
  verifyToken(token: string): string | JwtPayload;
}
