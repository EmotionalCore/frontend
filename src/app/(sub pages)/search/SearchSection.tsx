import { cva } from 'class-variance-authority';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Cards from '@/app/_components/domain/main/works/sections/carousel/navButton/Cards';
import { WorkData } from '@/api/works/type';
import Loading from '@/app/loading';
import { SearchSectionProps } from './type';

export const sectionStyles = cva('mt-[9.16rem] flex w-[120rem]  flex-col', {
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

const SearchSection = ({ keyword, title, queryKey, fetchFn, hasMoreLink = false, variant }: SearchSectionProps) => {
  const { data, isLoading } = useQuery<WorkData[], Error>({
    queryKey: ['author'],
    queryFn: fetchFn,
  });

  return (
    <section className={sectionStyles({ hasMoreLink })}>
      <div className={headerStyles({ hasMoreLink })}>
        <h2 className='font-SCDream5 text-32-500'>신규 작가</h2>
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

export default SearchSection;
