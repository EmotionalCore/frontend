import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils/cn';
import React from 'react';
import Image from 'next/image';
import { ProfileProps } from './type';

export const ProfileVariants = cva('', {
  variants: {
    size: {
      sm: 'flex size-[4rem] rounded-[1.25rem] object-cover',
      md: 'flex size-[7.2rem] rounded-[4.5rem] object-cover',
      lg: 'flex size-[14rem] rounded-[8.75rem] object-cover',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// size에 따른 width, height 매핑
const sizeMap = {
  sm: 40,
  md: 72,
  lg: 140,
} as const;

const Profile = ({ size, src, alt, ...props }: ProfileProps) => {
  const dimension = sizeMap[size]; // size 값에 따라 width, height 자동 설정

  return (
    <img
      src={src}
      alt={alt}
      width={dimension} // 자동으로 설정된 크기 적용
      height={dimension}
      className={cn(ProfileVariants({ size }))}
      {...props}
    />
  );
};

export default Profile;
