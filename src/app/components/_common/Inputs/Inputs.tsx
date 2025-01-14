import React from 'react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'search';
  placeholder?: string;
  className?: string;
  label: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
}

export default function Inputs({ name, type, placeholder, className, label, register, errors, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...register} type={type} placeholder={placeholder} className={className} {...props} />
      {errors[name]?.message && <span>{errors[name].message as string}</span>}
    </div>
  );
}
