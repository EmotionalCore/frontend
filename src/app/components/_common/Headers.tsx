import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Headers: React.FC = () => {
  return (
    <div className='flex h-[6.3rem] items-center bg-gray-200 font-SCDream5 text-[1.8rem] text-gray-900'>
      <div className='ml-[36rem] text-[2.4rem] text-black-0'>감성코어</div>
      <Link href='/' passHref>
        <button className='ml-[4.3rem]'>홈</button>
      </Link>
      <Link href='/board' passHref>
        <button className='ml-[3.4rem]'>게시판</button>
      </Link>
      <Link href='/search' passHref>
        <button className='ml-[3.4rem]'>검색</button>
      </Link>
      <Link href='/library' passHref>
        <div>
          <button className='ml-[3.4rem]'>서재</button>
        </div>
      </Link>
      <Link href='/forum/post' passHref>
        <button className='ml-[51.58rem] flex items-center'>
          <div className='relative h-[1.4rem] w-[1.3222rem]'>
            <Image src='/image/add_icon.svg' alt='add_icon' layout='fill' />
          </div>
          <div className='ml-[0.7rem] text-[#067DFD]'>작품등록</div>
        </button>
      </Link>
      <Link href='/mypage' passHref>
        <button className='relative ml-[0.71rem] h-[4.2143rem] w-[4rem]' title='none_user'>
          <Image src='/image/none_user.png.svg' alt='none_user' layout='fill' />
        </button>
      </Link>
    </div>
  );
};
export default Headers;
