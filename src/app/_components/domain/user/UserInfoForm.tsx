'use client';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import Inputs from '../../_common/Inputs/Inputs';
import { fetchUserDataApi, updateUserDataApi } from '@/api/auth';
import Buttons from '../../_common/Buttons/Button';
import { useCallback, useEffect } from 'react';

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
    setValue,
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

  const onMyPage = useCallback(async () => {
    console.log('mypage에 accessToken 확인', localStorage.getItem('accessToken'));
    try {
      const userData = await fetchUserDataApi();
      console.log('User Data:', userData);
      setValue('username', userData.username);
      setValue('email', userData.email);
      setValue('profileImageUrl', userData.profileImageUrl ? userData.profileImageUrl : '');
      setValue('description', userData.description ? userData.description : '');
      setValue('links', userData.links ? userData.links : '');
      setValue('tags', userData.tags ? userData.tags : []);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, [setValue]);

  const mutation = useMutation({
    mutationFn: (data: UserInfo) => updateUserDataApi(data),
    onSuccess: (data) => {
      console.log('회원정보 수정 성공', data);
    },
    onError: () => {
      console.log('회원정보 수정 실패');
    },
  });

  const userInfoSubmit = (data: UserInfo) => {
    console.log('보낼 데이터 확인', data);
    mutation.mutate(data);
  };

  useEffect(() => {
    onMyPage();
  }, [onMyPage]);

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
      <Buttons type='submit' disabled={!isValid}>
        정보수정
      </Buttons>
    </form>
  );
};
export default UserInfoForm;
