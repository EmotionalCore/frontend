import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CardItem } from './CardItem';

import { cn } from '@/app/_utils/cn';
import { CarouselNavButton } from './NavButton';
import { gridVariants } from '@/app/_components/_common/Cards/styles';
import { CardLayoutProps } from './type';

export const Cards = ({ data, variant, className }: CardLayoutProps) => {
  const maxItems = {
    best: 5,
    monthly: 4,
    recommend: 3,
    poem: 3,
    novel: 3,
    webtoon: 6,
  };

  const shouldUseCarousel = ['monthly'].includes(variant) && data.length > 3;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false, // 루프 비활성화 (처음/끝에서 버튼 동작 제어)
    slidesToScroll: 3, // 한 번에 3개씩 스크롤
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // 버튼 표시/숨김 로직
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      if (emblaApi.canScrollPrev()) {
        setShowPrevBtn(true);
      } else {
        setShowPrevBtn(false);
      }
      if (emblaApi.canScrollNext()) {
        setShowNextBtn(true);
      } else {
        setShowNextBtn(false);
      }
    };

    emblaApi.on('select', updateButtons);
    emblaApi.on('init', updateButtons);
    updateButtons();

    return () => {
      emblaApi.off('select', updateButtons);
      emblaApi.off('init', updateButtons);
    };
  }, [emblaApi]);

  const limitedData = data.slice(0, maxItems[variant]);

  if (!shouldUseCarousel) {
    return (
      <div className={cn(gridVariants({ variant }), className)}>
        {limitedData.map((item, id) => (
          <CardItem key={item.id} data={item} variant={variant} id={id} />
        ))}
      </div>
    );
  }

  return (
    <div className='relative w-full px-6'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-6'>
          {/* 카드 사이 간격 24px (6rem) */}
          {data.map((item) => (
            <div key={item.id} className='flex-[0_0_33.333%]'>
              {/* 3개 카드씩 표시, 33.333%로 설정 */}
              <CardItem data={item} variant={variant} />
            </div>
          ))}
        </div>
      </div>
      {showPrevBtn && <CarouselNavButton direction='prev' onClick={scrollPrev} />}
      {showNextBtn && <CarouselNavButton direction='next' onClick={scrollNext} />}
    </div>
  );
};

export default Cards;
