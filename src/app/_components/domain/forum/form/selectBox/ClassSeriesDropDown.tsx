'use client';

import { Dispatch, SetStateAction } from 'react';

interface ClassSeriesDropDownProps {
  id: number;
  key: number;
  value: string;
  isSeriesDropDownOpen: boolean;
  setIsSeriesDropDownOpen: Dispatch<SetStateAction<boolean>>;
  setSeriesTypeValue: (value: string) => void;
}

const ClassSeriesDropDown = ({
  isSeriesDropDownOpen,
  setIsSeriesDropDownOpen,
  id,
  value,
  setSeriesTypeValue,
}: ClassSeriesDropDownProps) => {
  const onSelectSeriesValue = () => {
    setSeriesTypeValue(value);
    setIsSeriesDropDownOpen(!isSeriesDropDownOpen);
  };
  return (
    <li
      className='flex w-[30.9rem] cursor-pointer flex-col justify-center border-b-[0.1rem] border-gray-E hover:bg-gray-50'
      onClick={onSelectSeriesValue}
      key={id}
    >
      <p className='py-[3rem] pb-[2rem] font-SCDream1 text-18-500 text-black-2'>{value}</p>
    </li>
  );
};

export default ClassSeriesDropDown;
