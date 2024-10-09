'use client';

import Image from 'next/image';
import ShowPwdIcon from '../../../../public/image/show-pwd.svg';
import HidePwdIcon from '../../../../public/image/hide-pwd.svg';
import { useState } from 'react';
interface InputProps {
  type: 'email' | 'password' | 'text' | 'checkbox';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: string;
  placeholder?: string;
  label?: string;
}

export const Inputs = ({ type, placeholder, value, onChange, errorMsg, label }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const DefaultInputStyle =
    ' border-gray-B flex h-[5rem] w-full shrink-0 items-center gap-[1rem] rounded-[0.6rem] border-[0.1rem] border-solid pl-[2rem] text-16-400 outline-none placeholder:text-gray-7';
  const InputStyles = {
    inputBox: 'relative flex h-[7.8rem] w-full flex-col items-start justify-center gap-[0.9rem]',
    focus: {
      input: `${DefaultInputStyle} focus:border-blue-9 `,
    },
    error: {
      text: 'w-full text-end text-12-400 text-red-E',
      input: `${DefaultInputStyle} border-red-E `,
    },
    label: 'text-16-400',
  };
  return (
    <div className={InputStyles.inputBox}>
      <label htmlFor={type} className={InputStyles.label}>
        {label}
      </label>
      <input
        id={type}
        type={inputType}
        className={errorMsg ? `${InputStyles.error.input} ` : `${InputStyles.focus.input}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <button type='button' onClick={togglePasswordVisibility} className='absolute ml-[18.5rem] mt-[3.2rem]'>
          <Image
            src={showPassword ? ShowPwdIcon : HidePwdIcon}
            alt='toggle password visibility'
            width={20.47}
            height={18.07}
          />
        </button>
      )}
      {errorMsg ? <p className={InputStyles.error.text}>{errorMsg}</p> : null}
    </div>
  );
};
