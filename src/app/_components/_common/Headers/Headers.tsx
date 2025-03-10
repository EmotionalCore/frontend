import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NoneUserIcon from '/public/image/none-user-icon.svg';
import AddIcon from '/public/image/add-icon.svg';
import LogoImage from '/public/image/logo.svg';
import TitleImage from '/public/image/title.svg';

interface HeadersProps {
  isMainPage: boolean;
  isBoardPage: boolean;
  isSearchPage: boolean;
  isLibraryPage: boolean;
}
const Headers = ({ isMainPage, isBoardPage, isSearchPage, isLibraryPage }: HeadersProps) => {
  return (
    <header className='m-auto flex h-[6.3rem] flex-row items-center justify-between bg-white-F font-SCDream5 text-[1.8rem] text-black-2 sm:h-[9.6rem] sm:w-[37.3rem] sm:flex-col md:w-[74.4rem] lg:w-[120rem]'>
      {/* desktop/tablet 감성코어 홈 게시판 검색 서재 */}
      <div className='flex-low flex items-center sm:flex-col'>
        <div className='relative mr-[0.7rem] h-[3.6355rem] w-[4.7564rem]'>
          <Image src={LogoImage} alt='logo' fill style={{ objectFit: 'contain' }} />
        </div>
        <div className='relative h-[2.2272rem] w-[8.7453rem] sm:hidden'>
          <Image src={TitleImage} alt='title' fill style={{ objectFit: 'contain' }} />
        </div>
        <div className={`ml-[4.9rem] ${isMainPage ? 'text-black-2' : 'text-gray-9'}`}>
          <Link href='/' passHref>
            홈
          </Link>
        </div>
        <div className={`ml-[3.8rem] ${isBoardPage ? 'text-black-2' : 'text-gray-9'}`}>
          <Link href='/board' passHref>
            게시판
          </Link>
        </div>
        <div className={`ml-[3.8rem] ${isSearchPage ? 'text-black-2' : 'text-gray-9'}`}>
          <Link href='/search' passHref>
            검색
          </Link>
        </div>
        <div className={`ml-[3.8rem] ${isLibraryPage ? 'text-black-2' : 'text-gray-9'}`}>
          <Link href='/library' passHref>
            서재
          </Link>
        </div>
      </div>
      {/* desktop/tablet 작품등록 프로필 */}
      <div className='flex-low flex sm:flex-col'>
        <div>
          <Link href='/forum/post' passHref>
            <div className='flex items-center'>
              <div className='relative size-[2.4rem]'>
                <Image src={AddIcon} alt='add icon' fill style={{ objectFit: 'contain' }} />
              </div>
              <div className='ml-[0.6rem] text-[2rem] text-blue-0'>작품등록</div>
            </div>
          </Link>
        </div>
        <div className='ml-[3.95rem]'>
          <Link href='/mypage' passHref>
            <div className='relative flex size-[3.6rem] items-center' title='none_user'>
              <Image src={NoneUserIcon} alt='none user icon' fill style={{ objectFit: 'contain' }} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Headers;
