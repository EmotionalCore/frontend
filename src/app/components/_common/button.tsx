import Image from 'next/image';
import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'cancel' | 'image';
  imageSrc?: string;
  width: number;
  height: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  imageSrc,
  width,
  height,
}) => {
  const baseStyles = `text-pretendard rounded-lg focus:outline-none transition ease-in-out text-18-400`;

  const variantStyles = {
    primary: 'w-text_bw h-text_bh bg-blue-9 text-white hover:bg-gray-8',
    cancel: 'w-text_bw h-text_bh bg-gray-A text-white hover:bg-gray-8',
    image: 'w-image_bw h-image_bh bg-transparent flex items-center justify-center',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  return (
    <button onClick={onClick} className={combinedStyles}>
      {imageSrc ? (
        <Image src={imageSrc} alt='Button image' className='size-full object-cover' width={width} height={height} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
