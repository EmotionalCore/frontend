import { apiRequest } from '@/app/_lib/axios/instance/instance';
import { GetMyWorksProps, PostWorkEpisodeProps, PostWorkSeriesProps, TagsProps, WorkData } from './type';
import { worksAddress } from '../address';

export const getBestWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.best);

export const getNovelWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.recommend.novel);

export const getPomeWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.recommend.poem);

export const getWebtoonWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.recommend.webtoon);

export const getPopularWorksApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.popular);

export const getBestAuthorApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.authorBest);

export const getNewAuthorApi = (): Promise<WorkData[]> => apiRequest('get', worksAddress.new.author);

export const getTagAllListApi = (): Promise<TagsProps[]> => apiRequest('get', worksAddress.tag);

export const postWorkSeriesApi = (): Promise<PostWorkSeriesProps[]> => apiRequest('post', worksAddress.series);
export const getWorkSeriesApi = (): Promise<GetMyWorksProps> => apiRequest('get', worksAddress.series);
export const updateWorkSeriesApi = () => apiRequest('put', worksAddress.series);
export const deleteWorkSeriesApi = () => apiRequest('delete', worksAddress.series);
export const getMyWorksApi = (): Promise<GetMyWorksProps[]> => apiRequest('get', worksAddress.myWorks);

export const postWorkEpisodeApi = (): Promise<PostWorkEpisodeProps> => apiRequest('post', worksAddress.episode);
export const getWorkEpisodeApi = () => apiRequest('get', worksAddress.episode);
export const updateWorkEpisodeApi = () => apiRequest('put', worksAddress.episode);
export const deleteWorkEpisodeApi = () => apiRequest('delete', worksAddress.episode);
