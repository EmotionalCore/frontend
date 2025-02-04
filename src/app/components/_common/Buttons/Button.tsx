import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/app/utils/cn';
import { ButtonsProps } from './type';

export const ButtonVariants = cva('rounded-[0.625rem] hover:brightness-90 active:brightness-75', {
  variants: {
    intent: {
      primary: 'bg-blue-3 text-white-F',
      red: 'bg-red-E text-white-F',
      yellow: 'bg-yellow-F text-black-0',
      green: 'bg-green-0 text-white-F',
      skyblue: 'bg-blue-C text-black-2',
      gray: 'bg-gray-EE text-gray-9',
      darkGray: 'bg-gray-5 text-white-F',
      white: 'bg-gray-EE text-black-0',
      whiteBorder: 'bg-white-F text-black-0 border-[1px] border-gray-B',
    },
    size: {
      xxs: 'flex px-[2.2rem] py-[2rem] justify-center items-center text-[1.6rem] font-SCDream5',
      xs: 'flex w-[25.7rem] h-[6.7rem] px-[0.7rem] py-[1rem] justify-center items-center text-[2rem] font-SCDream5',
      sm: 'flex w-[40.6rem] h-[9.6rem] px-[0.7rem] py-[1rem] justify-center items-center gap-1.25 text-[2.4rem] font-SCDream5',
      md: 'flex w-[59rem] h-[6.2rem] px-[0.7rem] justify-center items-center text-[1.6rem] font-SCDream2',
      lg: 'flex w-[73.3rem] h-[7.1rem] px-[0.7rem] py-[1rem] justify-center items-center gap-2.5 text-[2.4rem] font-SCDream5',
      mdLogIn:
        'inline-flex w-[59rem] h-[6.2rem] px-[0.7rem] py-[1rem] items-center gap-1.25 text-[1.6rem] font-SCDream2',
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
