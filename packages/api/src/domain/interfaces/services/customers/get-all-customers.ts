import { Customer } from '@prisma/client';

export interface GetAllCustomers {
  run(params: GetAllCustomers.Params): Promise<GetAllCustomers.Response>;
}

export namespace GetAllCustomers {
  export type Params = {
    user_id: string;
    search?: string;
    skip: number;
  };

  export type Response = { data: Customer[]; count: number };
}
