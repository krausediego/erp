import { HStack, Text, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ItemMenuProps } from './types';
import { useMenuSize } from '@/presentation/contexts';
import { AnimatePresence, motion } from 'framer-motion';

export const ItemMenu = ({ label, type, route, icon }: ItemMenuProps) => {
  const { isOpen } = useMenuSize();
  const router = useRouter();

  switch (type) {
    case 'item':
      return (
        <AnimatePresence>
          <HStack
            as="button"
            onClick={() => {
              return router.push(route!);
            }}
            w={isOpen ? '80%' : '50%'}
            h="2.5rem"
            pl={isOpen ? '1rem' : ''}
            borderRadius=".5rem"
            backgroundColor={
              router.pathname.startsWith(route!) ? 'main.50' : ''
            }
            alignItems="center"
            justifyContent={isOpen ? '' : 'center'}
            spacing={2}
          >
            <Icon
              as={icon}
              fontSize="1.4rem"
              color={router.pathname.startsWith(route!) ? 'main.500' : ''}
            />

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                  transition: { delay: 0.6, duration: 0.6 },
                }}
                exit={{ opacity: 0, height: 0, transition: { delay: 1 } }}
                transition={{ duration: 0.3, ease: 'linear' }}
              >
                <Text
                  fontSize="1rem"
                  fontWeight="500"
                  whiteSpace="nowrap"
                  color={router.pathname.startsWith(route!) ? 'main.500' : ''}
                >
                  {label}
                </Text>
              </motion.div>
            )}
          </HStack>
        </AnimatePresence>
      );
    case 'category':
      return (
        <HStack w="80%">
          <Text fontWeight="400" color="gray.500">
            {label}
          </Text>
        </HStack>
      );
    default:
      return null;
  }
};
