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
interface LinksProps {
  href: string;
  label: string;
  isActive: boolean;
  marginLeft: keyof typeof marginOption;
}

const marginOption = {
  '4.9': 'ml-[4.9rem] md:ml-[3rem]',
  '3.8': 'ml-[3.8rem] md:ml-[3rem]',
};

const Links = ({ href, label, isActive, marginLeft }: LinksProps) => {
  return (
    <div className={`${marginOption[marginLeft] || ''} ${isActive ? 'text-black-2' : 'text-gray-9'}`}>
      <Link href={href} passHref>
        {label}
      </Link>
    </div>
  );
};

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
        <Links href='/' marginLeft='4.9' label='홈' isActive={isMainPage} />
        <Links href='/board' marginLeft='3.8' label='게시판' isActive={isBoardPage} />
        <Links href='/search' marginLeft='3.8' label='검색' isActive={isSearchPage} />
        <Links href='/library' marginLeft='3.8' label='서재' isActive={isLibraryPage} />
      </div>
      {/* desktop/tablet 작품등록 프로필 */}
      <div className='flex-low flex sm:flex-col'>
        <Link href='/forum/post' passHref>
          <div className='flex items-center'>
            <div className='relative size-[2.4rem]'>
              <Image src={AddIcon} alt='add icon' fill style={{ objectFit: 'contain' }} />
            </div>
            <div className='ml-[0.6rem] text-[2rem] text-blue-0'>작품등록</div>
          </div>
        </Link>
        <div className='ml-[4.25rem] md:ml-[3.3rem]'>
          <Link href='/signup' passHref>
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
