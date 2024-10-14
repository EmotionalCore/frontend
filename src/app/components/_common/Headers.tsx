import Image from 'next/image';
import Logo from '../../../../public/image/logo_circle.svg';
const Headers = () => {
  const HeaderStyles = {
    header: 'flex justify-between px-[1.7rem] w-full items-center border-solid border-gray-D border-b-[0.1rem]',
    logo: 'flex gap-[1.8rem] ',
    nav: 'flex justify-center items-center gap-[1.8rem]',
  };
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.logo}>
        <Image src={Logo} alt='Logo Image' width={65} height={65} />
        <span className='flex items-center justify-center font-laundry text-38-400 md:text-18-400'>감성코어</span>
      </div>
      <nav className={HeaderStyles.nav}>
        <span className='font-laundry text-30-400 md:text-18-400'>로그인</span>
        <span className='font-laundry text-30-400 md:text-18-400'>회원가입</span>
      </nav>
    </header>
  );
};

export default Headers;
