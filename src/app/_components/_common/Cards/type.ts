import { CardVariant } from '../../domain/main/works/sections/carousel/navButton/type';

export interface ImageCardProps {
  src: string;
  alt: string;
  variant: CardVariant;
  index?: number;
  href?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}
