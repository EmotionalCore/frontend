/* eslint-disable prettier/prettier */
export type CardVariant = 'best' | 'monthly' | 'recommend' | 'poem' | 'novel' | 'webtoon';

export interface CardItemProps {
  data: {
    id: number;
    title: string;
    coverImageUrl: string;
    authorName?: string;
    description?: string;
  };
  variant: CardVariant;
  id?: number;
}

export interface CardLayoutProps {
  data: {
    id: number;
    title: string;
    coverImageUrl: string;
    authorName?: string;
    description?: string;
  }[];
  variant: CardVariant;
  className?: string;
}
