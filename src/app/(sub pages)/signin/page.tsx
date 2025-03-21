import EasySignIn from '@/app/_components/domain/auth/EasySignIn';
import SignInForm from '@/app/_components/domain/auth/SignInForm';

const SignIn = () => {
  return (
    <>
      <SignInForm />
      <EasySignIn />
    </>
  );
};

export default SignIn;
