'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const KakaoPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      localStorage.setItem('AccessToken', accessToken);
      localStorage.setItem('RefreshToken', refreshToken);
      router.push('/');
    }
  }, [searchParams, router]);

  return <div>카카오 로그인 처리 중입니다...</div>;
};

export default KakaoPage;
