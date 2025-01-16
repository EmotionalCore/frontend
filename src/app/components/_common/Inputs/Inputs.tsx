import React, { useState } from 'react';
import { cn } from '@/app/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import ShowPasswordIcon from '/public/image/show-pwd.svg';
import HidePasswordIcon from '/public/image/hide-pwd.svg';
import { InputProps } from './types';

const inputVariants = cva('text-gray-6', {
  variants: {
    color: {
      default: 'text-gray-6 text-1.6rem font-SCDream5',
      check: 'text-gray-6 text-1.8rem font-SCDream2',
    },
    size: {
      default: 'w-[58rem] h-[6.2rem]',
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

export default function Inputs({ name, type, className, label, register, errors, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function passwordShowChange() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type == 'password' && showPassword ? 'text' : type}
        className={cn(inputVariants({ color: 'default', size: 'default' }))}
        {...register}
        {...props}
      />
      {type == 'password' && (
        <button type='button' title='Password Show or Hide' onClick={passwordShowChange}>
          {showPassword ? (
            <Image src={HidePasswordIcon} alt='hide password' />
          ) : (
            <Image src={ShowPasswordIcon} alt='show password' />
          )}
        </button>
      )}
      {errors[name]?.message && <span>{errors[name].message as string}</span>}
    </div>
  );
}
