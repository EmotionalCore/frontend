import { VariantProps } from 'class-variance-authority';
import { sectionStyles } from './WorkSection';
import { WorkData } from '@/app/api/works/type';
import { CardVariant } from '@/app/components/_common/Cards/type';

export interface WorkSectionProps extends VariantProps<typeof sectionStyles> {
  title: string;
  queryKey: string;
  fetchFn: () => Promise<WorkData[]>;
  type: 'work' | 'author';
  hasMoreLink?: boolean;
  variant: CardVariant;
  keyword?: string;
}
