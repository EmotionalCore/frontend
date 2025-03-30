'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Buttons from '../../_common/Buttons/Button';
import GoogleIcon from '/public/image/google-icon.svg';
import NaverIcon from '/public/image/naver-icon.svg';
import KakaoIcon from '/public/image/kakao-icon.svg';
import Inputs from '../../_common/Inputs/Inputs';
import Link from 'next/link';

const EasySignIn = () => {
  const router = useRouter();
  //   간편 로그인 이동 버튼 : 현재는 main 페이지로 설정
  const handleEasySignIn = () => {
    router.push('/');
  };
  return (
    <>
      <div className='mt-[10.4rem] flex justify-center font-SCDream5 text-[2.8rem]'>간편 로그인</div>
      <Buttons
        className='relative mt-[2.2rem] flex'
        intent='lightGray'
        type='button'
        size='md'
        onClick={handleEasySignIn}
      >
        <div className='absolute left-[2.9rem]'>
          <div className='relative size-[2.4rem]'>
            <Image src={GoogleIcon} alt='google icon' fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
        <div className='absolute left-1/2 -translate-x-1/2'>구글 로그인</div>
      </Buttons>
      <Buttons className='relative mt-[1.6rem] flex' intent='green' type='button' size='md' onClick={handleEasySignIn}>
        <div className='absolute left-[2.9rem]'>
          <div className='relative size-[2.4rem]'>
            <Image src={NaverIcon} alt='naver icon' fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
        <div>네이버 로그인</div>
      </Buttons>
      <Buttons className='relative mt-[1.6rem] flex' intent='yellow' type='button' size='md' onClick={handleEasySignIn}>
        <div className='absolute left-[2.9rem]'>
          <div className='relative size-[2.4rem]'>
            <Image src={KakaoIcon} alt='kakao icon' fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
        <div>카카오 로그인</div>
      </Buttons>
      <div className='mt-[0.8rem] font-SCDream5 text-[1.8rem] text-gray-6'>
        <Inputs label='로그인 상태 유지' name='stay login' type='checkbox' />
      </div>
      <div className='mt-[6.3rem] flex justify-center'>
        <div className='font-SCDream5 text-[1.8rem] text-gray-9'>아직 감성코어 회원이 아니신가요?</div>
        <Link className='ml-[1.6rem] font-SCDream5 text-[1.8rem] text-blue-0 underline' href='/signup'>
          회원가입
        </Link>
      </div>
      <div className='mt-[3.2rem] flex justify-center font-SCDream5 text-[1.8rem] text-gray-6'>
        <div>SNS로 로그인 및 회원가입 시 감성코어의&nbsp;</div>
        <Link href='/' className='underline'>
          이용약관
        </Link>
        <div>과</div>
      </div>
      <div className='mb-[12.8rem] flex justify-center font-SCDream5 text-[1.8rem] text-gray-6'>
        <Link href='/' className='underline'>
          개인정보 수집 및 이용
        </Link>
        <div>에 동의한 것으로 간주합니다.</div>
      </div>
    </>
  );
};
export default EasySignIn;
