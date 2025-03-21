'use client';
import React from 'react';
import Inputs from '@/app/_components/_common/Inputs/Inputs';

import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { PostSignUpProps } from '@/api/auth/type';
import { checkEmailApi, checkUsernameApi, postSignUpApi } from '@/api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputsSignUpValidation } from '@/app/_lib/zod/InputsValidation';
import { useRouter } from 'next/navigation';
import Buttons from '@/app/_components/_common/Buttons/Button';
import Link from 'next/link';

const SignUpForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm<PostSignUpProps>({
    resolver: zodResolver(InputsSignUpValidation),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
    },
    mode: 'onChange',
  });

  const signUpMutation = useMutation({
    mutationFn: (signupData: PostSignUpProps) => postSignUpApi(signupData),
    onSuccess: () => {
      console.log('Sign up successful');
      reset();
      router.replace('/signin');
    },
    onError: (error) => {
      console.error('Sign up failed', error);
    },
  });

  const onSubmit = async (data: PostSignUpProps) => {
    console.log('Submitted Data', data);
    try {
      const isExistedUsername = await checkUsernameApi(data.username);
      const isExistedEmail = await checkEmailApi(data.email);
      console.log('isExistedUsername :', isExistedUsername);
      console.log('isExistedEmail :', isExistedEmail);
      if (isExistedUsername) {
        setError('username', { type: 'manual', message: '중복되지 않은 닉네임으로 변경해주세요.' });
      }
      if (isExistedEmail) {
        setError('email', { type: 'manual', message: '이미 사용 중인 이메일입니다.' });
      }
      if (!isExistedEmail && !isExistedUsername) {
        signUpMutation.mutate(data);
      }
    } catch (error) {
      console.error('오류 발생', error);
    }
  };

  return (
    <>
      <div className='mt-[8.86rem] font-SCDream5 text-[2.8rem]'>회원가입</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mb-[5.7rem] flex flex-col items-center justify-center gap-4 rounded-md p-6'
      >
        <Controller
          name='username'
          control={control}
          render={({ field }) => (
            <Inputs {...field} type='text' label='닉네임' helpText={'10자 이내로 입력해주세요.'} errors={errors} />
          )}
        />
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
        <Controller
          name='passwordConfirm'
          control={control}
          render={({ field }) => (
            <Inputs {...field} type='password' label='비밀번호확인' helpText={undefined} errors={errors} />
          )}
        />
        <Buttons
          type='submit'
          intent={!isValid || signUpMutation.isPending ? 'gray' : 'skyblue'}
          size='mdLogIn'
          disabled={!isValid || signUpMutation.isPending}
        >
          확인
        </Buttons>
        {signUpMutation.isError &&
          (() => {
            console.log(signUpMutation.error instanceof Error ? signUpMutation.error.message : '회원가입 중 에러 발생');
            return null;
          })()}
        <div className='flex w-full'>
          <div className='text-left font-SCDream5 text-[1.6rem] text-gray-9'>이미 계정이 있으신가요?</div>
          <Link href='/signin' className='ml-[1.6rem] font-SCDream5 text-[1.8rem] text-blue-0 underline'>
            로그인
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
