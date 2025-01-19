import React, { useState } from 'react';
import { cn } from '@/app/utils/cn';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import ShowPasswordIcon from '/public/image/show-pwd-icon.svg';
import SearchIcon from '/public/image/search-icon.svg';

import { InputProps } from './types';

const inputBoxVariants = cva('', {
  variants: {
    layout: {
      default: 'mx-auto mb-[6.8rem] h-[13.6rem] w-[58rem]',
      checkbox: 'mx-auto flex w-[58rem] items-center',
      search: 'relative mx-auto flex w-[120.3rem] h-[8.2rem]',
    },
  },
  defaultVariants: {
    layout: 'default',
  },
});

const inputTextVariants = cva(' font-SCDream5 border-[1px] rounded-[1rem]', {
  variants: {
    border: {
      default: 'w-[58rem] h-[6.2rem] text-gray-6 p-[1rem] text-[1.6rem] border-gray-B',
      red: 'w-[58rem] h-[6.2rem] text-gray-6 p-[1rem] text-[1.6rem] border-red-E',
      search: 'placeholder-gray-B w-[115.2rem] text-[2.4rem] text-black-2 py-[1.9rem] pl-[2.1rem] border-black-2',
    },
  },
  defaultVariants: {
    border: 'default',
  },
});

const inputSidetextVariants = cva('', {
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

const Inputs = ({ name, type, placeholder, helpText, className, label, register, errors, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowChange = () => {
    setShowPassword(!showPassword);
  };
  const passwordType = () => {
    if (type == 'password') {
      return showPassword ? 'text' : type;
    }
    return type;
  };
  return (
    <>
      {(type == 'text' || type == 'email' || type == 'password') && (
        <div className={cn(inputBoxVariants())}>
          <label htmlFor={name} className={cn(inputSidetextVariants({ position: 'left' }))}>
            {label}
          </label>
          <div className='relative mt-[1.4rem]'>
            <input
              id={name}
              type={passwordType()}
              className={errors[name] ? cn(inputTextVariants({ border: 'red' })) : cn(inputTextVariants())}
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
          <div className={cn(inputSidetextVariants({ color: 'help', margin: 'm14' }))}>{helpText}</div>
          {errors[name]?.message && (
            <span className={cn(inputSidetextVariants({ margin: 'm1', color: 'red' }))}>
              {typeof errors[name].message == 'string' ? errors[name].message : ''}
            </span>
          )}
        </div>
      )}
      {type == 'checkbox' && (
        <div className={cn(inputBoxVariants({ layout: 'checkbox' }))}>
          <input id={name} type={type} className={'size-[2.4rem] text-gray-6'} {...register} {...props} />
          <label htmlFor={name} className={cn(inputSidetextVariants({ font: 'f500' }), 'items-center')}>
            {label}
          </label>
        </div>
      )}
      {type == 'search' && (
        <div className={cn(inputBoxVariants({ layout: 'search' }))}>
          <input
            id={name}
            type={type}
            placeholder='검색하세요.'
            className={cn(inputTextVariants({ border: 'search' }))}
            {...register}
            {...props}
          />
          <button type='submit' title='Search' className='absolute right-[7rem] top-1/2 size-[4.4rem] -translate-y-1/2'>
            <Image src={SearchIcon} alt='search'></Image>
          </button>
        </div>
      )}
    </>
  );
};
export default Inputs;
