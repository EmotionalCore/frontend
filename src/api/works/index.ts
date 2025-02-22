import { apiRequest } from '@/app/_lib/axios/instance/instance';
import { WorkData } from './type';
import { worksAddress } from '../address';

export const getBestWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.best);

export const getNovelWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.recommend.novel);

export const getPomeWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.recommend.poem);

export const getWebtoonWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.recommend.webtoon);

export const getPopularWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.popular);

export const getBestAuthorApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.authorBest);

export const getNewAuthorApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.new.author);
