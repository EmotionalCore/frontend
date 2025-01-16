import z from 'zod';

const dummyNickname = ['nickname1', 'nickname2', 'nickname3', 'nickname4'];
const dummyEmail = ['q1@qq.qq', 'q2@qq.qq', 'q3@qq.qq', 'q4@qq.qq'];

const passwordPattern = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/);

export const InputsValidation = z
  .object({
    nickname: z
      .string()
      .min(1, { message: '닉네임을 입력해주세요.' })
      .max(10)
      .refine((value) => !dummyNickname.includes(value), { message: '중복되지 않는 닉네임으로 변경해주세요.' }),
    email: z
      .string()
      .toLowerCase()
      .email({ message: '이메일을 입력해주세요.' })
      .refine((value) => !dummyEmail.includes(value), { message: '이미 사용 중인 이메일입니다.' }),
    password: z
      .string()
      .min(8, { message: '비밀번호를 입력해주세요.' })
      .max(15)
      .regex(passwordPattern, { message: '' }),
    passwordConfirm: z.string().min(8, { message: '' }).max(15),
    search: z.string().min(1, { message: '검색어를 입력해주세요.' }),
  })
  .refine((value) => value.password == value.passwordConfirm, {
    message: '비밀번호가 틀립니다',
    path: ['passwordConfirm'],
  });
