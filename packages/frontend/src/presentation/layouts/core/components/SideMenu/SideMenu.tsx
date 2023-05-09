import { Flex, Heading } from '@chakra-ui/react';
import { menuItems } from '../../utils';
import { ItemMenu } from '../ItemMenu';
import { Button } from '@/presentation/components';
import { useState } from 'react';
import { useMenuSize } from '@/presentation/contexts';

export const SideMenu = () => {
  const { onOpen, onClose, isOpen } = useMenuSize();

  return (
    <Flex
      pos="sticky"
      w={isOpen ? '12%' : '5%'}
      transition="all .6s ease-in-out"
      h="full"
      bg="gray.50"
      flexDir="column"
      alignItems="center"
      // justifyContent="center"
      gap={3}
    >
      <Flex h="24" alignItems="center">
        <Heading>Logo</Heading>
      </Flex>
      {menuItems.map(({ id, label, type, route, icon }) => {
        return (
          <ItemMenu
            key={id}
            id={id}
            type={type}
            label={label}
            route={route}
            icon={icon}
          />
        );
      })}
      <Button
        variant="ghost"
        onClick={() => {
          return isOpen ? onClose() : onOpen();
        }}
      >
        Click
      </Button>
    </Flex>
  );
};
