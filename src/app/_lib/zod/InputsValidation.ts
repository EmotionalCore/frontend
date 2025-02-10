import z from 'zod';
const passwordPattern = new RegExp(/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/);

export const InputsSignUpValidation = z
  .object({
    username: z.string().min(1, { message: '닉네임을 입력해주세요.' }).max(10),
    email: z.string().toLowerCase().email({ message: '이메일을 입력해주세요.' }),
    password: z.string().min(8, { message: '비밀번호를 입력해주세요.' }).max(15).regex(passwordPattern),
    passwordConfirm: z.string(),
  })
  .refine((value) => value.password == value.passwordConfirm, {
    message: '비밀번호가 틀립니다',
    path: ['passwordConfirm'],
  });
export const InputsSignInValidation = z.object({
  email: z.string().toLowerCase().email({ message: '이메일을 입력해주세요.' }),
  password: z.string().min(8, { message: '비밀번호를 입력해주세요.' }).max(15).regex(passwordPattern),
});
