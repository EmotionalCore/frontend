'use client';
import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/app/loading';

const NaverPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const naverCallRef = useRef(false);
  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    // console.log('인가코드 Naver: ', code);
    // console.log('State Naver: ', state);

    if (!code || naverCallRef.current) return;
    naverCallRef.current = true;

    const getTokens = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signin/naver`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, state }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('AccessToken', data.accessToken);
        localStorage.setItem('RefreshToken', data.refreshToken);
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

export default NaverPage;
