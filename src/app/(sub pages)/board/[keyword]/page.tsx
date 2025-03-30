import React from 'react';

interface BoardKeywordProps {
  params: { keyword: string };
}
const Keyword = ({ params }: BoardKeywordProps) => {
  return <div>keyword : {params.keyword}</div>;
};

export default Keyword;
