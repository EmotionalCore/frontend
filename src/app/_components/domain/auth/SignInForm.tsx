'use client';
import React, { useState } from 'react';
import Inputs from '@/app/_components/_common/Inputs/Inputs';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { JwtResponse, PostSignInProps } from '@/api/auth/type';
import { postSignInApi } from '@/api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputsSignInValidation } from '@/app/_lib/zod/InputsValidation';
import { useRouter } from 'next/navigation';
import Buttons from '@/app/_components/_common/Buttons/Button';

const SignInForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
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
      setErrorMessage('이메일이나 비밀번호를 확인해 주세요');
      errors.email = { type: 'manual', message: '이메일을 확인해 주세요' };
      errors.password = { type: 'manual', message: '비밀번호를 확인해 주세요' };
    },
  });

  const onSubmit = async (data: PostSignInProps) => {
    console.log('Submitted Data', data);
    setErrorMessage('');
    signInMutation.mutate(data);
  };

  return (
    <>
      <div className='mt-[5.46rem] flex justify-center font-SCDream5 text-[2.8rem]'>로그인</div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center rounded-md'>
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
        <Buttons
          type='submit'
          intent={!isValid || signInMutation.isPending ? 'gray' : 'skyblue'}
          size='mdLogIn'
          disabled={!isValid || signInMutation.isPending}
          className='mt-[2rem]'
        >
          확인
        </Buttons>
        {errorMessage && (
          <div className='mt-[2rem] w-full text-left font-SCDream2 text-[1.6rem] text-red-E'>{errorMessage}</div>
        )}
        {signInMutation.isError &&
          (() => {
            console.log(signInMutation.error instanceof Error ? signInMutation.error.message : '로그인 중 에러 발생');
            return null;
          })()}
      </form>
    </>
  );
};

export default SignInForm;
