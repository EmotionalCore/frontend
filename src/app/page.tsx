//Dropdown 사용 예시
/*
'use client';
import DropdownMenu, { MenuItemProps } from './components/_common/DropdownMenu';
import DeleteIcon from '../../public/image/delete-icon.svg';
import ShareIcon from '../../public/image/share-icon.svg';
import EditIcon from '../../public/image/edit-icon.svg';
const items: MenuItemProps[] = [
  {
    id: '1',
    label: '수정하기',
    icon: ShareIcon,
    alt: 'edit',
    color: 'default',
    onClick: () => {
      console.log('수정하기 클릭됨');
    },
  },
  {
    id: '2',
    label: '공유하기',
    icon: EditIcon,
    alt: 'share',
    color: 'default',
    onClick: () => {
      console.log('공유하기 클릭됨');
    },
  },
  {
    id: '3',
    label: '삭제하기',
    icon: DeleteIcon,
    alt: 'delete',
    color: 'red',
    onClick: () => {
      console.log('삭제하기 클릭됨');
    },
  },
];

export default function Home() {
  return (
    <main>
      <div className='flex items-center justify-center'>
        <DropdownMenu items={items} size='default' variant='default' />
      </div>
    </main>
  );
}
*/
//input 사용 예시
'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Inputs from './components/_common/Inputs/Inputs';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputsValidation } from './components/_common/Inputs/InputsValidation';

interface FormData {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  isover14: boolean;
  search: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(InputsValidation),
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      isover14: false,
      search: '',
    },
  });
  const currentValues = watch();
  function handleError() {
    console.log(currentValues);
  }
  function onSubmit(data: FormData) {
    console.log(currentValues, data);
  }

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onSubmit, handleError)}>
        <Inputs
          name='nickname'
          type='text'
          label='Nickname'
          placeholder='닉네임을 입력해주세요'
          register={register('nickname')}
          errors={errors}
        />

        <Inputs
          name='email'
          type='email'
          label='Email'
          placeholder='이메일을 입력해주세요'
          register={register('email')}
          errors={errors}
        />
        <Inputs
          name='password'
          type='password'
          label='Password'
          placeholder='비밀번호를 입력해주세요'
          register={register('password')}
          errors={errors}
        />
        <Inputs
          name='passwordConfirm'
          type='password'
          label='Confirm Password'
          placeholder='비밀번호 확인을 입력해주세요'
          register={register('passwordConfirm')}
          errors={errors}
        />
        <Inputs
          name='isover14'
          type='checkbox'
          label='14세 이상입니다'
          register={register('isover14')}
          errors={errors}
        />
        <Inputs
          name='search'
          type='text'
          label='Search'
          placeholder='검색어를 입력해주세요'
          register={register('search')}
          errors={errors}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}
