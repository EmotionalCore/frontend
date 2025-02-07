'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/app/utils/cn';
import { CardItemProps, CardLayoutProps, CarouselNavButtonProps } from './type';
import Link from 'next/link';

const CardItem = ({ data, variant, index }: CardItemProps) => {
  const imageStyles = {
    best: 'w-[17.5rem] h-[25.6rem]',
    monthly: 'w-[38.7rem] h-[30.8rem]',
    recommend: 'w-[28.6rem] h-[40.3rem]',
    poem: 'w-[11rem] h-[16.6rem]',
    novel: 'w-[11rem] h-[16.6rem]',
    webtoon: 'w-[17.5rem] h-[25.6rem]',
  };

  const isHorizontalLayout = variant === 'novel' || variant === 'poem';

  const containerStyles = cn(
    'flex w-[38.7rem] gap-[2rem] transition-transform duration-300 ease-in-out hover:scale-105 ',
    isHorizontalLayout ? 'bg-blue-C p-4 rounded-lg' : 'hover:scale-[1.02]'
  );

  const contentStyles = cn('space-y-2', isHorizontalLayout ? 'flex-1' : 'mt-4');

  return (
    <Link href={`board/works/detail/${data.id}`} className={containerStyles}>
      <div className={cn(isHorizontalLayout ? 'flex gap-4' : 'block')}>
        <div className={cn('relative overflow-hidden rounded-lg shadow-md', imageStyles[variant])}>
          <Image
            src={`https://emotioncores.com${data.coverImageUrl}`}
            alt={`${data.title} image`}
            fill
            className='object-cover'
            priority
          />
          {variant === 'best' && typeof index === 'number' && (
            <div className='absolute left-2 top-2 flex w-[3.2rem] items-center justify-center rounded-md bg-blue-500 p-[1rem] px-2 py-1 font-SCDream5 text-16-500 text-white-F'>
              {index + 1}
            </div>
          )}
        </div>
        <div className={contentStyles}>
          <h3
            className={cn(
              'line-clamp-2 font-SCDream5 text-16-500 text-black-2',
              variant === 'recommend' ? 'text-lg' : 'text-base'
            )}
          >
            {data.title}
          </h3>
          {data.authorName && <p className='text-16-200 font-SCDream2 text-gray-6'>{data.authorName}</p>}
          {data.description && (
            <p className='text-14-200 mt-2 line-clamp-2 font-SCDream2 text-black-2'>{data.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

const CarouselNavButton = ({ direction, onClick }: CarouselNavButtonProps) => (
  <button
    onClick={onClick}
    className='bg-white/80 hover:bg-white absolute top-1/2 z-10 -translate-y-1/2 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110'
    style={{
      [direction === 'prev' ? 'left' : 'right']: '-20px',
    }}
  >
    {direction === 'prev' ? <ChevronLeft className='size-6' /> : <ChevronRight className='size-6' />}
  </button>
);

const Cards = ({ data, variant, className }: CardLayoutProps) => {
  const maxItems = {
    best: 5,
    monthly: 4,
    recommend: 3,
    poem: 3,
    novel: 3,
    webtoon: 6,
  };

  const shouldUseCarousel = variant === 'monthly' && data.length > 3;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const limitedData = data.slice(0, maxItems[variant]);

  const gridStyles = {
    best: 'flex flex-row gap-[4.6rem]',
    monthly: 'flex gap-[2rem]',
    recommend: 'flex gap-[2rem]',
    poem: 'flex flex-row gap-[2rem]',
    novel: 'flex flex-row gap-[2rem]',
    webtoon: 'flex flex-row gap-[2rem]',
  };

  if (!shouldUseCarousel) {
    return (
      <div className={cn('grid', gridStyles[variant], className)}>
        {limitedData.map((item, index) => (
          <CardItem key={item.id} data={item} variant={variant} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className='relative w-full px-6'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-6'>
          {data.map((item) => (
            <div key={item.id} className='flex-[0_0_auto]' style={{ width: '25%' }}>
              <CardItem data={item} variant={variant} />
            </div>
          ))}
        </div>
      </div>
      <CarouselNavButton direction='prev' onClick={scrollPrev} />
      <CarouselNavButton direction='next' onClick={scrollNext} />
    </div>
  );
};

export default Cards;
