import { apiRequest } from '@/app/_lib/axios/instance/instance';
import { PostSignInProps, PostSignUpProps } from './type';
import { signAddress } from '../address';

export const postSignUpApi = (data: PostSignUpProps): Promise<PostSignUpProps> =>
  apiRequest('post', signAddress.signUp, data);

export const postSignInApi = (data: PostSignInProps): Promise<PostSignInProps> =>
  apiRequest('post', signAddress.signIn, data);
