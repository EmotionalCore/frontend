import React from 'react';
import { LoadingProps } from './_components/_common/Loading/type';

const Loading = ({ type }: LoadingProps) => {
  return type === 'skeleton' ? (
    <div className='grid grid-cols-4 gap-8'>
      {[...Array(4)].map((_, index) => (
        <div key={index} className='animate-pulse'>
          <div className='relative mb-4 h-[25.6rem] w-[17.5rem] overflow-hidden rounded-lg bg-gray-200 shadow-md'></div>
          <div className='space-y-3'>
            <div className='h-4 w-3/4 rounded bg-gray-200'></div>
            <div className='h-4 w-1/2 rounded bg-gray-200'></div>
            <div className='h-4 w-full rounded bg-gray-200'></div>
            <div className='h-4 w-full rounded bg-gray-200'></div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className='flex items-center justify-center'>
      <div className='size-12 animate-spin rounded-full border-y-2 border-blue-500'></div>
    </div>
  );
};

export default Loading;
