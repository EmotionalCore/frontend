'use client';
import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/app/loading';

const KakaoPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const kakaoCallRef = useRef(false);
  useEffect(() => {
    const code = searchParams.get('code');
    // console.log('인가코드 Kakao: ', code);

    if (!code || kakaoCallRef.current) return;
    kakaoCallRef.current = true;

    const getTokens = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/oauth2/kakao`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        router.push('/');
      } else {
        console.error('토큰 요청 실패');
      }
    };
    getTokens();
  }, [searchParams, router]);

  return (
    <div>
      <Loading type='spinner' />
    </div>
  );
};

export default KakaoPage;
