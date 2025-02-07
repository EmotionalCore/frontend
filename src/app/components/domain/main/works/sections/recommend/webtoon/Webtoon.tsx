'use client';
import { getWebtoonWorksApi } from '@/app/api/works';
import WorkSection from '../../WorkSection';

const Webtoon = () => {
  return (
    <WorkSection
      title='추천 웹툰'
      queryKey='webtoon'
      fetchFn={getWebtoonWorksApi}
      type={'work'}
      variant='webtoon'
      hasMoreLink
      keyword='webtoon'
    />
  );
};

export default Webtoon;
