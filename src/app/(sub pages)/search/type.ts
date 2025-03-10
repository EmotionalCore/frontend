import { CardVariant } from '@/app/_components/domain/main/works/sections/carousel/navButton/type';
import { VariantProps } from 'class-variance-authority';
import { WorkData } from '@/api/works/type';
import { sectionStyles } from './SearchSection';

export interface SearchSectionProps extends VariantProps<typeof sectionStyles> {
  title: string;
  queryKey: string;
  fetchFn: () => Promise<WorkData[]>;
  type: 'work' | 'author';
  hasMoreLink?: boolean;
  variant: CardVariant;
  keyword?: string;
}
