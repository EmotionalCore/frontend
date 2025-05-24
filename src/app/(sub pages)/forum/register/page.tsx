'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import defaultImage from '@/../public/image/default-image.svg';
import Buttons from '@/app/_components/_common/Buttons/Button';
import ReactEditor from '@/app/_components/domain/forum/form/ReactEditor';
import ClassSeriesDropDown from '@/app/_components/domain/forum/form/selectBox/ClassSeriesDropDown';
import useDetectClose from '@/app/_hooks/useDetectClose';
import { ClassEpisodeDropDown } from '@/app/_components/domain/forum/form/selectBox/ClassEpisodeDropDown';
import { episodeTypes, seriesTypes } from '@/app/_mock/page/main/tags/mock';
import { useRegisterWork } from '@/app/_hooks/useRegisterWork';
import HashtagInput from '@/app/_components/domain/forum/form/hashTagInput/HashTagInput';

const Register = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [seriesType, setSeriesType] = useState('분류를 선택하세요.');
  const [episodeType, setEpisodeType] = useState('+ 시리즈 추가하기');
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const seriesRef = useRef(null);
  const episodeRef = useRef(null);
  const [isSeriesOpen, setIsSeriesOpen] = useDetectClose(seriesRef, false);
  const [isEpisodeOpen, setIsEpisodeOpen] = useDetectClose(episodeRef, false);

  const { registerWork } = useRegisterWork();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !title || !content) return alert('필수 항목을 입력해주세요.');

    try {
      await registerWork({
        seriesData: {
          title,
          description,
          type: seriesType,
          tags,
          image: imageFile,
        },
        episodeData: {
          title: episodeType,
          description,
          contents: content,
          coverImage: 'imageFile',
          images: [],
        },
      });
      alert('등록 성공!');
    } catch (err) {
      console.error(err);
      alert('등록 실패');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col pt-[5rem]'>
      <h1 className='pb-[1.76rem] font-SCDream2 text-24-500 text-black-2'>작품등록</h1>

      {/* 이미지 업로드 */}
      <div className='flex w-full flex-row gap-[3.3rem]'>
        <label htmlFor='imageUpload' className='cursor-pointer'>
          <Image src={preview || defaultImage} alt='작품 이미지' width={342} height={830} className='object-cover' />
        </label>
        <input type='file' id='imageUpload' accept='image/*' className='hidden' onChange={handleImageChange} />

        <div className='flex w-[82.5rem] flex-col gap-[5.4rem]'>
          {/* 작품명 */}
          <div className='flex w-full flex-col'>
            <label htmlFor='title' className='pb-[1.5rem] font-SCDream2 text-20-500 text-black-2'>
              작품명
            </label>
            <input
              id='title'
              type='text'
              placeholder='작품명을 입력해주세요.'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='flex h-[7.1rem] w-full items-center rounded-[1rem] border-[0.1rem] border-solid border-gray-B pl-[3rem] font-SCDream2 text-18-200'
            />
            <p className='pt-[1.6rem] font-SCDream1 text-16-200 text-gray-6'>45자 이내로 입력해 주세요.</p>
          </div>

          {/* 분야 + 시리즈 */}
          <div className='flex w-full flex-row gap-[2.2rem]'>
            <div className='flex w-[33.2rem] flex-col gap-[1.9rem]'>
              <label className='font-SCDream2 text-20-500 text-black-2'>분야</label>
              <div
                ref={seriesRef}
                onClick={() => setIsSeriesOpen(!isSeriesOpen)}
                className='flex h-[7.1rem] w-[33.2rem] cursor-pointer flex-row items-center justify-between rounded-[1rem] border-[0.1rem] border-solid border-gray-B px-[2.5rem]'
              >
                <input type='button' className='relative font-SCDream1 text-18-500 text-gray-9' value={seriesType} />
              </div>
              {isSeriesOpen && (
                <div className='absolute z-10 w-[33.2rem] translate-y-52 rounded-[1rem] border-[0.1rem] border-gray-B bg-white-F pl-[1.1rem]'>
                  <ul className='flex flex-col items-center justify-center'>
                    {seriesTypes.map((series) => (
                      <ClassSeriesDropDown
                        key={series.id}
                        id={series.id}
                        value={series.typeName}
                        isSeriesDropDownOpen={isSeriesOpen}
                        setIsSeriesDropDownOpen={setIsSeriesOpen}
                        setSeriesTypeValue={setSeriesType}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className='flex w-full flex-col gap-[1.5rem]' ref={episodeRef}>
              <label className='font-SCDream2 text-20-500 text-black-2'>시리즈 설정</label>
              <button
                type='button'
                onClick={() => setIsEpisodeOpen(!isEpisodeOpen)}
                className='relative h-[7.1rem] w-[47.1rem] rounded-[1rem] border-[0.1rem] border-solid border-gray-B font-SCDream2 text-20-500 text-blue-02 hover:bg-gray-50'
              >
                {episodeType}
              </button>
              {isEpisodeOpen && (
                <div className='absolute z-10 w-[47.1rem] translate-y-52 rounded-[1rem] border-[0.1rem] border-gray-B bg-white-F pl-[1.1rem]'>
                  <ul className='flex flex-col items-center justify-center'>
                    {episodeTypes.map((episode) => (
                      <ClassEpisodeDropDown
                        key={episode.id}
                        id={episode.id}
                        value={episode.title}
                        isEpisodeDropDownOpen={isEpisodeOpen}
                        setIsEpisodeDropDownOpen={setIsEpisodeOpen}
                        setEpisodeTypeValue={setEpisodeType}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 태그 */}
          <HashtagInput onChange={setTags} />
        </div>
      </div>

      {/* 소개 */}
      <div className='flex flex-col justify-center gap-[1.6rem] pb-[8.7rem] pt-[5.3rem]'>
        <label htmlFor='description' className='font-SCDream2 text-20-500 text-black-2'>
          작품 소개
        </label>
        <input
          id='description'
          type='text'
          placeholder='작품을 소개해 주세요.'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='flex h-[13.8rem] rounded-[1rem] border-[0.1rem] border-solid border-gray-B pb-[9.76rem] pl-[3rem] pt-[2.64rem] font-SCDream2 text-18-200'
        />
        <p className='font-SCDream1 text-16-200'>180자 이내로 입력해 주세요.</p>
      </div>

      {/* 본문 */}
      <div className='flex flex-col justify-center'>
        <ReactEditor onChange={setContent} />
        <p className='w-[57.4rem] flex-wrap pb-[11.56rem] pt-[2.2rem] font-SCDream2 text-20-500 text-gray-9'>
          가로사이즈는 690픽셀이하이며, 세로사이즈는 제한이 없습니다. 총 용량제한은 20mb이하이며, 파일1개의 용량제한은
          2mb입니다. 파일 형태는 gif, jpg로 제한됩니다.
        </p>
      </div>

      {/* 등록 버튼 */}
      <div className='flex items-center justify-center pb-[12rem]'>
        <Buttons type='submit' intent='gray' className='text-white-F'>
          등록
        </Buttons>
      </div>
    </form>
  );
};

export default Register;
