import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NoneUserIcon from '/public/image/none-user-icon.svg';
import AddIcon from '/public/image/add-icon.svg';
import LogoImage from '/public/image/logo.svg';
import TitleImage from '/public/image/title.svg';

interface HeadersProps {
  hasMainPage: boolean;
  hasBoardPage: boolean;
  hasSearchPage: boolean;
  hasLibraryPage: boolean;
}
interface LinksProps {
  href: string;
  label: string;
  isActive: boolean;
  marginLeft: keyof typeof linksStlyeOption;
}

interface ImageLinksProps {
  src: string;
  alt: string;
  style: keyof typeof imageButtonStyleOption;
}

const linksStlyeOption = {
  '4.9': 'ml-[4.9rem] md:ml-[3rem] hover:text-black-2 sm:ml-0',
  '3.8': 'ml-[3.8rem] md:ml-[3rem] hover:text-black-2 sm:ml-0',
};

const imageButtonStyleOption = {
  logo: 'relative mr-[0.7rem] h-[3.6355rem] w-[4.7564rem] sm:mr-0',
  title: 'relative h-[2.2272rem] w-[8.7453rem] sm:hidden',
  add: 'relative size-[2.4rem]',
  user: 'relative flex size-[3.6rem] items-center',
};

const Links = ({ href, label, isActive, marginLeft }: LinksProps) => {
  return (
    <div className={`${linksStlyeOption[marginLeft] || ''} ${isActive ? 'text-black-2' : 'text-gray-9'}`}>
      <Link href={href} passHref>
        {label}
      </Link>
    </div>
  );
};

const ImageButton = ({ src, alt, style }: ImageLinksProps) => {
  return (
    <div className={`${imageButtonStyleOption[style] || ''}`} title={alt}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
    </div>
  );
};

const linksData = {
  home: '/',
  board: '/board',
  search: '/search',
  library: '/library',
  post: '/forum/post',
  signin: '/signin',
};

const Headers = ({ hasMainPage, hasBoardPage, hasSearchPage, hasLibraryPage }: HeadersProps) => {
  return (
    <header className='m-auto flex h-[6.3rem] flex-row items-center justify-between bg-white-F font-SCDream5 text-[1.8rem] text-black-2 sm:h-[21rem] sm:w-[37.3rem] sm:flex-col md:w-[74.4rem] lg:w-[120rem]'>
      {/* desktop/tablet 감성코어 홈 게시판 검색 서재 */}
      <div className='flex flex-row items-center sm:flex-col'>
        <ImageButton src={LogoImage} alt='logo' style='logo' />
        <ImageButton src={TitleImage} alt='title' style='title' />
        <Links href={linksData.home} marginLeft='4.9' label='홈' isActive={hasMainPage} />
        <Links href={linksData.board} marginLeft='3.8' label='게시판' isActive={hasBoardPage} />
        <Links href={linksData.search} marginLeft='3.8' label='검색' isActive={hasSearchPage} />
        <Links href={linksData.library} marginLeft='3.8' label='서재' isActive={hasLibraryPage} />
      </div>
      {/* desktop/tablet 작품등록 프로필 */}
      <div className='flex-low flex sm:flex-col'>
        <Link href={linksData.post} passHref>
          <div className='flex items-center'>
            <ImageButton src={AddIcon} alt='add' style='add' />
            <div className='ml-[0.6rem] text-[2rem] text-blue-0'>작품등록</div>
          </div>
        </Link>
        <div className='ml-[4.25rem] flex justify-center sm:ml-0 md:ml-[3.3rem]'>
          <Link href={linksData.signin} passHref>
            <ImageButton src={NoneUserIcon} alt='none user' style='user' />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Headers;
