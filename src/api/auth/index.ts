import { apiRequest } from '@/app/_lib/axios/instance/instance';
import { PostSignInProps, PostSignUpProps, JwtResponse } from './type';
import { signAddress } from '../address';

export const postSignUpApi = (data: PostSignUpProps): Promise<PostSignUpProps> => {
  return apiRequest('post', signAddress.signUp, data, undefined, { withCredentials: true });
};

export const postSignInApi = (data: PostSignInProps): Promise<JwtResponse> =>
  apiRequest('post', signAddress.signIn, data);

// 중복 이메일 체크
export async function checkEmailApi(email: string) {
  const response = await apiRequest<{ exists: boolean }, { email: string }>(
    'get',
    '/api/member/check/email',
    undefined,
    {
      email,
    }
  );
  console.log('API response', response);
  return response.exists;
}
// 중복 닉네임 체크
export async function checkUsernameApi(username: string) {
  const response = await apiRequest<{ exists: boolean }, { username: string }>(
    'get',
    '/api/member/check/username',
    undefined,
    {
      username,
    }
  );
  console.log('API response', response);
  return response.exists;
}

interface UserDatail {
  username: string;
  email: string;
  profileImageUrl: string | null;
  description: string | null;
  links: string | null;
  tags: string[] | null;
}

// 마이페이지 정보 fetch
export async function fetchUserDataApi(): Promise<UserDatail> {
  const response = await apiRequest<UserDatail, null>('get', '/api/mypage/mydetail');
  return response;
}

// 마이페이지 회원정보 수정
export async function updateUserDataApi(data: UserDatail) {
  apiRequest('put', '/api/mypage/update', data);
}
