import { apiRequest } from '@/app/_lib/axios/instance/instance';
import { PostSignInProps, PostSignUpProps, JwtResponse } from './type';
import { signAddress } from '../address';

export const postSignUpApi = (data: PostSignUpProps): Promise<PostSignUpProps> =>
  apiRequest('post', signAddress.signUp, data);

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
