import Tags from './_components/domain/main/tags/Tags';
import Best from './_components/domain/main/works/sections/best/Best';

export default function NotFound() {
  return (
    <div className='bg-black my-[20rem] flex h-auto flex-col items-center justify-center gap-[9.5rem]'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-SCDream5 text-45-500 text-black-0'>해당 페이지를 찾을 수 없습니다.</h1>
        <p className='font-SCDream2 text-24-200 text-black-2'>원하시는 결과를 찾을 수 없습니다.</p>
      </div>
      <Tags />
      <Best />
    </div>
  );
}
