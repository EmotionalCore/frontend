import React from 'react';
import SearchSection from '../SearchSection';
import { getNewAuthorApi } from '@/api/works';

const writer = () => {
  return (
    <SearchSection
      title='이달의 우수 작가'
      queryKey='author'
      fetchFn={getNewAuthorApi}
      type={'author'}
      variant='monthly'
      hasMoreLink
    />
  );
};

export default writer;
