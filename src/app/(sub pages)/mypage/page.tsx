'use client';
import UserInfoForm from '@/app/_components/domain/user/UserInfoForm';
import DeleteAccount from '@/app/_components/domain/user/DeleteAccount';
import { useEffect, useState } from 'react';
import Buttons from '@/app/_components/_common/Buttons/Button';
import { useRouter } from 'next/navigation';
import UserProfile from '@/app/_components/domain/user/UserProfile';

const MyPage = () => {
  const [active, setActive] = useState<'form' | 'delete' | null>('form');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      console.log('accessToken 있음');
    } else {
      console.log('accessToken 없음');
    }
  }, []);

  const router = useRouter();

  const LogOutButton = () => {
    try {
      localStorage.removeItem('accessToken');
      console.log('정상적으로 로그아웃');
      router.push('/');
    } catch (error) {
      console.error('로그아웃 중 에러:', error);
    }
  };

  return (
    <div className='flex'>
      <div>
        <UserProfile />
        <Buttons onClick={() => setActive('form')}>내 정보 관리</Buttons>
        <Buttons onClick={LogOutButton}>로그아웃</Buttons>
        <Buttons onClick={() => setActive('delete')}>탈퇴하기</Buttons>
      </div>
      <div>
        {active === 'form' && <UserInfoForm />}
        {active === 'delete' && <DeleteAccount />}
      </div>
    </div>
  );
};
export default MyPage;
