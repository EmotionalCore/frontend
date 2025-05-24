'use client';

// import { getWorkSeriesApi } from '@/api/works';
// import { GetMyWorksProps } from '@/api/works/type';
// import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

interface ClassEpisodeDropDownProps {
  id: number;
  key: number;
  value: string;
  isEpisodeDropDownOpen: boolean;
  setIsEpisodeDropDownOpen: Dispatch<SetStateAction<boolean>>;
  setEpisodeTypeValue: (value: string) => void;
}

// 백엔드 일정 추 후 작업 진행
export const ClassEpisodeDropDown = ({
  id,
  value,
  isEpisodeDropDownOpen,
  setIsEpisodeDropDownOpen,
  setEpisodeTypeValue,
}: ClassEpisodeDropDownProps) => {
  // const { data } = useQuery<GetMyWorksProps, Error>({
  //   queryKey: ['myWorksData'],
  //   queryFn: () => getWorkSeriesApi(),
  // });

  // const onMenuEdit = () => {};

  // const onMenuSelect = () => {};

  const onSelectSeriesValue = () => {
    setEpisodeTypeValue(value);
    setIsEpisodeDropDownOpen(!isEpisodeDropDownOpen);
  };
  return (
    <>
      <li
        className='flex w-full cursor-pointer flex-col justify-center border-b-[0.1rem] border-gray-E hover:bg-gray-50'
        onClick={onSelectSeriesValue}
        key={id}
      >
        <p className='py-[3rem] pb-[2rem] font-SCDream1 text-18-500 text-black-2'>{value}</p>
      </li>
    </>
  );
};
