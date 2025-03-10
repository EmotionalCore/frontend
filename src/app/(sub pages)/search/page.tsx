'use client';
import React from 'react';
import Search from './searchInput/Search';
import Keywords from './popularKeywords/Keywords';
import Writer from './new/Writer';
import Works from './new/Works';

const page = () => {
  return (
    <div>
      <Search />
      <Keywords />
      <Works />
      <Writer />
    </div>
  );
};

export default page;
