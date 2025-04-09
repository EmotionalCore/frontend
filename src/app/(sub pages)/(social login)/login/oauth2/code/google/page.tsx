'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GooglePage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);
  return <></>;
}
