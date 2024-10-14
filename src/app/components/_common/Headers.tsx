import Image from 'next/image';
import Logo from '../../../../public/image/logo_circle.svg';
import Link from 'next/link';
const Headers = () => {
  const HeaderStyles = {
    header: 'flex justify-between px-[1.7rem] w-full items-center border-solid border-gray-D border-b-[0.1rem]',
    logo: 'flex gap-[1.8rem] ',
    nav: 'flex justify-center items-center gap-[1.8rem]',
  };
  return (
    <header className={HeaderStyles.header}>
      <Link href={'/'} className={HeaderStyles.logo}>
        <Image src={Logo} alt='Logo Image' width={65} height={65} />
        <span className='flex items-center justify-center font-laundry text-38-400'>감성코어</span>
      </Link>
      <nav className={HeaderStyles.nav}>
        <Link href={'/signin'} className='font-laundry text-30-400'>
          로그인
        </Link>
        <Link href={'/signup'} className='font-laundry text-30-400'>
          회원가입
        </Link>
      </nav>
    </header>
  );
};

export default Headers;
