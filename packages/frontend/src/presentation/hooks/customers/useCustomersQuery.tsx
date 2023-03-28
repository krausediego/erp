import { ICustomers } from '@/domain/useCases';
import { useQuery } from '@tanstack/react-query';

export const useCustomersQuery = (
  getCustomersSerivce: ICustomers,
  user_id: string,
  token: string,
  search?: string,
  skip?: number,
) => {
  let queryKey = search
    ? ['customers[]', user_id, search]
    : ['customers[]', user_id];

  skip ? (queryKey = ['customers[]', String(skip)]) : queryKey;

  return useQuery(
    queryKey,
    async () => {
      return getCustomersSerivce.getCustomers({ user_id, token, search, skip });
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
