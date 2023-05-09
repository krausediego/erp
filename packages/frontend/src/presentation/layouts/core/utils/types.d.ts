import { LucideIcon } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type MenuItemsProps = {
  id: number;
  type: 'item' | 'category';
  label: string;
  route?: string;
  icon?: LucideIcon;
};
