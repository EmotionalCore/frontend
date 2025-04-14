'use client';

import { useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactModule from './ReactModule';
import dompurify from 'dompurify';
import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
const ReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <Loading type='spinner' />,
  ssr: false,
});
const ReactEditor = () => {
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
  const [content, setContent] = useState<string>('');
  const sanitizer = dompurify.sanitize;

  const modules = useMemo(
    () => ({
      toolbar: {
        container: '#toolBar',
      },
    }),
    []
  );

  return (
    <div>
      <div id='toolBar'>
        <ReactModule />
      </div>
      <ReactQuill theme='snow' modules={modules} formats={formats} style={{ height: '948px', width: '1200px' }} />
    </div>
  );
};

export default ReactEditor;
