import React from 'react';
import { SearchSection } from '../../SearchSection';
import { getNewWorkApi } from '@/api/works';

const resultWork = () => {
  return (
    <SearchSection
      title='신규 작품'
      queryKey='work'
      type={'work'}
      fetchFn={getNewWorkApi}
      variant='webtoon'
      hasMoreLink
    />
  );
};

export default resultWork;
