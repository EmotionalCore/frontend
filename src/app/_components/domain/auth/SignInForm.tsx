'use client';
import React from 'react';
import Inputs from '@/app/components/_common/Inputs/Inputs';
import { Controller, useForm } from 'react-hook-form';
import { PostSignInProps } from '@/app/api/auth/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputsValidation } from '@/app/lib/zod/InputsValidation';
import { useMutation } from '@tanstack/react-query';
import { postSignInApi } from '@/app/api/auth';
import { useRouter } from 'next/navigation';
const SignInForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm<PostSignInProps>({
    resolver: zodResolver(InputsValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  //before : Signup code 복붙
  // const signInMutation = useMutation({
  //   mutationFn: (signinData: PostSignInProps) => postSignInApi(signinData),
  //   onSuccess: () => {
  //     console.log('Sign in successful');
  //     reset();
  //     router.replace('/');
  //   },
  //   onError: (error) => {
  //     console.error('Sign in failed', error);
  //   },
  // });
  const signInMutation = useMutation({
    mutationFn: (signinData: PostSignInProps) => postSignInApi(signinData),
    onSuccess: (response) => {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      console.log('Sign in successful');
      reset();
      router.replace('/');
    },
    onError: (error) => {
      console.error('Sign in failed', error);
    },
  });

  const onSubmit = async (data: PostSignInProps) => {
    console.log('Form submitted');
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
          <Inputs {...field} type='password' label='비밀번호' helpText={undefined} errors={errors} />
        )}
      />
      <button
        type='submit'
        disabled={!isValid || signInMutation.isPending}
        className='border-black w-full rounded-lg border-[0.1rem] border-solid p-2 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {signInMutation.isPending ? 'Signing In...' : 'Sign In'}
      </button>

      {signInMutation.isError && (
        <p>
          {signInMutation.error instanceof Error ? signInMutation.error.message : 'An error occurred during sign in'}
        </p>
      )}
    </form>
  );
};
export default SignInForm;
