import LogoImage from '@/../public/image/footer-logo.svg';
import Image from 'next/image';

const footerUiData = {
  logo: LogoImage,
  alt: `감성코어 로고 이미지`,
  policies: {
    terms: '이용약관',
    privacy: '개인정보처리방침',
  },
  info: {
    description: '감성코어에 게시된 모든 콘텐츠들은 저작권법에 의거 보호받고 있습니다.',
    support: '고객지원: help@core.com',
  },
};

const Footer = () => {
  return (
    <footer className='flex h-[16.7rem] shrink-0 items-center justify-center gap-[6.1rem] bg-blue-C pr-[36.1rem]'>
      <Image src={footerUiData.logo} alt={footerUiData.alt} />
      <div className='flex flex-col'>
        <div className='flex flex-row items-center gap-[2rem] pb-[2.4rem] font-SCDream5 text-18-500'>
          <p>{footerUiData.policies.terms}</p>
          <p>{footerUiData.policies.privacy}</p>
        </div>
        <p className='pb-[1.6rem] font-SCDream5 text-16-500 text-gray-6'>{footerUiData.info.description}</p>
        <p className='font-SCDream5 text-16-500 text-gray-6'>{footerUiData.info.support}</p>
      </div>
    </footer>
  );
};

export default Footer;
