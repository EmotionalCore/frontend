import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { WorkData } from '@/api/works/type';
import { getNewAuthorApi } from '@/api/works';
import Image from 'next/image';

const Writer = () => {
  const { data, isLoading } = useQuery<WorkData[], Error>({
    queryKey: ['author'],
    queryFn: () => getNewAuthorApi(),
  });

  return (
    <>
      <h3 className='pb-[3rem] pt-[7.5rem] font-SCDream5 text-[3.2rem]'>신규 작가</h3>
      <div className='flex flex-row gap-[2rem] pb-[10.6rem]'>
        {data?.map((item) => (
          <div
            key={item.id}
            className='flex h-[29rem] w-[18.5rem] flex-col items-center rounded-[1rem] border border-gray-400 p-[2rem]'
          >
            <div>
              {item.coverImageUrl && (
                <Image
                  width={100}
                  height={100}
                  className='rounded-[20rem]'
                  src={`https://emotioncores.com${item.coverImageUrl}`}
                  alt={item.title}
                />
              )}
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='pb-[2.8rem] pt-[1.6rem] font-SCDream5 text-[1.6rem]'>{item.authorName}</p>
              <p className='font-SCDream5 text-[1.6rem] text-gray-9'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Writer;
