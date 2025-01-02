import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Headers = () => {
  return (
    <div className='flex h-[3.9375rem] items-center bg-gray-200 p-[1rem] font-SCDream5 text-[1.125rem] text-gray-900'>
      <div className='ml-[22.5rem] text-[1.5rem] text-black-0'>감성코어</div>
      <div>
        <button className='ml-[2.9rem]'>홈</button>
      </div>
      <div>
        <button className='ml-[2.12rem]'>게시판</button>
      </div>
      <div>
        <button className='ml-[2.12rem]'>검색</button>
      </div>
      <div>
        <button className='ml-[2.12rem]'>서재</button>
      </div>
      <button className='ml-[38.81rem] flex items-center'>
        <div className='relative h-[0.875rem] w-[0.82638rem]'>
          <Image src='/image/add_icon.svg' alt='add_icon' layout='fill' />
        </div>
        <div className='ml-[0.44rem] text-[#067DFD]'>작품등록</div>
      </button>
      <button className='relative ml-[0.45rem] h-[2.63394rem] w-[2.5rem]' title='none_user'>
        <Image src='/image/none_user.png.svg' alt='none_user' layout='fill' />
      </button>
    </div>
  );
};
export default Headers;
