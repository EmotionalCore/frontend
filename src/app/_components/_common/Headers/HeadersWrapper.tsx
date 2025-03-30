'use client';
import { usePathname } from 'next/navigation';
import Headers from './Headers';
import React from 'react';

const HeadersWrapper = () => {
  const router = usePathname();
  const hasMainPage = router == '/';
  const hasBoardPage = router.startsWith('/board');
  const hasSearchPage = router.startsWith('/search');
  const hasLibraryPage = router.startsWith('/library');
  return (
    <Headers
      hasMainPage={hasMainPage}
      hasBoardPage={hasBoardPage}
      hasSearchPage={hasSearchPage}
      hasLibraryPage={hasLibraryPage}
    />
  );
};

export default HeadersWrapper;
