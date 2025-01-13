import React from 'react';
import { useForm } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'search';
  placeholder?: string;
  label: string;
  className?: string;
}

const inputVariants = {
  nickname: {
    maxLength: 10,
  },
  email: {},
  password: {
    minLength: 8,
    maxLength: 15,
    //이것저것 포함
  },
  passwordConfirm: {
    //eye 누르면 text, 다시 누르면 password
  },
  isover14: {
    //만 14세 이상입니다
  },
  search: {},
};

export default function Inputs({ name, type, label, placeholder, className, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useForm();
  const variant = inputVariants[name as keyof typeof inputVariants] || {};
  return (
    <div>
      <label htmlFor={name}>
        <input
          id={name}
          {...register(name, variant)}
          type={type}
          placeholder={placeholder}
          className={className}
          {...props}
        />
      </label>
      <div>{errors[name]?.message as unknown as React.ReactNode}</div>
    </div>
  );
}
