'use client';
import Image from 'next/image';
import Buttons from '../../_common/Buttons/Button';
import GoogleIcon from '/public/image/google-icon.svg';
import NaverIcon from '/public/image/naver-icon.svg';
import KakaoIcon from '/public/image/kakao-icon.svg';
import Inputs from '../../_common/Inputs/Inputs';
import Link from 'next/link';

const EasySignIn = () => {
  const handleSocialSignIn = (provider: 'google' | 'naver' | 'kakao') => {
    let oauthUrl = '';
    switch (provider) {
      case 'google':
        const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const googleRedirectUri = encodeURIComponent('https://emotioncores.com/login/oauth2/code/google');
        const googleScope = encodeURIComponent('openid email profile');
        const googleState = 'emotion-google-login';
        oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&response_type=code&scope=${googleScope}&access_type=offline&state=${googleState}`;
        break;
      case 'naver':
        const naverClientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
        const naverState = 'emotion-naver-login';
        const naverRedirectUri = encodeURIComponent('https://localhost:3000/signin/naver');
        oauthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=${naverRedirectUri}&state=${naverState}`;
        break;
      case 'kakao':
        const kakaoClientId = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
        const kakaoRedirectUri = encodeURIComponent('http://localhost:3000/auth/oauth2/kakao');
        oauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}&response_type=code`;
        break;
    }
    window.location.href = oauthUrl;
  };

  return (
    <>
      <div className='mt-[10.4rem] flex justify-center font-SCDream5 text-[2.8rem]'>간편 로그인</div>
      <Buttons
        className='relative mt-[2.2rem] flex'
        intent='lightGray'
        type='button'
        size='md'
        onClick={() => handleSocialSignIn('google')}
      >
        <div className='absolute left-[2.9rem]'>
          <div className='relative size-[2.4rem]'>
            <Image src={GoogleIcon} alt='google icon' fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
        <div className='absolute left-1/2 -translate-x-1/2'>구글 로그인</div>
      </Buttons>
      <Buttons
        className='relative mt-[1.6rem] flex'
        intent='green'
        type='button'
        size='md'
        onClick={() => handleSocialSignIn('naver')}
      >
        <div className='absolute left-[2.9rem]'>
          <div className='relative size-[2.4rem]'>
            <Image src={NaverIcon} alt='naver icon' fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
        <div>네이버 로그인</div>
      </Buttons>
      <Buttons
        className='relative mt-[1.6rem] flex'
        intent='yellow'
        type='button'
        size='md'
        onClick={() => handleSocialSignIn('kakao')}
      >
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
