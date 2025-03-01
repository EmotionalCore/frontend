'use client';

import { getBestWorksApi } from '@/api/works';
import WorkSection from '../WorkSection';
import { usePathname } from 'next/navigation';

const Best = () => {
  const pathname = usePathname();

  const isPathNameTitle = pathname === '/' ? '감성코어 인기 best 작품 순위' : '';
  return (
    <WorkSection title={isPathNameTitle} queryKey='todayBest' type={'work'} fetchFn={getBestWorksApi} variant='best' />
  );
};

export default Best;
