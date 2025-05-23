'use client';
import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/app/loading';

const GooglePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const googleCallRef = useRef(false);
  useEffect(() => {
    const code = searchParams.get('code');
    // console.log('인가코드 Google: ', code);

    if (!code || googleCallRef.current) return;
    googleCallRef.current = true;

    const getTokens = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login/oauth2/code/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
        credentials: 'include',
      });

      if (res.ok) {
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

export default GooglePage;
