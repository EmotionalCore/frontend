import React from 'react';
import Novel from './novel/Novel';
import Webtoon from './webtoon/Webtoon';
import Poem from './poem/Poem';

const Recommend = () => {
  return (
    <>
      <Novel />
      <Poem />
      <Webtoon />
    </>
  );
};

export default Recommend;
