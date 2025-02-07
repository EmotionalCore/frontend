import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='bg-black flex h-[100vh] w-[100vw] items-center justify-center text-blue-300'>
      현재 접속하신 경로는 존재하지 않은 페이지 입니다.
      <Link href={'/'}>
        <p className='text-red-300'>Home Page 이동 </p>
      </Link>
    </div>
  );
}
