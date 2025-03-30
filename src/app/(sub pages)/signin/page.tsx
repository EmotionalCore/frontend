import EasySignIn from '@/app/_components/domain/auth/EasySignIn';
import SignInForm from '@/app/_components/domain/auth/SignInForm';

const SignIn = () => {
  return (
    <div className='relative w-[59rem] justify-center'>
      <SignInForm />
      <EasySignIn />
    </div>
  );
};

export default SignIn;
