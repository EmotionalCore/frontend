import { apiRequest } from '@/app/_lib/axios/instance/instance';
import { JwtResponse, PostSignInProps, PostSignUpProps } from './type';
import { signAddress } from '../address';

export const postSignUpApi = (data: PostSignUpProps): Promise<PostSignUpProps> =>
  apiRequest('post', signAddress.signUp, data);

export const postSignInApi = (data: PostSignInProps): Promise<JwtResponse> =>
  apiRequest('post', signAddress.signIn, data);

// 중복 이메일 체크
export async function checkEmailApi(email: string) {
  const response = await apiRequest<{ exists: boolean }, { email: string }>('post', '/api/member/check/email', {
    email,
  });
  console.log('API response', response);
  return response.exists;
}
