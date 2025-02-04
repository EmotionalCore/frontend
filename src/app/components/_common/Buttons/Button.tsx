import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/app/utils/cn';
import { ButtonsProps } from './type';

export const ButtonVariants = cva('rounded-[0.625rem] hover:brightness-90 active:brightness-75', {
  variants: {
    intent: {
      primary: 'bg-blue-3 text-white-F',
      red: 'bg-red-E text-white-F',
      yellow: 'bg-[#FFE711] text-black-0',
      green: 'bg-[#04C73C] text-white-F',
      skyblue: 'bg-[#CBE8FF] text-black-2',
      gray: 'bg-gray-EE text-gray-9',
      darkGray: 'bg-[#575757] text-white-F',
      white: 'bg-gray-EE text-black-0',
      whiteBorder: 'bg-white-F text-black-0 border-[1px] border-gray-B',
    },
    size: {
      xxs: 'flex px-[1.4rem] py-[1.25rem] justify-center items-center text-[1rem] font-SCDream5',
      xs: 'flex w-[16.1rem] h-[4.2rem] px-[0.7rem] py-[1rem] justify-center items-center text-[1.25rem] font-SCDream5',
      sm: 'flex w-[25.5rem] h-[6rem] px-[0.7rem] py-[1rem] justify-center items-center gap-1.25 text-[1.5rem] font-SCDream5',
      md: 'flex w-[36.9rem] h-[3.9rem] px-[0.7rem] justify-center items-center text-[1rem] font-SCDream2',
      lg: 'flex w-[45.9rem] h-[4.5rem] px-[0.7rem] py-[1rem] justify-center items-center gap-2.5 text-[1.5rem] font-SCDream5',
      mdLogIn:
        'inline-flex w-[36.9rem] px-[0.7rem] py-[1rem] h-[3.9rem] items-center gap-1.25 text-[1rem] font-SCDream2',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});

const Buttons = ({ intent, size, children, ...props }: ButtonsProps) => {
  return (
    <button className={cn(ButtonVariants({ intent, size }))} {...props}>
      {children}
    </button>
  );
};

export default Buttons;
