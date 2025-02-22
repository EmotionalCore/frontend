'use client';

import { getBestWorksApi } from '@/api/works';
import WorkSection from '../WorkSection';

const Best = () => {
  return (
    <WorkSection
      title='감성코어 인기 best 작품 순위'
      queryKey='todayBest'
      type={'work'}
      fetchFn={getBestWorksApi}
      variant='best'
    />
  );
};

export default Best;
