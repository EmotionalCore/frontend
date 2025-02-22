import { WorkData } from '@/api/works/type';

export type CardVariant = 'best' | 'monthly' | 'recommend' | 'poem' | 'novel' | 'webtoon';

export interface CardLayoutProps {
  data: WorkData[];
  variant: CardVariant;
  className?: string;
}

export interface CardItemProps {
  data: WorkData;
  variant: CardVariant;
  index?: number;
}

export interface CarouselNavButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}
