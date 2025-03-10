'use client';

import { useForm } from 'react-hook-form';
import Inputs from '@/app/_components/_common/Inputs/Inputs';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputsValidation } from '@/app/_lib/zod/InputsValidation';

interface FormData {
  search: string;
}

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(InputsValidation),
    defaultValues: {
      search: '',
    },
  });

  const currentValues = watch();

  const handleError = () => {
    //1개 이상의 input이 유효성 검사를 통과하지 못했을 때 실행
    console.log(currentValues, errors);
  };
  const onSubmit = (data: FormData) => {
    //모든 input이 유효성 검사를 통과했을 때 실행
    console.log(currentValues);
  };

  return (
    <div>
      <Inputs name='search' type='search' label='' register={register('search')} helpText={''} errors={errors} />
    </div>
  );
};

export default Search;
