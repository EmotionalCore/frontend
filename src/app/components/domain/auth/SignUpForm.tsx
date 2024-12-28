'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { PostSignUpProps } from '../../../api/auth/type';
import { postSignUpApi } from '../../../api/auth';

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<PostSignUpProps>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

  const signUpMutation = useMutation({
    mutationFn: (signupData: PostSignUpProps) => postSignUpApi(signupData),
    onSuccess: () => {
      console.log('Sign up successful');
      reset();
    },
    onError: (error) => {
      console.error('Sign up failed', error);
    },
  });

  const onSubmit = (data: PostSignUpProps) => {
    signUpMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-4 rounded-md p-6'>
      <Controller
        name='email'
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => (
          <div className='w-full'>
            <input
              {...field}
              type='email'
              placeholder='Email'
              className={`w-full border-[0.1rem] border-solid p-2 ${
                errors.email ? 'border-red-500' : 'border-black'
              } rounded-md`}
            />
            {errors.email && <p className='text-sm mt-1 text-red-500'>{errors.email.message}</p>}
          </div>
        )}
      />

      <Controller
        name='username'
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 2,
            message: 'Username must be at least 2 characters',
          },
        }}
        render={({ field }) => (
          <div className='w-full'>
            <input
              {...field}
              type='text'
              placeholder='Username'
              className={`w-full border-[0.1rem] border-solid p-2 ${
                errors.username ? 'border-red-500' : 'border-black'
              } rounded-md`}
            />
            {errors.username && <p className='text-sm mt-1 text-red-500'>{errors.username.message}</p>}
          </div>
        )}
      />

      <Controller
        name='password'
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        }}
        render={({ field }) => (
          <div className='w-full'>
            <input
              {...field}
              type='password'
              placeholder='Password'
              className={`w-full border-[0.1rem] border-solid p-2 ${
                errors.password ? 'border-red-500' : 'border-black'
              } rounded-md`}
            />
            {errors.password && <p className='text-sm mt-1 text-red-500'>{errors.password.message}</p>}
          </div>
        )}
      />

      <button
        type='submit'
        disabled={!isValid || signUpMutation.isPending}
        className='border-black w-full rounded-lg border-[0.1rem] border-solid p-2 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {signUpMutation.isPending ? 'Signing Up...' : 'Sign Up'}
      </button>

      {signUpMutation.isError && (
        <p className='text-sm text-red-500'>
          {signUpMutation.error instanceof Error ? signUpMutation.error.message : 'An error occurred during sign up'}
        </p>
      )}
    </form>
  );
};

export default SignUpForm;
