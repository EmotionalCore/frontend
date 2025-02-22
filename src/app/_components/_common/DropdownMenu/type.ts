import { VariantProps } from 'class-variance-authority';
import { dropdownMenuVariants } from './DropdownMenu';

export interface MenuItemProps {
  id: string;
  label: string;
  icon: string;
  alt: string;
  color?: 'default' | 'red';
  onClick?: () => void;
}

export interface DropdownMenuProps extends VariantProps<typeof dropdownMenuVariants> {
  items: MenuItemProps[];
}
