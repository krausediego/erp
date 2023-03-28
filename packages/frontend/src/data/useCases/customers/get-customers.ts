import { ICustomers } from '@/domain/useCases';
import { Request } from '../../contracts';
import { errorHandler } from '../helpers/error-handle';

export class GetCustomers implements ICustomers {
  constructor(
    private readonly request: Request,
    private readonly getCustomersServiceUrl: string,
  ) {}

  public async getCustomers({
    user_id,
    token,
    search,
    skip,
  }: ICustomers.Params): Promise<{
    errors: any[];
    data: { data: ICustomers.Data[]; count?: number } | null;
  }> {
    try {
      const result = await this.request.get({
        uri: `${this.getCustomersServiceUrl}`,
        data: { user_id, search, skip },
        bearerToken: token,
      });

      console.log('SKIP', skip);

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
