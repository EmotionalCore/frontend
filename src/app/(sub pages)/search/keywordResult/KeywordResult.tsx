'use client';

import { getSearchResultApi } from '@/api/works';
import { SearchData } from '@/api/works/type';
import { useQuery } from '@tanstack/react-query';
import Buttons from '@/app/_components/_common/Buttons/Button';
import Image from 'next/image';

interface ResultProps {
  keyword: string;
}

const Result = ({ keyword }: ResultProps) => {
  console.log('검색어:', keyword);

  const { data, error, isLoading } = useQuery<SearchData, Error>({
    queryKey: ['searchResults'],
    queryFn: () => getSearchResultApi(keyword),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error fetching search results:', error);
    return <p>에렁에렁</p>;
  }

  return (
    <>
      {data && (
        <div className='pb-[26.1rem]'>
          <h3 className='font-SCDream5 text-[2.4rem]'>작품</h3>
          {Array.isArray(data.seriesDetailDTOList) && data.seriesDetailDTOList.length > 0 ? (
            data.seriesDetailDTOList.map((work) => (
              <div key={work.id} className='flex flex-row border-b border-gray-300 py-[1.9rem]'>
                <div>
                  <Image
                    width={154}
                    height={227}
                    className='rounded-[1rem]'
                    src={`https://emotioncores.com${work.coverImageUrl}` || ''}
                    alt={work.title}
                  />
                </div>
                <div className='ml-[2.9rem] flex flex-col'>
                  <p className='font-SCDream5 text-[2.9rem]'>{work.title}</p>
                  <p className='font-SCDream5 text-[1.6rem]'>
                    작가명 <span className='text-gray-9'>{work.authorName}</span>
                  </p>
                  <div className='flex flex-row gap-[1rem] py-[1.4rem]'>
                    <p className='font-SCDream5 text-[1.6rem] text-gray-6'>
                      분야 <span className='text-gray-9'>{work.type}</span>
                    </p>
                    <p className='font-SCDream5 text-[1.6rem] text-gray-6'>
                      조회 <span className='text-gray-9'>{work.viewCount}</span>
                    </p>
                    <p className='font-SCDream5 text-[1.6rem] text-gray-6'>
                      좋아요 <span className='text-gray-9'>{work.likeCount}</span>
                    </p>
                    <p className='font-SCDream5 text-[1.6rem] text-gray-6'>
                      북마크 <span className='text-gray-9'>{work.bookmarkCount}</span>
                    </p>
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

          <h3 className='pt-[14.9rem] font-SCDream5 text-[2.4rem]'>작가</h3>
          {Array.isArray(data.authorDTOList) && data.authorDTOList.length > 0 ? (
            data.authorDTOList.map((author) => (
              <div key={author.id} className='flex items-center gap-4 border-b border-gray-200 py-[1.9rem]'>
                <Image
                  width={154}
                  height={154}
                  src={`https://emotioncores.com${author.profileImageUrl}`}
                  alt={author.authorName}
                  className='rounded-full border border-gray-300'
                />
                <div className='flex flex-col pl-[2.9rem]'>
                  <h3 className='font-SCDream5 text-[2.4rem]'>{author.authorName}</h3>
                  <p className='pb-[4rem] font-SCDream5 text-[1.6rem] text-gray-6'>작품 {author.seriesCount}</p>
                  {author.tags && (
                    <div className='mt-2 flex flex-wrap gap-2'>
                      {author.tags.split(',').map((tag, tagIndex) => (
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
            <p className='py-4 text-center text-gray-500'>작가 정보가 없습니다.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Result;
