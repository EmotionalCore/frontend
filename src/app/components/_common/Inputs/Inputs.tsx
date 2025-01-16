import React, { useState } from 'react';
import { cn } from '@/app/utils/cn';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import ShowPasswordIcon from '/public/image/show-pwd.svg';
import { InputProps } from './types';

const inputVariants = cva(
  'text-[1.6rem] font-SCDream5 p-[1rem] w-[58rem] h-[6.2rem] text-gray-6 border-[1px] rounded-[1rem]',
  {
    variants: {
      border: {
        default: 'border-gray-B',
        red: 'border-red-E',
      },
    },
    defaultVariants: {
      border: 'default',
    },
  }
);

const inputTextVariants = cva('', {
  variants: {
    color: {
      default: 'text-black-0',
      help: 'text-gray-9',
      check: 'text-gray-6',
      red: 'text-red-E',
    },
    size: {
      default: 'text-[1.6rem]',
      check: 'text-[1.8rem]',
    },
    position: {
      left: 'text-left',
    },
    font: {
      f200: 'font-SCDream2',
      f500: 'font-SCDream5',
    },
    margin: {
      m14: 'mt-[1.4rem]',
      m1: 'mt-[1rem]',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'default',
    font: 'f200',
  },
});

export default function Inputs({ name, type, helpText, className, label, register, errors, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function passwordShowChange() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      {type != 'checkbox' ? (
        <>
          <div className='mx-auto mb-[6.8rem] h-[13.6rem] w-[58rem]'>
            <label htmlFor={name} className={cn(inputTextVariants({ color: 'default', position: 'left' }))}>
              {label}
            </label>
            <div className='relative mt-[1.4rem]'>
              <input
                id={name}
                type={type == 'password' && showPassword ? 'text' : type}
                className={errors[name] ? cn(inputVariants({ border: 'red' })) : cn(inputVariants())}
                {...register}
                {...props}
              />

              {type == 'password' && (
                <button
                  type='button'
                  title='Password Show or Hide'
                  onClick={passwordShowChange}
                  className='absolute right-[2rem] top-1/2 size-[2.4rem] -translate-y-1/2'
                >
                  <Image src={ShowPasswordIcon} alt='show password' />
                </button>
              )}
            </div>
            <div className={cn(inputTextVariants({ color: 'help', margin: 'm14' }))}>{helpText}</div>
            {errors[name]?.message && (
              <span className={cn(inputTextVariants({ margin: 'm1', color: 'red' }))}>
                {errors[name].message as string}
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          <div className='mx-auto flex w-[58rem] items-center'>
            <input id={name} type={type} className={'size-[2.4rem] text-gray-6'} {...register} {...props} />
            <label htmlFor={name} className={cn(inputTextVariants({ font: 'f500' }), 'items-center')}>
              {label}
            </label>
          </div>
        </>
      )}
    </>
  );
}
