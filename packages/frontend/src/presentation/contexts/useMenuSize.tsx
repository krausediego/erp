import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';
import { useContext, createContext, ReactNode } from 'react';

interface MenuSizeProviderProps {
  children: ReactNode;
}

type MenuSizeContextProps = UseDisclosureReturn;

const MenuSizeContext = createContext({} as MenuSizeContextProps);

const MenuSizeProvider = ({ children }: MenuSizeProviderProps) => {
  const disclosure = useDisclosure();

  return (
    <MenuSizeContext.Provider value={disclosure}>
      {children}
    </MenuSizeContext.Provider>
  );
};

const useMenuSize = () => {
  return useContext(MenuSizeContext);
};

export { useMenuSize, MenuSizeProvider };
