'use client';
import { fetchUserDataApi } from '@/api/mypage';
import Loading from '@/app/loading';
import { useEffect, useState } from 'react';

interface UserInfo {
  username: string;
  email: string;
  profileImageUrl: string | null;
}
const UserProfile = () => {
  const [userData, setUserData] = useState<UserInfo | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchUserDataApi();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return <Loading type='spinner' />;
  }

  const userImage = userData.profileImageUrl ? userData.profileImageUrl : '이미지 미지정';
  const userUsername = userData.username;
  const userEmail = userData.email;
  return (
    <div>
      이미지 : {userImage}
      이름 : {userUsername}
      이메일 : {userEmail}
    </div>
  );
};
export default UserProfile;
