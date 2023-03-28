import jwt, { JwtPayload } from 'jsonwebtoken';

import { User } from '@prisma/client';
import { Token as IToken } from '@/domain/interfaces';
import secret from '@/main/config/environments/token';

export class Token implements IToken {
  public generateToken(
    user: Omit<User, 'password'>,
    remember?: boolean,
  ): string {
    return jwt.sign(
      user,
      secret.secret as string,
      remember ? {} : { expiresIn: '24h' },
    );
  }

  public verifyToken(token: string): string | JwtPayload {
    return jwt.verify(token, secret.secret as string);
  }
}
