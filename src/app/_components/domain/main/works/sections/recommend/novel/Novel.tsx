'use client';

import { getNovelWorksApi } from '@/api/works';
import WorkSection from '../../WorkSection';

const Novel = () => {
  return (
    <WorkSection
      title='추천 소설'
      queryKey='novel'
      fetchFn={getNovelWorksApi}
      type={'work'}
      variant='novel'
      hasMoreLink
      keyword='novel'
    />
  );
};

export default Novel;
