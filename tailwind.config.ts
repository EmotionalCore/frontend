import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // => @media (max-width: 1119px) { ... }
      md: { max: '1480px' }, // tablet

      // => @media (max-width: 743px) { ... }
      sm: { max: '768px' }, // mobile
    },
    fontSize: {
      // <p class="text-12-400 ...">The quick brown fox ...</p> 처럼 사용
      '10-200': [
        '1rem',
        {
          fontWeight: '200',
        },
      ],
      '10-400': [
        '1rem',
        {
          fontWeight: '400',
        },
      ],
      //fontsize: 12px
      '12-400': [
        '1.2rem',
        {
          fontWeight: '400',
        },
      ],
      '12-500': [
        '1.2rem',
        {
          fontWeight: '500',
        },
      ],
      '12-600': [
        '1.2rem',
        {
          fontWeight: '600',
        },
      ],
      '12-700': [
        '1.2rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 14px
      '14-200': [
        '1.4rem',
        {
          fontWeight: '200',
        },
      ],
      '14-400': [
        '1.4rem',
        {
          fontWeight: '400',
        },
      ],
      '14-500': [
        '1.4rem',
        {
          fontWeight: '500',
        },
      ],

      //fontsize: 16px
      '16-200': [
        '1.6rem',
        {
          fontWeight: '200',
        },
      ],
      '16-400': [
        '1.6rem',
        {
          fontWeight: '400',
        },
      ],
      '16-500': [
        '1.6rem',
        {
          fontWeight: '500',
        },
      ],
      '16-600': [
        '1.6rem',
        {
          fontWeight: '600',
        },
      ],

      //fontsize: 18px

      '18-200': [
        '1.8rem',
        {
          fontWeight: '200',
        },
      ],
      '18-400': [
        '1.8rem',
        {
          fontWeight: '400',
        },
      ],
      '18-500': [
        '1.8rem',
        {
          fontWeight: '500',
        },
      ],
      '18-700': [
        '1.8rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 20px
      '20-500': [
        '2rem',
        {
          fontWeight: '500',
        },
      ],
      '20-600': [
        '2rem',
        {
          fontWeight: '600',
        },
      ],
      '20-700': [
        '2rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 22px
      '22-500': [
        '2.2rem',
        {
          fontWeight: '500',
        },
      ],
      '22-700': [
        '2.2rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 24px
      '24-500': [
        '2.4rem',
        {
          fontWeight: '500',
        },
      ],
      '24-600': [
        '2.4rem',
        {
          fontWeight: '600',
        },
      ],
      '24-700': [
        '2.4rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 28px
      '28-700': [
        '2.8rem',
        {
          fontWeight: '700',
        },
      ],
      //fontsize: 30px
      '30-400': [
        '3rem',
        {
          fontWeight: '400',
        },
      ],
      //fontsize: 32px
      '32-500': [
        '3.2rem',
        {
          fontWeight: '500',
        },
      ],

      //fontsize: 36px
      '36-700': [
        '3.6rem',
        {
          fontWeight: '700',
        },
      ],
      //fontsize: 38px
      '38-400': [
        '3.8rem',
        {
          fontWeight: '400',
        },
      ],
      //fontsize: 40px
      '40-700': [
        '4rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 42px
      '42-700': [
        '4.2rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 48px
      '48-700': [
        '4.8rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 56px
      '56-700': [
        '5.6rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 70px
      '70-700': [
        '7rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 76px
      '76-700': [
        '7.6rem',
        {
          fontWeight: '700',
        },
      ],

      //fontsize: 90px
      '90-700': [
        '9rem',
        {
          fontWeight: '700',
        },
      ],
    },
    extend: {
      fontFamily: {
        // 예시) <p className="text-pretendard">
        SCDream1: ['var(--font-SCDream1)'],
        SCDream2: ['var(--font-SCDream2)'],
        SCDream3: ['var(--font-SCDream3)'],
        SCDream4: ['var(--font-SCDream4)'],
        SCDream5: ['var(--font-SCDream5)'],
        SCDream6: ['var(--font-SCDream6)'],
        SCDream7: ['var(--font-SCDream7)'],
        SCDream8: ['var(--font-SCDream8)'],
        SCDream9: ['var(--font-SCDream9)'],
      },
      colors: {
        // 예시) <p className="bg-blue-9">
        white: {
          F: '#FFF',
        },
        black: {
          2: '#222',
          0: '#000',
        },
        blue: {
          0: '#067DFD',
          '00': '#0062E5',
          B: '#BDBDBD',
          C: '#CBE8FF',
          E: '#EEF7FF',
          3: '#329CFF',
        },
        gray: {
          E: '#E0E0E0',
          EE: '#EEE',
          9: '#9E9E9E',
          F: '#F5F5F5',
          6: '#616161',
          B: '#BDBDBD',
          FA: '#FAFAFA',
          5: '#575757',
        },
        red: {
          E: '#EF2B2A',
        },
        yellow: {
          F: '#FFE711',
        },
        green: {
          0: '#04C73C',
        },
      },
    },
  },
  plugins: [],
};
export default config;
