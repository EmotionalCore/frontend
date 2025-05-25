'use client';
import UserInfoForm from '@/app/_components/domain/user/UserInfoForm';
import LogOut from '@/app/_components/domain/user/LogOut';
import DeleteAccount from '@/app/_components/domain/user/DeleteAccount';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const MyPage = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken);
        const now = Date.now() / 1000;
        console.log('현재 로그인한 사용자 정보:', decoded);
        if (!decoded || !decoded.exp) {
          console.log('토큰 뭔가 잘못됨');
        }
        if (decoded && decoded.exp && decoded.exp < now) {
          console.log('토큰 만료');
        } else {
          console.log('토큰 유효');
        }
      } catch (error) {
        console.error('토큰 디코딩 실패:', error);
      }
    } else {
      console.warn('accessToken이 없습니다. 로그인되지 않은 상태입니다.');
    }
  }, []);
  return (
    <div>
      <UserInfoForm />
      <LogOut />
      <DeleteAccount />
    </div>
  );
};
export default MyPage;
