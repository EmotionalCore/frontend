'use client';
import React from 'react';
import Inputs from '@/app/_components/_common/Inputs/Inputs';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { JwtResponse, PostSignInProps } from '../../../../api/auth/type';
import { postSignInApi } from '../../../../api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputsSignInValidation } from '@/app/_lib/zod/InputsValidation';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<PostSignInProps>({
    resolver: zodResolver(InputsSignInValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const signInMutation = useMutation<JwtResponse, Error, PostSignInProps>({
    mutationFn: (signinData: PostSignInProps) => postSignInApi(signinData),
    onSuccess: (data) => {
      console.log('Sign in successful');
      localStorage.setItem('accessToken', data.accessToken);
      reset();
      router.replace('/');
    },
    onError: (error) => {
      console.error('Sign in failed', error);
    },
  });

  const onSubmit = async (data: PostSignInProps) => {
    console.log('Submitted Data', data);
    signInMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-4 rounded-md p-6'>
      <Controller
        name='email'
        control={control}
        render={({ field }) => <Inputs {...field} type='email' label='이메일' helpText={undefined} errors={errors} />}
      />
      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <Inputs
            {...field}
            type='password'
            label='비밀번호'
            helpText={'영문 대, 소문자/숫자/특수문자 포함, 8~15자'}
            errors={errors}
          />
        )}
      />
      <button
        type='submit'
        disabled={!isValid || signInMutation.isPending}
        className='border-black w-full rounded-lg border-[0.1rem] border-solid p-2 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {signInMutation.isPending ? 'Signing Up...' : 'Sign Up'}
      </button>

      {signInMutation.isError && (
        <p>
          {signInMutation.error instanceof Error ? signInMutation.error.message : 'An error occurred during sign up'}
        </p>
      )}
    </form>
  );
};

export default SignInForm;
