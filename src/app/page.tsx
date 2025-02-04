import React from 'react';
import Buttons from './components/_common/Buttons/Button';

const page = () => {
  return (
    <main className='flex h-[100rem] flex-col items-center justify-center'>
      메인
      <Buttons intent='whiteBorder' size='xxs'>
        태그 연습
      </Buttons>
      <br />
      <Buttons intent='red' size='xs'>
        태그 연습
      </Buttons>
      <br />
      <Buttons intent='primary' size='sm'>
        태그 연습
      </Buttons>
      <br />
      <Buttons intent='skyblue' size='md'>
        태그 연습
      </Buttons>
      <br />
      <Buttons intent='primary' size='lg'>
        확인
      </Buttons>
      <br />
      <Buttons intent='green' size='mdLogIn'>
        태그 연습
      </Buttons>
    </main>
  );
};

export default page;
