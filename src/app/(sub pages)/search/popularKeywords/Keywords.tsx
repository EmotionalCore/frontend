import TagButton from '@/app/_components/domain/main/tags/TagButton';
import { getPopularTagsApi } from '@/api/works';
import { TagData } from '@/api/works/type';
import { useQuery } from '@tanstack/react-query';

import React from 'react';

const Keywords = () => {
  const { data } = useQuery<TagData[], Error>({
    queryKey: ['tags'],
    queryFn: getPopularTagsApi,
  });

  return (
    <>
      <section className='px-x w-5/6'>
        <h3 className='pb-[3.2rem] font-SCDream5 text-[3.2rem]'>인기 검색어</h3>
        <div className='flex flex-col gap-[2rem]'>
          <div className='justify-left flex flex-wrap gap-[1.4rem]'>
            {data?.map((item) => (
              <TagButton key={item.searchId} tag={item.searchWord} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Keywords;
