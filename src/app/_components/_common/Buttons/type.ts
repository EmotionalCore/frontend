import { ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { ButtonVariants } from './Button';

type Intent = 'primary' | 'red' | 'yellow' | 'green' | 'skyblue' | 'gray' | 'darkGray' | 'white' | 'whiteBorder';
type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'mdLogIn';

export interface ButtonProps {
  intent?: Intent;
  size: Size;
  outline: boolean;
}

export interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}
