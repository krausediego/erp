import { Button } from './../Button/Button';
import { Flex } from '@chakra-ui/react';
import { PaginationProps } from './types';
import { useState } from 'react';

export const Pagination = ({ count }: PaginationProps) => {
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(count! / 7);

  return (
    <Flex w="full" justifyContent="center" gap={2}>
      {currentPage >= 3 && <Button variant="outline">{1}</Button>}
      {currentPage !== 1 && (
        <Button variant="outline">{currentPage - 1}</Button>
      )}
      <Button>{currentPage}</Button>
      {currentPage !== totalPages && (
        <Button variant="outline">{currentPage + 1}</Button>
      )}
      <Button variant="outline">Ultima pagina</Button>
    </Flex>
  );
};
