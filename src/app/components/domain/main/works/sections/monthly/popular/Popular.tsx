'use client';

import { getPopularWorksApi } from '@/app/api/works';
import WorkSection from '../../WorkSection';

const Popular = () => {
  return (
    <WorkSection
      title='이달의 인기 작품'
      queryKey='popular'
      type={'work'}
      fetchFn={getPopularWorksApi}
      variant='monthly'
    />
  );
};

export default Popular;
