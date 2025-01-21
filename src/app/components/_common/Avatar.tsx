import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils/cn';
import React from 'react';
import Image from 'next/image';

type Size = 'sm' | 'md' | 'lg';

interface AvatarProps {
  size: Size;
  src: string;
  alt: string;
}

const AvatarVariants = cva('', {
  variants: {
    size: {
      sm: 'flex size-[2.6rem] rounded-[1.25rem] object-cover',
      md: 'flex size-[4.5rem] rounded-[4.5rem] object-cover',
      lg: 'flex size-[8.75rem] rounded-[8.75rem] object-cover',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof AvatarVariants> {
//   children?: React.ReactNode;
// }

const Avatar = ({ size, src, alt, ...props }: AvatarProps) => {
  return <img src={src} alt={alt} className={cn(AvatarVariants({ size }))} {...props} />;
};

export default Avatar;
