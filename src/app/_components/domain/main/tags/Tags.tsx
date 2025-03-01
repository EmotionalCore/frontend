'use client';

import React from 'react';
import { tagsData } from '../../../../_mock/page/main/tags/mock';
import TagButton from './TagButton';
import { usePathname } from 'next/navigation';

const Tags = () => {
  const firstRowTags = tagsData.slice(0, 10);
  const secondRowTags = tagsData.slice(10);

  const pathname = usePathname();

  const isPathNameTagsTitle = pathname === '/' ? true : false;

  return (
    <>
      {isPathNameTagsTitle ? (
        <section className='px-4 pb-[13.1rem] pt-[13.18rem]'>
          <div className='flex flex-col items-center justify-center gap-6 pb-[6rem]'>
            <h1 className='font-SCDream5 text-32-500'>아직 관심 작품을 발견하지 못하셨나요?</h1>
            <p className='font-SCDream5 text-20-500 text-gray-6'>아래 카테고리들을 탐색해보세요.</p>
          </div>

          <div className='flex flex-col gap-[2rem]'>
            <div className='flex flex-wrap justify-center gap-[1.4rem]'>
              {firstRowTags.map((item) => (
                <TagButton key={item.id} tag={item.tag} />
              ))}
            </div>

            <div className='flex flex-wrap justify-center gap-[1.4rem]'>
              {secondRowTags.map((item) => (
                <TagButton key={item.id} tag={item.tag} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          <div className='flex flex-col gap-[2rem]'>
            <div className='flex flex-wrap justify-center gap-[1.4rem]'>
              {firstRowTags.map((item) => (
                <TagButton key={item.id} tag={item.tag} />
              ))}
            </div>

            <div className='flex flex-wrap justify-center gap-[1.4rem]'>
              {secondRowTags.map((item) => (
                <TagButton key={item.id} tag={item.tag} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Tags;
