'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Inputs from '@/app/_components/_common/Inputs/Inputs';
import { useRouter } from 'next/navigation';

interface FormData {
  search: string;
}

const Search = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      search: '',
    },
  });

  const router = useRouter();

  const currentValues = watch();

  const onSubmit = () => {
    //모든 input이 유효성 검사를 통과했을 때 실행
    router.push(`/search?keyword=${currentValues.search}`);
    console.log('출력', currentValues.search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='search'
          control={control}
          render={({ field }) => (
            <Inputs {...field} name='search' type='search' label='Search' errors={errors} onClick={onSubmit} />
          )}
        />
      </form>
    </div>
  );
};

export default Search;
