import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Headers: React.FC = () => {
  return (
    <div className='flex h-[6.3rem] items-center bg-gray-200 font-SCDream5 text-[1.8rem] text-gray-900'>
      <div className='ml-[36rem] text-[2.4rem] text-black-0'>감성코어</div>
      <div className='ml-[4.3rem]'>
        <Link href='/' passHref>
          <div>홈</div>
        </Link>
      </div>
      <div className='ml-[3.4rem]'>
        <Link href='/board' passHref>
          <div>게시판</div>
        </Link>
      </div>
      <div className='ml-[3.4rem]'>
        <Link href='/search' passHref>
          <div>검색</div>
        </Link>
      </div>
      <div className='ml-[3.4rem]'>
        <Link href='/library' passHref>
          <div>
            <div>서재</div>
          </div>
        </Link>
      </div>
      <div className='ml-[51.58rem]'>
        <Link href='/forum/post' passHref>
          <div className='flex items-center'>
            <div className='relative h-[1.4rem] w-[1.3222rem]'>
              <Image src='/image/add-icon.svg' alt='add_icon' layout='fill' />
            </div>
            <div className='ml-[0.7rem] text-[2.4rem] text-[#067DFD]'>작품등록</div>
          </div>
        </Link>
      </div>
      <div className='ml-[0.71rem]'>
        <Link href='/mypage' passHref>
          <div className='relative flex h-[4.2143rem] w-[4rem] items-center' title='none_user'>
            <Image src='/image/none-user.svg' alt='none_user' layout='fill' />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Headers;
