import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NoneUserIcon from '/public/image/none-user-icon.svg';
import AddIcon from '/public/image/add-icon.svg';

const Headers = () => {
  return (
    <div className='flex h-[6.3rem] items-center bg-white-F font-SCDream5 text-[1.8rem] text-gray-900'>
      <div className='ml-[36rem] text-[2.4rem] text-black-0'>감성코어</div>
      <div className='ml-[4.3rem]'>
        <Link href='/' passHref>
          홈
        </Link>
      </div>
      <div className='ml-[3.4rem]'>
        <Link href='/board' passHref>
          게시판
        </Link>
      </div>
      <div className='ml-[3.4rem]'>
        <Link href='/search' passHref>
          검색
        </Link>
      </div>
      <div className='ml-[3.4rem]'>
        <Link href='/library' passHref>
          서재
        </Link>
      </div>
      <div className='ml-[51.58rem]'>
        <Link href='/forum/post' passHref>
          <div className='flex items-center'>
            <div className='relative h-[1.4rem] w-[1.3222rem]'>
              <Image src={AddIcon} alt='add icon' layout='fill' />
            </div>
            <div className='ml-[0.7rem] text-[2.4rem] text-[#067DFD]'>작품등록</div>
          </div>
        </Link>
      </div>
      <div className='ml-[0.71rem]'>
        <Link href='/mypage' passHref>
          <div className='relative flex h-[4.2143rem] w-[4rem] items-center' title='none_user'>
            <Image src={NoneUserIcon} alt='none user icon' layout='fill' />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Headers;
