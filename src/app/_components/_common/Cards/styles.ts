import { cva } from 'class-variance-authority';

export const imageCardVariants = cva('relative overflow-hidden rounded-lg shadow-md', {
  variants: {
    variant: {
      best: 'w-[17.5rem] h-[25.6rem]',
      monthly: 'w-[38.7rem] h-[30.8rem] ',
      recommend: 'w-[28.6rem] h-[40.3rem]',
      poem: 'w-[11rem] h-[16.6rem]',
      novel: 'w-[11rem] h-[16.6rem]',
      webtoon: 'w-[17.5rem] h-[25.6rem]',
      primary: 'w-[20rem] h-[30rem]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export const gridVariants = cva('grid', {
  variants: {
    variant: {
      best: 'flex flex-row gap-[4.6rem]',
      monthly: 'flex gap-[2rem]',
      recommend: 'flex gap-[2rem]',
      poem: 'flex flex-row gap-[2rem]',
      novel: 'flex flex-row gap-[2rem]',
      webtoon: 'flex flex-row gap-[2rem]',
    },
  },
});

export const cardContainerVariants = cva('flex transition-transform duration-300 ease-in-out hover:scale-105', {
  variants: {
    layout: {
      horizontal: 'p-4 rounded-[0.5rem] border-[0.1rem] border-gray-B gap-[2rem]',
      vertical: 'hover:scale-[1.02]',
    },
  },
  defaultVariants: {
    layout: 'vertical',
  },
});

export const cardContentVariants = cva('flex flex-col justify-center space-y-2', {
  variants: {
    layout: {
      horizontal: 'flex-1',
      vertical: 'mt-4',
    },
  },
  defaultVariants: {
    layout: 'vertical',
  },
});

// CardItem에서 사용되는 스타일 변형
export const cardTitleVariants = cva('line-clamp-2  ', {
  variants: {
    variant: {
      monthly: 'font-SCDream6  text-white-F',
      recommend: 'font-SCDream5  text-black-2',
      best: 'font-SCDream5  text-black-2',
      webtoon: 'font-SCDream5  text-black-2',
      poem: 'font-SCDream5   text-black-2',
      novel: 'font-SCDream5  text-black-2',
    },
  },
  defaultVariants: {
    variant: 'best', // 기본값은 best로 설정
  },
});

export const cardAuthorVariants = cva('', {
  variants: {
    variant: {
      monthly: 'font-SCDream5  text-white-F',
      webtoon: 'font-SCDream2  text-gray-6 ',
      best: 'font-SCDream2  text-gray-6',
      recommend: 'font-SCDream2  text-gray-6',
      poem: 'font-SCDream2  text-gray-6',
      novel: 'font-SCDream2  text-gray-6',
    },
  },
  defaultVariants: {
    variant: 'best', // 기본값은 best로 설정
  },
});

export const cardDescriptionVariants = cva('mt-2 line-clamp-2 font-SCDream2  ', {
  variants: {
    variant: {
      monthly: 'text-white-F',
      best: 'text-black-2',
      recommend: 'text-black-2',
      webtoon: 'text-black-2',
      poem: 'text-black-2',
      novel: 'text-black-2',
    },
  },
  defaultVariants: {
    variant: 'best', // 기본값은 best로 설정
  },
});

export const monthlyCardOverlayVariants = cva(
  'from-black/70 absolute bottom-0 inset-x-0 bg-gradient-to-t to-transparent p-4',
  {
    variants: {
      variant: {
        monthly: '', // monthly variant에만 적용
      },
    },
    defaultVariants: {
      variant: 'monthly',
    },
  }
);
