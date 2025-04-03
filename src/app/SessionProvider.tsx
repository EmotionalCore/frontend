'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export const NextAuthSession = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
