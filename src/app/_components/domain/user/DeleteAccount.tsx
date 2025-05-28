'use client';
import { deleteAccoutApi } from '@/api/mypage';
import { useRouter } from 'next/navigation';
import Buttons from '../../_common/Buttons/Button';

const DeleteAccount = () => {
  const router = useRouter();

  const DeleteAccountButton = async () => {
    try {
      await deleteAccoutApi();
      localStorage.removeItem('accessToken');
      console.log('정상적으로 탈퇴');
      router.push('/');
    } catch (error) {
      console.error('탈퇴 중 에러:', error);
    }
  };
  return (
    <div>
      <div>탈퇴하기</div>
      <div>회원 탈퇴 안내사항</div>
      <div>안녕하세요, 감성코어 운영팀입니다.</div>
      <Buttons onClick={DeleteAccountButton}>탈퇴하기</Buttons>
    </div>
  );
};

export default DeleteAccount;
