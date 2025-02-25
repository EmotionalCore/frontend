// app/_components/_common/Cards/CardItem.tsx
import Link from 'next/link';
import { cn } from '@/app/_utils/cn';
import {
  cardContainerVariants,
  cardContentVariants,
  monthlyCardOverlayVariants,
} from '@/app/_components/_common/Cards/styles';
import { CardItemProps } from './type';
import { ImageCard } from '@/app/_components/_common/Cards/ImageCard';

export const CardItem = ({ data, variant, id }: CardItemProps) => {
  const isHorizontalLayout = variant === 'novel' || variant === 'poem';
  const isMonthly = variant === 'monthly';

  //  폰트 적용 안되는 이슈로 인해 Tailwind 클래스 직접 선언 (임시)
  const getTitleClass = () => {
    switch (variant) {
      case 'monthly':
        return 'font-SCDream6 text-24-600 text-white-F line-clamp-2';
      case 'recommend':
        return 'font-SCDream5 text-18-500 text-black-2 line-clamp-2';
      case 'best':
      case 'webtoon':
      case 'poem':
      case 'novel':
      default:
        return 'font-SCDream5 text-16-500 text-black-2 line-clamp-2';
    }
  };

  const getAuthorClass = () => {
    switch (variant) {
      case 'monthly':
        return 'font-SCDream5 text-16-500 text-white-F';
      case 'webtoon':
        return 'font-SCDream2 text-14-200 text-gray-6 leading-[130.415%]';
      case 'best':
      case 'recommend':
      case 'poem':
      case 'novel':
      default:
        return 'font-SCDream2 text-16-200 text-gray-6';
    }
  };

  const getDescriptionClass = () => {
    switch (variant) {
      case 'monthly':
        return 'mt-2 line-clamp-2 font-SCDream2 text-14-200 text-white-F leading-[130.415%]';
      case 'best':
      case 'recommend':
      case 'webtoon':
      case 'poem':
      case 'novel':
      default:
        return 'mt-2 line-clamp-2 font-SCDream2 text-14-200 text-black-2 leading-[130.415%]';
    }
  };

  return (
    <Link
      href={`board/works/detail/${data.id}`}
      className={cn(cardContainerVariants({ layout: isHorizontalLayout ? 'horizontal' : 'vertical' }), 'w-[38.7rem]')}
    >
      <div className={cn(isHorizontalLayout ? 'flex gap-[3rem]' : 'block')}>
        {isMonthly ? (
          // 이달의 인기 작품 & 우수 작가
          <div className='relative w-full'>
            <ImageCard
              src={`https://emotioncores.com${data.coverImageUrl}`}
              alt={`${data.title} image`}
              variant={variant}
              index={id}
            />
            <div className={cn(monthlyCardOverlayVariants({ variant }))}>
              <h3 className={getTitleClass()}>{data.title || data.authorName}</h3>
              {data.title && <p className={getAuthorClass()}>{data.authorName}</p>}
              {data.description && <p className={getDescriptionClass()}>{data.description}</p>}
            </div>
          </div>
        ) : (
          // 다른 모든 카테고리
          <>
            <ImageCard
              src={`https://emotioncores.com${data.coverImageUrl}`}
              alt={`${data.title} image`}
              variant={variant}
              index={id}
            />
            <div className={cardContentVariants({ layout: isHorizontalLayout ? 'horizontal' : 'vertical' })}>
              <h3 className={getTitleClass()}>{data.title}</h3>
              {data.authorName && <p className={getAuthorClass()}>{data.authorName}</p>}
              {data.description && <p className={getDescriptionClass()}>{data.description}</p>}
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
