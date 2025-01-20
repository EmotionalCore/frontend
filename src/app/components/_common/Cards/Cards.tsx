import Image from 'next/image';
import { cn } from '@/app/utils/cn';
import { cva } from 'class-variance-authority';
import type { CardProps, CardsProps, ImageSizeMap, CardLayoutType, CardDataProps } from './type';

const Card = ({ data, layout = 'verticalDefault', className }: CardProps) => {
  const cardVariants = cva('flex rounded-lg sm:w-full transition-all duration-200 hover:scale-105', {
    variants: {
      layout: {
        verticalDefault: 'flex-col gap-2',
        verticalLarge: 'flex-col gap-2',
        horizontalCard: 'flex-row items-center gap-4',
        featuredCard: 'flex-col gap-3',
        profileCard: 'flex-col gap-2',
      },
    },
    defaultVariants: {
      layout: 'verticalDefault',
    },
  });

  const contentVariants = cva('flex flex-col', {
    variants: {
      layout: {
        verticalDefault: 'gap-2 px-1',
        verticalLarge: 'gap-2 px-1',
        horizontalCard: 'flex-1 gap-1',
        featuredCard: 'gap-2 px-2',
        profileCard: 'gap-1 px-1',
      },
    },
    defaultVariants: {
      layout: 'verticalDefault',
    },
  });

  const imageSizeStyles: ImageSizeMap = {
    verticalDefault: {
      width: '17.5rem',
      height: '25.6rem',
    },
    verticalLarge: {
      width: '21rem',
      height: '30.8rem',
    },
    horizontalCard: {
      width: '11rem',
      height: '16.6rem',
    },
    featuredCard: {
      width: '28.6rem',
      height: '40.3rem',
    },
    profileCard: {
      width: '20rem',
      height: '20rem',
    },
  };

  const getImageSize = (cardLayout: CardLayoutType) => {
    return imageSizeStyles[cardLayout];
  };

  const getImageAltText = (data: CardDataProps) => {
    return data.title || data.name || '작품 이미지';
  };

  const getImageSizesAttribute = (width: string) => ({
    sizes: `(max-width: 768px) 100vw, ${width}`,
    fill: true,
    className: cn('object-cover', layout === 'profileCard' && 'rounded-full'),
    priority: true,
  });

  const imageSize = getImageSize(layout);
  const altText = getImageAltText(data);
  const imageSizeAttributes = getImageSizesAttribute(imageSize.width);

  return (
    <div className={cn(cardVariants({ layout }), className)}>
      <div
        className={cn('relative overflow-hidden', layout === 'profileCard' ? 'rounded-full' : 'rounded-lg')}
        style={{
          width: imageSize.width,
          height: imageSize.height,
          flexShrink: 0,
        }}
      >
        <Image src={data.coverImageUrl} alt={altText} {...imageSizeAttributes} />
      </div>
      <div className={contentVariants({ layout })}>
        <h3 className={cn('line-clamp-2', layout === 'featuredCard' ? 'text-16-500' : 'text-14-500', 'text-black-2')}>
          {data.title || data.name}
        </h3>
        {layout === 'featuredCard' && data.description && (
          <p className='line-clamp-2 text-14-400 text-gray-6'>{data.description}</p>
        )}
        <p className={cn(layout === 'featuredCard' ? 'text-14-400' : 'text-12-400', 'text-gray-9')}>{data.name}</p>
      </div>
    </div>
  );
};

const Cards = ({ cards, layout = 'verticalDefault', className }: CardsProps) => {
  return (
    <div
      className={cn(
        'flex flex-wrap',
        layout === 'featuredCard' ? 'gap-6 md:gap-4 sm:gap-3' : 'gap-4 md:gap-3 sm:gap-2',
        className
      )}
    >
      {cards.map((card) => (
        <Card key={card.id} data={card} layout={layout} />
      ))}
    </div>
  );
};

export default Cards;

