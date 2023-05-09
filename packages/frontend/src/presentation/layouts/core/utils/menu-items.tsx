import { MenuItemsProps } from './types';
import { LayoutDashboard, User2, Hammer } from 'lucide-react';

export const menuItems: MenuItemsProps[] = [
  {
    id: 1,
    type: 'category',
    label: 'Análises',
  },
  {
    id: 2,
    type: 'item',
    label: 'Dashboard',
    route: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 3,
    type: 'category',
    label: 'Controle',
  },
  {
    id: 4,
    type: 'item',
    label: 'Clientes',
    route: '/customers',
    icon: User2,
  },
  {
    id: 5,
    type: 'item',
    label: 'Matéria Prima',
    route: '/materia-prima',
    icon: Hammer,
  },
];
