import { apiRequest } from '@/app/_lib/axios/instance/instance';
import { UserDatail } from './type';

// 정보 fetch
export async function fetchUserDataApi(): Promise<UserDatail> {
  const response = await apiRequest<UserDatail, null>('get', '/api/mypage/mydetail');
  return response;
}

// 회원정보 수정
export async function updateUserDataApi(data: UserDatail) {
  apiRequest('put', '/api/mypage/update', data);
}

// 탈퇴
export async function deleteAccoutApi() {
  const response = await apiRequest('delete', '/api/mypage/delete');
  return response;
}
