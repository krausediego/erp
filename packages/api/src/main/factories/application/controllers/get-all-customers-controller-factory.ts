import { GetAllCustomersController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeGetAllCustomersService } from '../../domain';

export const makeGetAllCustomersController = (): Controller => {
  return new GetAllCustomersController(makeGetAllCustomersService);
};
