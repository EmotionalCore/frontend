import { cn } from '@/app/_utils/cn';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import React from 'react';
import { DropdownMenuProps, MenuItemProps } from './type';

export const dropdownMenuVariants = cva('size-full shrink-0 rounded-[0.8rem] border-gray-B border-[0.1rem] bg-white', {
  variants: {
    variant: {
      default: 'shadow-lg',
      sm: 'shadow-sm',
    },
    size: {
      default: 'w-[24.2rem] h-[20.9rem]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const menuItemVariants = cva(
  'flex items-center justify-between px-[2.3rem] py-4 cursor-pointer hover:bg-gray-50 hover:rounded-[0.8rem] border-b-gray-E border-b-[0.1rem]',
  {
    variants: {
      color: {
        default: 'text-gray-6 font-SCDream2',
        red: 'text-red-E font-SCDream2',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  }
);

const MenuItem = ({ label, icon, alt, color, onClick }: MenuItemProps) => {
  return (
    <li onClick={onClick} className={cn(menuItemVariants({ color }), 'size-full', 'last:border-b-0')}>
      <span className='overflow-hidden text-ellipsis'>{label}</span>
      <div className='size-full max-w-[2rem]'>
        <Image
          src={icon}
          alt={`${alt} icon`}
          className={cn('size-full object-contain', {
            'text-red-E': color === 'red',
            'text-gray-6': color === 'default',
          })}
        />
      </div>
    </li>
  );
};

const DropdownMenu = ({ items, variant, size, ...props }: DropdownMenuProps) => {
  return (
    <ul className={cn(dropdownMenuVariants({ variant, size }))} {...props}>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default DropdownMenu;
