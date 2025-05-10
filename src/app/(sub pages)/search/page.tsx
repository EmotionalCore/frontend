'use client';
import React from 'react';
import Search from './searchInput/Search';
import Keywords from './popularKeywords/Keywords';
import Writer from './new/Writer';
import Works from './new/Works';

import { useSearchParams } from 'next/navigation';
import Result from './keywordResult/KeywordResult';

const SearchMainPage = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword'); // 쿼리 스트링에서 keyword 값 가져오기

  return (
    <div className='pl-[4.5rem] pt-[4rem]'>
      <div className='pb-[6.5rem]'>
        <Search />
      </div>
      {keyword ? (
        <div>
          <Result keyword={keyword} />
        </div>
      ) : (
        <>
          <Keywords />
          <Works />
          <Writer />
        </>
      )}
    </div>
  );
};

export default SearchMainPage;
