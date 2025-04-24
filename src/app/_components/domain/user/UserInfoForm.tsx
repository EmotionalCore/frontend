'use client';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import Inputs from '../../_common/Inputs/Inputs';
import { apiRequest } from '@/app/_lib/axios/instance/instance';

export interface UserInfo {
  username: string;
  email: string;
  profileImageUrl: string;
  description: string;
  links: string;
  tags: string[];
}

const UserInfoForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserInfo>({
    defaultValues: {
      username: '',
      email: '',
      profileImageUrl: '',
      description: '',
      links: '',
      tags: [],
    },
    mode: 'onChange',
  });

  const mutation = useMutation({
    mutationFn: (data: UserInfo) => apiRequest('put', 'api/mypage/update', data),
    onSuccess: (data) => {
      console.log('회원정보 수정 성공', data);
    },
    onError: () => {
      console.log('회원정보 수정 실패');
    },
  });

  const userInfoSubmit = (data: UserInfo) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(userInfoSubmit)}>
      <Controller
        name='username'
        control={control}
        render={({ field }) => <Inputs {...field} label='닉네임' errors={errors} type='text' />}
      />
      <Controller
        name='email'
        control={control}
        render={({ field }) => <Inputs {...field} label='이메일' errors={errors} type='email' />}
      />
      <Controller
        name='profileImageUrl'
        control={control}
        render={({ field }) => <Inputs {...field} label='이미지url' errors={errors} type='text' />}
      />
      <Controller
        name='description'
        control={control}
        render={({ field }) => <Inputs {...field} label='설명' errors={errors} type='text' />}
      />
      <Controller
        name='links'
        control={control}
        render={({ field }) => <Inputs {...field} label='링크' errors={errors} type='text' />}
      />
      <Controller
        name='tags'
        control={control}
        render={({ field }) => (
          <Inputs
            {...field}
            label='해시태그'
            onChange={(e) => field.onChange(e.target.value.split(','))}
            errors={errors}
            type='text'
          />
        )}
      />
      <button type='submit' disabled={!isValid}>
        정보수정
      </button>
    </form>
  );
};
export default UserInfoForm;
