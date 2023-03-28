import { Customer } from '@prisma/client';

export interface IGetAllCustomers {
  findAllCustomers(
    params: IGetAllCustomers.Params,
  ): Promise<{ data: Customer[]; count: number }>;
}

export namespace IGetAllCustomers {
  export type Params = {
    user_id: string;
    search?: string;
    skip: number;
  };
}
