import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

export const CarouselNavButton = ({ direction, onClick }: CarouselNavButtonProps) => (
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