/*
// MainPage.tsx
import Cards from '@/components/Cards';
import { useQuery } from '@tanstack/react-query';
import { getWorksApi } from '@/api/works';

const MainPage = () => {
  // API 호출
  const { data: bestWorks } = useQuery({
    queryKey: ['todayBest'],
    queryFn: () => getWorksApi.getBestWorks()
  });

  const { data: recommendedNovels } = useQuery({
    queryKey: ['recommendNovels'],
    queryFn: () => getWorksApi.getRecommendedWorks('novel')
  });

  const { data: recommendedPoems } = useQuery({
    queryKey: ['recommendPoems'],
    queryFn: () => getWorksApi.getRecommendedWorks('poem')
  });

  const { data: recommendedWebtoons } = useQuery({
    queryKey: ['recommendWebtoons'],
    queryFn: () => getWorksApi.getRecommendedWorks('webtoon')
  });

  const { data: monthlyPopular } = useQuery({
    queryKey: ['monthlyPopular'],
    queryFn: () => getWorksApi.getMonthlyPopular()
  });

  const { data: bestAuthors } = useQuery({
    queryKey: ['bestAuthors'],
    queryFn: () => getWorksApi.getBestAuthors()
  });

  return (
    <main className="px-4 py-8 space-y-12">
      /* 오늘의 베스트 
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-20-700">오늘의 베스트</h2>
          <button className="text-14-400 text-gray-6">더보기</button>
        </div>
        {bestWorks?.data && (
          <Cards 
            cards={bestWorks.data} 
            layout="verticalDefault" 
          />
        )}
      </section>

      /* 추천 소설 
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-20-700">추천 소설</h2>
          <button className="text-14-400 text-gray-6">더보기</button>
        </div>
        {recommendedNovels?.data && (
          <Cards 
            cards={recommendedNovels.data} 
            layout="horizontalCard" 
          />
        )}
      </section>

      /* 추천 시 
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-20-700">추천 시</h2>
          <button className="text-14-400 text-gray-6">더보기</button>
        </div>
        {recommendedPoems?.data && (
          <Cards 
            cards={recommendedPoems.data} 
            layout="horizontalCard" 
          />
        )}
      </section>

      /* 추천 웹툰 *
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-20-700">추천 웹툰</h2>
          <button className="text-14-400 text-gray-6">더보기</button>
        </div>
        {recommendedWebtoons?.data && (
          <Cards 
            cards={recommendedWebtoons.data} 
            layout="verticalDefault" 
          />
        )}
      </section>

      /* 이달의 인기작품 
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-20-700">이달의 인기작품</h2>
          <button className="text-14-400 text-gray-6">더보기</button>
        </div>
        {monthlyPopular?.data && (
          <Cards 
            cards={monthlyPopular.data} 
            layout="featuredCard" 
          />
        )}
      </section>

      /* 이달의 우수작가 
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-20-700">이달의 우수작가</h2>
          <button className="text-14-400 text-gray-6">더보기</button>
        </div>
        {bestAuthors?.data && (
          <Cards 
            cards={bestAuthors.data} 
            layout="profileCard" 
          />
        )}
      </section>
    </main>
  );
};

// BoardPage.tsx
const BoardPage = () => {
  const { data: boardWorks } = useQuery({
    queryKey: ['boardWorks'],
    queryFn: () => getWorksApi.getWorksByType('webtoon')  
  });

  return (
    <div className="px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-20-700">웹툰</h2>
        <div className="flex gap-2">
        </div>
      </div>
      {boardWorks?.data && (
        <Cards 
          cards={boardWorks.data} 
          layout="verticalLarge" 
        />
      )}
    </div>
  );
};

// 각 레이아웃별 사이즈 및 용도
/*
1. verticalDefault (17.5rem x 25.6rem)
  - 메인 페이지의 오늘의 베스트
  - 메인 페이지의 추천 웹툰

2. verticalLarge (21rem x 30.8rem)
  - 게시판 페이지의 작품 목록

3. horizontalCard (11rem x 16.6rem)
  - 메인 페이지의 추천 소설
  - 메인 페이지의 추천 시

4. featuredCard (28.6rem x 40.3rem)
  - 메인 페이지의 이달의 인기작품

5. profileCard (20rem x 20rem)
  - 메인 페이지의 이달의 우수작가
*/
