export interface WorkData {
  id: number;
  authorId: number;
  authorName?: string;
  title: string;
  coverImageUrl: string;
  description?: string;
}

export interface WorksProps {
  works: WorkData[];
}

export interface TagsProps {
  id: number;
  name: string;
}

export interface PostWorkSeriesProps {
  id: number;
  title: string;
  description: string;
  type: string;
  tags: string[];
  image: File;
}

export interface getWorkSeriesProps {
  seriesId: number;
}

export interface PostWorkEpisodeProps {
  seriesId: number;
  title: string;
  description: string;
  coverImage: string;
  contents: string;
  images: File[];
}
