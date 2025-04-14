'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import defaultImage from '@/../public/image/default-image.svg';
import Buttons from '@/app/_components/_common/Buttons/Button';
import ReactEditor from '@/app/_components/domain/forum/form/ReactEditor';
import { Suspense } from 'react';
import Loading from '@/app/loading';

const page = () => {
  return (
    <Suspense fallback={<Loading type='spinner' />}>
      <form className='flex flex-col pt-[5rem]'>
        <h1 className='pb-[1.76rem] font-SCDream2 text-24-500 text-black-2'>작품등록</h1>
        {/* 옵션 설정 */}
        <div className='flex w-full flex-row gap-[3.3rem]'>
          <label htmlFor='imageUpload' className='cursor-pointer'>
            <Image src={defaultImage} alt='작품 기본 이미지' height={830} />
          </label>
          <input type='file' name='imageUpload' id='imageUpload' className='hidden' />
          <div className='flex w-full flex-col gap-[5.4rem]'>
            <div className='flex w-full flex-col'>
              <label htmlFor='text' className='pb-[1.5rem] font-SCDream2 text-20-500 text-black-2'>
                작품명
              </label>
              <input
                type='text'
                name='title'
                placeholder='작품명을 입력해주세요.'
                className='flex h-[7.1rem] items-center rounded-[1rem] border-[0.1rem] border-solid border-gray-B pl-[3rem] font-SCDream2 text-18-200'
              />
              <p className='pt-[1.6rem] font-SCDream1 text-16-200 text-gray-6'>45자 이내로 입력해 주세요.</p>
            </div>

            <div className='flex flex-row gap-[2.2rem]'>
              <div className='flex w-full flex-col gap-[1.9rem]'>
                <label htmlFor='select' className='font-SCDream2 text-20-500 text-black-2'>
                  분야
                </label>

                <button
                  type='button'
                  name='select'
                  className='flex h-[7.1rem] flex-row items-center justify-between rounded-[1rem] border-[0.1rem] border-solid border-gray-B px-[2.5rem]'
                >
                  <p className='font-SCDream1 text-18-500'>분류를 선택하세요.</p>
                  <ChevronDown />
                </button>
              </div>

              <div className='flex w-full flex-col gap-[1.5rem]'>
                <label htmlFor='' className='font-SCDream2 text-20-500 text-black-2'>
                  시리즈 설정
                </label>
                <button
                  type='button'
                  className='h-[7.1rem] rounded-[1rem] border-[0.1rem] border-solid border-gray-B font-SCDream2 text-20-500 text-blue-02'
                >
                  + 시리즈 추가하기
                </button>
              </div>
            </div>

            <div className='flex flex-col'>
              <label htmlFor='tags' className='pb-[1.5rem] font-SCDream2 text-20-500 text-black-2'>
                해시태그
              </label>
              <input
                type='text'
                name='tags'
                className='relative flex h-[8.2rem] items-center rounded-[1rem] border-[0.1rem] border-solid border-gray-B pl-[3rem]'
              />
              <p className='absolute translate-x-[75.7rem] translate-y-[7.5rem] items-center justify-end font-SCDream1 text-16-500'>
                0/8
              </p>
              <p className='pt-[1.8rem] font-SCDream1 text-16-200'>필수 3개 입력해 주세요.(최대 8개)</p>
            </div>
          </div>
        </div>
        {/* 작품 소개 */}
        <div className='flex flex-col justify-center gap-[1.6rem] pb-[8.7rem] pt-[5.3rem]'>
          <label htmlFor='introduce' className='font-SCDream2 text-20-500 text-black-2'>
            작품 소개
          </label>
          <input
            name='introduce'
            type='text'
            placeholder='작품을 소개해 주세요.'
            className='flex h-[13.8rem] rounded-[1rem] border-[0.1rem] border-solid border-gray-B pb-[9.76rem] pl-[3rem] pt-[2.64rem] font-SCDream2 text-18-200'
          />
          <p className='font-SCDream1 text-16-200'>180자 이내로 입력해 주세요.</p>
        </div>
        {/* react quill */}
        <div className='flex flex-col justify-center'>
          <ReactEditor />
          <p className='w-[57.4rem] flex-wrap pb-[11.56rem] pt-[2.2rem] font-SCDream2 text-20-500 text-gray-9'>
            가로사이즈는 690픽셀이하이며, 세로사이즈는 제한이 없습니다. 총 용량제한은 20mb이하이며, 파일1개의 용량제한은
            2mb입니다. 파일 형태는 gif, jpg로 제한됩니다.
          </p>
        </div>
        <div className='flex items-center justify-center pb-[12rem]'>
          <Buttons disabled={false} intent={`gray`} className='text-white-F'>
            등록
          </Buttons>
        </div>
      </form>
    </Suspense>
  );
};

export default page;
