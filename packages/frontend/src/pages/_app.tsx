import { theme } from '@/presentation/styles';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MenuSizeProvider } from '@/presentation/contexts';

export const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <MenuSizeProvider>
          <Component {...pageProps} />
        </MenuSizeProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
