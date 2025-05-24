'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Tag {
  label: string;
}

interface HashtagInputProps {
  onChange: (tags: string[]) => void;
}

const MAX_TAGS = 8;
const MAX_LENGTH = 8;

const HashtagInput = ({ onChange }: HashtagInputProps) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    onChange(tags.map((tag) => tag.label));
  }, [tags, onChange]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmed = inputValue.trim();
      if (
        trimmed &&
        trimmed.length <= MAX_LENGTH &&
        !tags.some((tag) => tag.label === trimmed) &&
        tags.length < MAX_TAGS
      ) {
        setTags([...tags, { label: trimmed }]);
        setInputValue('');
      }
    }
  };

  const removeTag = (label: string) => {
    setTags(tags.filter((tag) => tag.label !== label));
  };

  const visibleTags = tags.slice(0, 3);
  const hiddenTags = tags.slice(3);

  return (
    <div className='flex flex-col'>
      <label className='pb-[1.5rem] font-SCDream2 text-20-500 text-black-2'>해시태그</label>
      <div className='relative flex min-h-[8.2rem] w-full items-center gap-[1rem] rounded-[1rem] border border-gray-B p-[2rem]'>
        {visibleTags.map((tag) => (
          <div
            key={tag.label}
            className='flex items-center gap-2 rounded-[1rem] border border-gray-B bg-gray-FA px-4 py-2 font-SCDream1 text-16-500 text-black-2'
          >
            <span className='w-[5rem]'>{tag.label}</span>
            <button type='button' onClick={() => removeTag(tag.label)}>
              <X size={16} />
            </button>
          </div>
        ))}

        {hiddenTags.length > 0 && (
          <div className='group relative'>
            <div className='cursor-pointer rounded-[1rem] border border-gray-B px-4 py-2 font-SCDream1 text-16-500 text-gray-700'>
              +{hiddenTags.length}...
            </div>
            <div className='absolute left-0 top-full z-10 hidden flex-col gap-2 rounded-[0.8rem] border border-gray-B bg-white-F p-4 text-black-2 shadow-lg group-hover:flex'>
              {hiddenTags.map((tag) => (
                <div
                  key={tag.label}
                  className='flex items-center gap-2 rounded-[1rem] border border-gray-B px-3 py-1 font-SCDream1 text-14-500'
                >
                  <span className='w-[10rem]'>{tag.label}</span>
                  <button type='button' onClick={() => removeTag(tag.label)}>
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {tags.length < MAX_TAGS && (
          <input
            type='text'
            value={inputValue}
            maxLength={MAX_LENGTH}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className='w-full border-none font-SCDream1 text-18-500 outline-none placeholder:text-gray-400'
            placeholder='태그 입력 후 Enter'
          />
        )}

        <p className='absolute right-[3rem] font-SCDream1 text-16-500'>{tags.length}/8</p>
      </div>
      <p className='pt-[1.8rem] font-SCDream1 text-16-200'>필수 3개 입력해 주세요.(최대 8개)</p>
    </div>
  );
};

export default HashtagInput;
