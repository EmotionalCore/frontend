import Link from 'next/link';
import { TagButtonProps } from '../../../../mock/page/main/tags/type';

const TagButton = ({ tag }: TagButtonProps) => (
  <Link
    href={`board/keyword=${tag}`}
    className='rounded-[1rem] border border-gray-B px-[2rem] py-[2.2rem] transition-colors hover:border-blue-0 hover:bg-blue-C hover:text-blue-0'
  >
    <span className='font-SCDream5 text-16-500'>{tag}</span>
  </Link>
);

export default TagButton;
