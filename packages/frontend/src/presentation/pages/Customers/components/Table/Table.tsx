import { Button, Content, Search, Table } from '@/presentation/components';
import { useAuth } from '@/presentation/contexts';
import { useCustomersQuery, useDebounce } from '@/presentation/hooks';
import { Flex, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { BodyTable } from './Body';
import { TableCustomersProps } from './types';

export const TableCustomers = ({ service }: TableCustomersProps) => {
  const [search, setSearch] = useState('');

  const { decoded, token } = useAuth();
  const { debouncedValue, loading } = useDebounce(search, 5000);

  const { data } = useCustomersQuery(
    service,
    decoded?.id,
    token,
    debouncedValue,
  );

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <Content>
      <Flex gap={4}>
        <Search
          placeholder="Buscar cliente pelo nome ou email..."
          value={search}
          onChange={e => {
            return setSearch(e.target.value);
          }}
          isClear={!!search}
          clearSearch={clearSearch}
          isLoading={loading}
        />
        <Button leftIcon={<MdAdd size={20} />}>Adicionar cliente</Button>
      </Flex>
      <Table>
        <Thead>
          <Tr bg="teal">
            <Th color="gray.50" minW="225px">
              Nome
            </Th>
            <Th color="gray.50" minW="100px">
              Email
            </Th>
            <Th color="gray.50" minW="80px">
              Celular
            </Th>
            <Th color="gray.50">Status</Th>
            <Th maxW="10px" />
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.map(customer => {
            return <BodyTable key={customer.id} customer={customer} />;
          })}
        </Tbody>
      </Table>
    </Content>
  );
};
