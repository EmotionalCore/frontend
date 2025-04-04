import { cva } from 'class-variance-authority';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { WorkSectionProps } from './type';

import { WorkData } from '@/api/works/type';
import Cards from './carousel/navButton/Cards';
import Loading from '@/app/loading';

export const sectionStyles = cva('mt-[9.16rem] flex w-[120rem]   flex-col', {
  variants: {
    hasMoreLink: {
      true: '',
      false: '',
    },
  },
});

const headerStyles = cva('mb-4 flex items-center', {
  variants: {
    hasMoreLink: {
      true: 'w-full justify-between',
      false: '',
    },
  },
});

const WorkSection = ({ keyword, title, queryKey, fetchFn, hasMoreLink = false, variant }: WorkSectionProps) => {
  const { data, isLoading } = useQuery<WorkData[], Error>({
    queryKey: [queryKey],
    queryFn: fetchFn,
    staleTime: 60 * 1000,
    retry: 0,
  });

  return (
    <section className={sectionStyles({ hasMoreLink })}>
      <div className={headerStyles({ hasMoreLink })}>
        <h2 className='font-SCDream5 text-32-500'>{title}</h2>
        {hasMoreLink && (
          <Link href={`/board/${keyword}`} className='font-SCDream5 text-16-500 text-gray-6'>
            더보기
          </Link>
        )}
      </div>
      {isLoading ? <Loading type='skeleton' /> : data && <Cards data={data} variant={variant} />}
    </section>
  );
};

export default WorkSection;
