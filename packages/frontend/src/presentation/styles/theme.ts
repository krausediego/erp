import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    main: {
      50: '#E9F2FB',
      100: '#C1D9F5',
      200: '#9AC1EF',
      300: '#72A9E8',
      400: '#4B90E2',
      500: '#2378DC',
      600: '#1C60B0',
      700: '#154884',
      800: '#0E3058',
      900: '#07182C',
    },
  },
  fonts: { heading: 'Poppins', body: 'Poppins' },
  styles: {
    global: { body: { bg: 'gray.100', color: 'gray.600', fontSize: '14px' } },
  },
});
