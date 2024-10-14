import { ReactNode } from 'react';
import Headers from '../components/_common/Headers';

interface SubPagesLayoutProps {
  children: ReactNode;
}
export default function SubPagesLayout({ children }: SubPagesLayoutProps) {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Headers />
      {children}
    </main>
  );
}
