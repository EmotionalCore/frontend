'use client';
import React from 'react';
import Inputs from '@/app/_components/_common/Inputs/Inputs';

import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { PostSignUpProps } from '../../../../api/auth/type';
import { postSignUpApi } from '../../../../api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputsValidation } from '../../../../validation/auth';
const SignUpForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<PostSignUpProps>({
    resolver: zodResolver(InputsValidation),
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
        name='username'
        control={control}
        render={({ field }) => (
          <Inputs
            {...field}
            register={register('username')}
            type='text'
            label='닉네임'
            helpText={'10자 이내로 입력해주세요.'}
            errors={errors}
          />
        )}
      />
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Inputs
            {...field}
            register={register('email')}
            type='email'
            label='이메일'
            helpText={'이메일 helpText'}
            errors={errors}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <Inputs
            {...field}
            register={register('password')}
            type='password'
            label='비밀번호'
            helpText={'영문 대, 소문자/숫자/특수문자 포함, 8~15자'}
            errors={errors}
          />
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
