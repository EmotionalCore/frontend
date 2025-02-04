import z from 'zod';

const dummyUsername = ['username1', 'username2', 'username3', 'username4'];
const dummyEmail = ['q1@qq.qq', 'q2@qq.qq', 'q3@qq.qq', 'q4@qq.qq'];

const passwordPattern = new RegExp(/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/);

export const InputsValidation = z
  .object({
    username: z
      .string()
      .min(1, { message: '닉네임을 입력해주세요.' })
      .max(10)
      .refine((value) => !dummyUsername.includes(value), { message: '중복되지 않는 닉네임으로 변경해주세요.' }),
    email: z
      .string()
      .toLowerCase()
      .email({ message: '이메일을 입력해주세요.' })
      .refine((value) => !dummyEmail.includes(value), { message: '이미 사용 중인 이메일입니다.' }),
    password: z.string().min(8, { message: '비밀번호를 입력해주세요.' }).max(15).regex(passwordPattern),
    passwordConfirm: z.string(),
  })
  .refine((value) => value.password == value.passwordConfirm, {
    message: '비밀번호가 틀립니다',
    path: ['passwordConfirm'],
  });
