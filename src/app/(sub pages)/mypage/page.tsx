'use client';
import { useEffect, useState } from 'react';
import UserInfoForm from '@/app/_components/domain/user/UserInfoForm';
import LogOut from '@/app/_components/domain/user/LogOut';
import DeleteAccount from '@/app/_components/domain/user/DeleteAccount';
import { jwtDecode } from 'jwt-decode';

const MyPage = () => {
  const [memberId, setMemberId] = useState<number | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        console.log('디코딩', decoded);
      } catch (err) {
        console.error('토큰 디코딩 실패:', err);
      }
    }
  }, []);
  if (!memberId) return <div>로딩중</div>;
  return (
    <div>
      <UserInfoForm />
      <LogOut />
      <DeleteAccount />
    </div>
  );
};
export default MyPage;
