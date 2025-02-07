'use client';

import { getPomeWorksApi } from '@/app/api/works';
import WorkSection from '../../WorkSection';

const Poem = () => {
  return (
    <WorkSection
      title='추천 시'
      queryKey='poem'
      fetchFn={getPomeWorksApi}
      type={'work'}
      variant='poem'
      hasMoreLink
      keyword='poem'
    />
  );
};

export default Poem;
