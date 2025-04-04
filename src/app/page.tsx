import React from 'react';
import Best from './_components/domain/main/works/sections/best/Best';
import Recommend from './_components/domain/main/works/sections/recommend/Recommend';
import Monthly from './_components/domain/main/works/sections/monthly/Monthly';
import Tags from './_components/domain/main/tags/Tags';

const page = () => {
  return (
    <main className='flex w-full flex-col items-center'>
      <Best />
      <Recommend />
      <Monthly />
      <Tags />
    </main>
  );
};

export default page;
