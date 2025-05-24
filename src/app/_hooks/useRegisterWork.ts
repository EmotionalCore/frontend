// hooks/useRegisterWork.ts
'use client';

import { useMutation } from '@tanstack/react-query';
import { PostWorkSeriesProps, PostWorkEpisodeProps } from '@/api/works/type';
import { worksAddress } from '@/api/address';
import { apiRequest } from '@/app/_lib/axios/instance/instance';

export const useRegisterWork = () => {
  const registerMutation = useMutation({
    mutationFn: async ({
      seriesData,
      episodeData,
    }: {
      seriesData: PostWorkSeriesProps;
      episodeData: Omit<PostWorkEpisodeProps, 'seriesId'>;
    }) => {
      const formSeries = new FormData();
      formSeries.append('title', seriesData.title);
      formSeries.append('description', seriesData.description);
      formSeries.append('type', seriesData.type);
      seriesData.tags.forEach((tag) => formSeries.append('tags', tag));
      formSeries.append('image', seriesData.image);

      const seriesRes = await apiRequest<{ id: number }>(
        'post',
        worksAddress.series,
        formSeries,
        undefined,
        undefined,
        true
      );

      const seriesId = seriesRes.id;

      const formEpisode = new FormData();
      formEpisode.append('seriesId', String(seriesId));
      formEpisode.append('title', episodeData.title);
      formEpisode.append('description', episodeData.description);
      formEpisode.append('coverImage', episodeData.coverImage);
      formEpisode.append('contents', episodeData.contents);
      episodeData.images.forEach((file) => formEpisode.append('images', file));

      await apiRequest('post', worksAddress.episode, formEpisode, undefined, undefined, true);

      return { seriesId };
    },
  });

  return {
    registerWork: registerMutation.mutateAsync,
    ...registerMutation,
  };
};
