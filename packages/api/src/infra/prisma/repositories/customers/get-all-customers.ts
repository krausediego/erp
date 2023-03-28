import { Customer } from '@prisma/client';
import { IGetAllCustomers } from '@/domain/interfaces';

import { Prisma } from '../../prisma';

export class GetAllCustomers implements IGetAllCustomers {
  public async findAllCustomers({
    user_id,
    search,
    skip,
  }: IGetAllCustomers.Params): Promise<{ data: Customer[]; count: number }> {
    try {
      const data = await Prisma.$transaction([
        Prisma.customer.findMany({
          where: {
            user_id,
            AND: [
              {
                OR: [
                  { email: { contains: search, mode: 'insensitive' } },
                  { name: { contains: search, mode: 'insensitive' } },
                ],
              },
            ],
          },
          include: { address: true },
          orderBy: { name: 'asc' },
          skip: Number(skip),
          take: 7,
        }),
        Prisma.customer.count(),
      ]);

      const response = {
        data: data[0],
        count: data[1],
      };

      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
