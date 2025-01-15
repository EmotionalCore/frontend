import React from 'react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';
import { cn } from '@/app/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { InputsValidation } from '@/app/lib/zod/InputsValidation';

const inputVariants = cva('text-gray-6', {
  variants: {
    color: {
      default: 'text-gray-6 text-1.6rem font-SCDream5',
      check: 'text-gray-6 text-1.8rem font-SCDream2',
    },
    size: {
      default: 'w-[58rem] h-[11rem]',
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'search';
  className?: string;
  label: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
}

export default function Inputs({ name, type, className, label, register, errors, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} className={className} {...register} {...props} />
      {errors[name]?.message && <span>{errors[name].message as string}</span>}
    </div>
  );
}
