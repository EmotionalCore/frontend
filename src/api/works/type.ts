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
  title: string;
  description: string;
  type: string;
  tags: string[];
  image: File;
}

export interface GetMyWorksProps {
  id: number;
  title: string;
}

export interface PostWorkEpisodeProps {
  seriesId: number;
  title: string;
  description: string;
  coverImage: string;
  contents: string;
  images: File[];
}

export interface TagData {
  searchId: number;
  searchWord: string;
  searchCount: number;
}

export interface SearchData {
  seriesDetailDTOList: {
    id: number;
    authorId: number;
    authorName: string;
    title: string;
    coverImageUrl: string;
    description: string;
    type: string;
    viewCount: number;
    likeCount: number;
    bookmarkCount: number;
    tags: string[];
  }[];
  authorDTOList: {
    id: number;
    authorName: string;
    seriesCount: number;
    description: string;
    links: string;
    tags: string[];
    profileImageUrl: string;
  }[];
}

export interface SearchProps {
  search: SearchData[];
}
