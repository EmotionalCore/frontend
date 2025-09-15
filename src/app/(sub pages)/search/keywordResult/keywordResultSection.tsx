import { ContentProps } from '../type';

export const SearchContent = ({ contentTitle, content }: ContentProps) => {
  return (
    <p className='font-SCDream5 text-[1.6rem]'>
      {contentTitle} <span className='text-gray-9'>{content}</span>
    </p>
  );
};
