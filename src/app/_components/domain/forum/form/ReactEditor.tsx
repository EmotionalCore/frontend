'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import dompurify from 'dompurify';
import Loading from '@/app/loading';
import ReactModule from './ReactModule';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <Loading type='spinner' />,
  ssr: false,
});

interface ReactEditorProps {
  onChange: (safeHtml: string) => void;
}

const ReactEditor = ({ onChange }: ReactEditorProps) => {
  const [content, setContent] = useState<string>('');

  const formats: string[] = [
    'header',
    'size',
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'background',
    'align',
    'script',
    'code-block',
    'clean',
  ];

  const modules = {
    toolbar: {
      container: '#toolBar',
    },
  };

  const handleChange = (value: string) => {
    const cleanHtml = dompurify.sanitize(value);
    setContent(cleanHtml);
    onChange(cleanHtml);
  };

  return (
    <div>
      <div id='toolBar'>
        <ReactModule />
      </div>
      <ReactQuill
        theme='snow'
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        style={{ height: '948px', width: '1200px' }}
        placeholder='작품 내용을 입력하세요'
      />
    </div>
  );
};

export default ReactEditor;
