export type CardDisplayType = 'default' | 'row';

export interface ImageSize {
  width: string;
  height: string;
}

export interface ImageSizeMap {
  default: ImageSize;
  row: ImageSize;
}

export interface CardDataProps {
  id: number;
  name: string;
  description?: string;
  title?: string;
  coverImageUrl: string;
  type?: CardDisplayType;
}

export interface CardProps {
  data: CardDataProps;
  className?: string;
}

export interface CardsProps {
  cards: CardDataProps[];
  className?: string;
}
