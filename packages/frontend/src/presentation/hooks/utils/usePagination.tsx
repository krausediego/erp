import { Button } from '@/presentation/components';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

export const usePagination = (count?: number) => {
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(count! / 7);

  const handleNextPage = () => {
    setSkip(skip + 7);
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setSkip(skip - 7);
    setCurrentPage(currentPage - 1);
  };

  const handleFirstPage = () => {
    setSkip(0);
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setSkip(7 * (totalPages - 1));
    setCurrentPage(totalPages);
  };

  const paginate = () => {
    return (
      <Flex w="full" justifyContent="center" gap={2}>
        {currentPage >= 3 && (
          <Button variant="outline" onClick={handleFirstPage}>
            Primeira
          </Button>
        )}
        {currentPage !== 1 && (
          <Button variant="outline" onClick={handlePreviousPage}>
            {currentPage - 1}
          </Button>
        )}
        <Button>{currentPage}</Button>
        {currentPage !== totalPages && (
          <Button variant="outline" onClick={handleNextPage}>
            {currentPage + 1}
          </Button>
        )}
        {totalPages !== currentPage && (
          <Button variant="outline" onClick={handleLastPage}>
            Ultima
          </Button>
        )}
      </Flex>
    );
  };

  return { paginate, skip };
};
