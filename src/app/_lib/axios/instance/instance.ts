import axios, { AxiosRequestConfig, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface ApiResponse<T> {
  data: T;
  errorMessage?: string | null;
}

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://emotioncores.com';

// 기본 인스턴스 (JSON 요청용)
export const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// 게시글 등록 인스턴스
export const uploadInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  timeout: 15000,
});

// 요청 인터셉터 (공통)
const applyRequestInterceptor = (instance: typeof apiInstance) => {
  instance.interceptors.request.use(
    (config) => {
      if (typeof window !== 'undefined') {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

// 응답 인터셉터 (공통)
const applyResponseInterceptor = (instance: typeof apiInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (isAxiosError(error) && error.response) {
        const status = error.response.status;
        switch (status) {
          case HttpStatusCode.BadRequest:
            console.error('400: Bad Request');
            break;
          case HttpStatusCode.Unauthorized:
            console.error('401: Unauthorized - Token may have expired');
            break;
          case HttpStatusCode.Forbidden:
            console.error('403: Forbidden');
            break;
          case HttpStatusCode.NotFound:
            console.error('404: Resource Not Found');
            break;
          case HttpStatusCode.InternalServerError:
            console.error('500: Server Error');
            break;
          default:
            console.error(`Unhandled status code: ${status}`);
        }
      } else {
        console.error('Network or unknown error:', error);
      }
      return Promise.reject(error);
    }
  );
};

// 인터셉터 적용
applyRequestInterceptor(apiInstance);
applyResponseInterceptor(apiInstance);
applyRequestInterceptor(uploadInstance);
applyResponseInterceptor(uploadInstance);

// API 요청 함수
export async function apiRequest<T, U = unknown>(
  method: HttpMethod,
  url: string,
  data?: U,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig,
  useUploadInstance: boolean = false
): Promise<T> {
  const instance = useUploadInstance ? uploadInstance : apiInstance;
  try {
    const request: AxiosRequestConfig = {
      url,
      method,
      data,
      params,
      ...config,
    };
    const response: AxiosResponse<T> = await instance(request);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default apiInstance;
