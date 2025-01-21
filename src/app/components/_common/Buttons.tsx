import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils/cn';
import { ButtonHTMLAttributes, FC } from 'react';

type Intent = 'primary' | 'red' | 'yellow' | 'green' | 'skyblue' | 'gray' | 'darkGray' | 'white' | 'whiteBorder';
type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'mdLogIn';

interface ButtonProps {
  intent?: Intent;
  size: Size;
  outline: boolean;
}

const ButtonVariants = cva('rounded-[0.625rem] hover:brightness-90 active:brightness-75', {
  variants: {
    intent: {
      primary: 'bg-[#329CFF] text-[#ffffff]',
      red: 'bg-[#EF2B2A] text-[#ffffff]',
      yellow: 'bg-[#FFE711] text-[#000]',
      green: 'bg-[#04C73C] text-[#ffffff]',
      skyblue: 'bg-[#CBE8FF] text-[#222222]',
      gray: 'bg-[#EEE] text-[#9e9e9e]',
      darkGray: 'bg-[#575757] text-[#ffffff]',
      white: 'bg-[#EEE] text-[#000]',
      whiteBorder: 'bg-[#fff] text-[#000] border-[1px] border-[#bdbdbd]',
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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}

const Buttons = ({ intent, size, outline, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(ButtonVariants({ intent, size }))} {...props}>
      {children}
    </button>
  );
};

export default Buttons;
