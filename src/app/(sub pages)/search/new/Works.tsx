import React from 'react';
import SearchSection from '../SearchSection';
import { getNewAuthorApi, getNewWorkApi } from '@/api/works';

const works = () => {
  return (
    <SearchSection
      title='이달의 우수 작가'
      queryKey='author'
      type={'author'}
      fetchFn={getNewWorkApi}
      variant='monthly'
      hasMoreLink
    />
  );
};

export default works;
