'use client';
import { getBestAuthorApi } from '@/api/works';
import WorkSection from '../../WorkSection';

const Author = () => {
  return (
    <WorkSection
      title='이달의 우수 작가'
      queryKey='author'
      type={'author'}
      fetchFn={getBestAuthorApi}
      variant='monthly'
    />
  );
};

export default Author;
