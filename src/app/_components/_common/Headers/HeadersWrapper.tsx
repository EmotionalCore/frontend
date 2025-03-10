'use client';
import { usePathname } from 'next/navigation';
import Headers from './Headers';
import React from 'react';

const HeadersWrapper = () => {
  const router = usePathname();
  const isSearchPage = router.startsWith('/search');
  const isBoardPage = router.startsWith('/board');
  const isMainPage = router == '/';
  const isLibraryPage = router.startsWith('/library');
  return (
    <Headers
      isMainPage={isMainPage}
      isBoardPage={isBoardPage}
      isSearchPage={isSearchPage}
      isLibraryPage={isLibraryPage}
    />
  );
};

export default HeadersWrapper;
