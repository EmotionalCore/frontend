import z from 'zod';
export const InputsValidation = z.object({
  nickname: z.string().min(1).max(10, '10자이내'),
  email: z.string().email('이메일 형식이 아닙니다'),
  password: z.string().min(8).max(15, '8~15자이내'),
  passwordConfirm: z.string().min(8).max(15, '8~15자이내'),
  isover14: z.boolean().refine((value) => value === true, { message: '14세 이상만 가능합니다' }),
  search: z.string(),
});
