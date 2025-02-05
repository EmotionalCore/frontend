import axios, { AxiosRequestConfig, AxiosResponse, HttpStatusCode, isAxiosError } from 'axios';

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface ApiProps<T> {
  data?: T | null;
  errorMessage?: string | null;
}

export const BASE_URL = process.env.NEXT_APP_PUBLIC_BASE_URL || 'https://emotioncores.com';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (isAxiosError(error)) {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest:
          console.error('400 Error: Bad request.');
          break;
        case HttpStatusCode.Unauthorized:
          console.error('401 Error: Unauthorized.');
          return console.log(error);
          break;
        case HttpStatusCode.Forbidden:
          console.error('403 Error: Forbidden.');
          break;
        case HttpStatusCode.NotFound:
          console.error('404 Error: Resource not found.');
          break;
        case HttpStatusCode.InternalServerError:
          console.error('500 Error: Internal server error.');
          break;
        default:
          console.error(`Unknown error: ${error.response?.status}`);
          break;
      }
    } else {
      console.error('Unknown error:', error);
    }
    return Promise.reject(error);
  }
);

// API 요청 함수
export async function apiRequest<T, U>(
  method: HttpMethod,
  url: string,
  data?: U,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<T> {
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
    if (isAxiosError(error) && error.response) {
      console.error(`Axios Error : `, error);
    } else {
      console.error(`${method} Error : `, error);
    }
    throw error;
  }
}

export default instance;
