import { Http, Middleware } from '../interfaces';
import * as yup from 'yup';
import { getHttpError, noContent } from '../helpers';

export class CreateCustomerValidator implements Middleware {
  private readonly required = 'Campos obrigatórios faltando.';
  private readonly validEmail = 'O email informado esta em formato inválido.';

  constructor() {}

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const schema = yup.object().shape({
        user_id: yup.string().required(this.required),
        address_id: yup.string().required(this.required),
        name: yup.string().required(this.required),
        email: yup.string().email(this.validEmail).required(this.required),
        phone: yup.string().required(this.required),
        birth_date: yup.string(),
        genre: yup.string(),
        cpf: yup.string(),
        cnpj: yup.string(),
        inscricao_estadual: yup.string(),
      });

      await schema.validate(request.data.body);

      return noContent();
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
