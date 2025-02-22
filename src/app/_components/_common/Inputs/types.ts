import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'search';
  className?: string;
  label: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
  helpText?: string;
  placeholder?: string;
}
