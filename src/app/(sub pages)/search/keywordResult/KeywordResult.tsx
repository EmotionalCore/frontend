'use client';

import { getSearchResultApi } from '@/api/works';
import { SearchData } from '@/api/works/type';
import { useQuery } from '@tanstack/react-query';
import Buttons from '@/app/_components/_common/Buttons/Button';
import Image from 'next/image';
import { SearchContent } from './keywordResultSection';
import { useState } from 'react';

interface ResultProps {
  keyword: string;
}

const Result = ({ keyword }: ResultProps) => {
  console.log('검색어:', keyword);

  const pageSize = 4; // 페이지당 보여줄 작품 수
  const [workPage, setWorkPage] = useState(1);
  const [authorPage, setAuthorPage] = useState(1);

  const { data } = useQuery<SearchData, Error>({
    queryKey: ['searchResults', keyword],
    queryFn: () => getSearchResultApi(keyword),
  });

  const handleWorkLoadMore = () => {
    setWorkPage((prev) => prev + 1);
  };

  const handleAuthorLoadMore = () => {
    setAuthorPage((prev) => prev + 1);
  };
  if (!data) return null;

  const shownWorks = data.seriesDetailDTOList.slice(0, workPage * pageSize); // 현재 페이지에 보여줄 작품 목록
  const shownAuthors = data.authorDTOList.slice(0, authorPage * pageSize);

  return (
    <>
      {data && (
        <div className='max-w-3/4 pb-[26.1rem]'>
          <h3 className='font-SCDream5 text-[2.4rem]'>작품</h3>
          {shownWorks.length > 0 ? (
            shownWorks.map((work) => (
              <div key={work.id} className='flex flex-row border-b border-gray-300 py-[1.9rem]'>
                <div>
                  <Image
                    width={154}
                    height={227}
                    className='h-[227px] rounded-[1rem] object-cover'
                    src={`https://emotioncores.com${work.coverImageUrl}` || ''}
                    alt={work.title}
                    priority
                  />
                </div>
                <div className='ml-[2.9rem] flex flex-col'>
                  <p className='font-SCDream5 text-[2.9rem]'>{work.title}</p>
                  <SearchContent contentTitle='작가명' content={work.title} />
                  <div className='flex flex-row gap-[1rem] py-[1.4rem]'>
                    <SearchContent contentTitle='분야' content={work.type} />
                    <SearchContent contentTitle='조회' content={work.viewCount} />
                    <SearchContent contentTitle='좋아요' content={work.likeCount} />
                    <SearchContent contentTitle='북마크' content={work.bookmarkCount} />
                  </div>
                  <div className='flex flex-row gap-[1rem] py-[1.4rem] pt-[4.1rem]'>
                    {work.tags.map((tag, tagIndex) => (
                      <Buttons key={tagIndex} intent={'grayBorder'} size={'xxxs'}>
                        {tag}
                      </Buttons>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className='py-4 text-center font-SCDream5 text-[2.4rem] text-gray-500'>작품 정보가 없습니다.</h3>
          )}
          {shownWorks.length < data.seriesDetailDTOList.length && (
            <div className='mt-8 flex justify-center'>
              <Buttons intent={'primary'} size={'xs'} onClick={handleWorkLoadMore}>
                더보기
              </Buttons>
            </div>
          )}

          <h3 className='pt-[14.9rem] font-SCDream5 text-[2.4rem]'>작가</h3>
          {shownAuthors.length > 0 ? (
            shownAuthors.map((author) => (
              <div key={author.id} className='flex items-center gap-4 border-b border-gray-200 py-[1.9rem]'>
                <Image
                  width={154}
                  height={154}
                  src={author.profileImageUrl === null ? '' : `https://emotioncores.com${author.profileImageUrl}`}
                  alt={author.authorName}
                  className='h-[154px] rounded-full border border-gray-300 object-cover'
                  priority
                />
                <div className='flex flex-col pl-[2.9rem]'>
                  <h3 className='font-SCDream5 text-[2.4rem]'>{author.authorName}</h3>
                  <p className='pb-[3rem] font-SCDream5 text-[1.6rem] text-gray-6'>작품 {author.seriesCount}</p>
                  {author.tags && (
                    <div className='mt-2 flex flex-wrap gap-2'>
                      {author.tags.map((tag, tagIndex) => (
                        <Buttons key={tagIndex} intent={'grayBorder'} size={'xxxs'}>
                          {tag}
                        </Buttons>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className='text-2xl py-7 text-center font-SCDream5 text-[2rem] text-gray-500'>작가 정보가 없습니다.</p>
          )}
          {shownAuthors.length < data.authorDTOList.length && (
            <div className='mt-8 flex justify-center'>
              <Buttons intent={'primary'} size={'xs'} onClick={handleAuthorLoadMore}>
                더보기
              </Buttons>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Result;
