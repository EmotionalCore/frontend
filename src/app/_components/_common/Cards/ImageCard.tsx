import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/app/_utils/cn';
import { ImageCardProps } from './type';
import { imageCardVariants } from './styles';

export const ImageCard = ({ src, alt, variant, index, href, className }: ImageCardProps) => {
  const content = (
    <div className={cn(imageCardVariants({ variant }), className)}>
      <Image src={src} alt={alt} fill className='object-cover' priority />
      {variant === 'best' && typeof index === 'number' && (
        <div className='absolute left-2 top-2 flex w-[3.2rem] items-center justify-center rounded-md bg-blue-500 p-[1rem] px-2 py-1 font-SCDream5 text-16-500 text-white-F'>
          {index + 1}
        </div>
      )}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};
