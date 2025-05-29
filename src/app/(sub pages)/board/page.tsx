'use client';

import { getAllWorksApi } from '@/api/works';
import { WorkData } from '@/api/works/type';
import { useQuery } from '@tanstack/react-query';

const Board = () => {
  const pageNum = 1; // 페이지 번호를 1로 설정

  const { data } = useQuery<WorkData[], Error>({
    queryKey: ['author', pageNum],
    queryFn: () => getAllWorksApi(pageNum),
  });

  return (
    <>
      {/* {data?.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))} */}
    </>
  );
};

export default Board;
