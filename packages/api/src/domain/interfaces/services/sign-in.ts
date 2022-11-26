import { User } from '@prisma/client';

export interface SignIn {
  run(params: SignIn.Params): Promise<SignIn.Response>;
}

export namespace SignIn {
  export type Params = {
    emailOrUsername: string;
    password: string;
  };

  export type Response = {
    message: string;
  };
}
