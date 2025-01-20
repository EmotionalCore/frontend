import Image from 'next/image';
import { cn } from '@/app/utils/cn';
import { CardProps, CardsProps, ImageSizeMap } from './type';

const imageSizeStyles: ImageSizeMap = {
  default: {
    width: '17.4rem',
    height: '25.6rem',
  },
  row: {
    width: '11rem',
    height: '16.6rem',
  },
};

const Card = ({ data, className }: CardProps) => {
  const imageStyle = imageSizeStyles[data.type || 'default'];

  return (
    <div
      className={cn(
        'flex rounded-lg sm:w-full',
        data.type === 'row' ? 'flex-row items-center gap-4' : 'flex-col gap-2',
        'transition-all duration-200 hover:scale-105',
        className
      )}
    >
      <div
        className='relative overflow-hidden rounded-lg'
        style={{
          width: imageStyle.width,
          height: imageStyle.height,
          flexShrink: 0,
        }}
      >
        <Image
          src={data.coverImageUrl}
          alt={data.title || data.name}
          fill
          className='object-cover'
          sizes={`(max-width: 768px) 100vw, ${imageStyle.width}`}
          priority
        />
      </div>
      <div className={cn('flex flex-col', data.type === 'row' ? 'flex-1 gap-1' : 'gap-2 px-1')}>
        <h3 className='line-clamp-2 text-14-500 text-black-2'>{data.title || data.name}</h3>
        {data.type === 'row' && data.description && (
          <p className='line-clamp-2 text-12-400 text-gray-6'>{data.description}</p>
        )}
        <p className='text-12-400 text-gray-9'>{data.name}</p>
      </div>
    </div>
  );
};

const Cards = ({ cards, className }: CardsProps) => {
  return (
    <div className={cn('flex flex-wrap gap-4', 'md:gap-3 sm:gap-2', className)}>
      {cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default Cards;
