export type CardLayoutType =
  | 'verticalDefault' // 메인페이지 기본 세로형 (추천웹툰 등)
  | 'verticalLarge' // 게시판페이지용 큰 세로형
  | 'horizontalCard' // 가로형 카드 (추천 소설/시)
  | 'featuredCard' // 이달의 인기작품용 큰 카드
  | 'profileCard'; // 작가 프로필용 카드

export interface ImageSize {
  width: string;
  height: string;
}

export interface ImageSizeMap {
  verticalDefault: ImageSize;
  verticalLarge: ImageSize;
  horizontalCard: ImageSize;
  featuredCard: ImageSize;
  profileCard: ImageSize;
}
export interface CardDataProps {
  id: number;
  name: string;
  description?: string;
  title: string;
  coverImageUrl: string;
}

export interface CardProps {
  data: CardDataProps;
  layout?: CardLayoutType;
  className?: string;
}

export interface CardsProps {
  cards: CardDataProps[];
  layout?: CardLayoutType;
  className?: string;
}
