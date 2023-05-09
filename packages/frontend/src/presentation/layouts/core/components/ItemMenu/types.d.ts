import { LucideIcon } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type ItemMenuProps = {
  id: number;
  type: 'item' | 'category';
  label: string;
  route?: string;
  icon?: LucideIcon;
};
