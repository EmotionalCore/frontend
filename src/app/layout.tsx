import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './lib/react-query/providers';

const SCDream1 = localFont({
  src: './fonts/SCDream1.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream1',
});
const SCDream2 = localFont({
  src: './fonts/SCDream2.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream2',
});
const SCDream3 = localFont({
  src: './fonts/SCDream3.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream3',
});
const SCDream4 = localFont({
  src: './fonts/SCDream4.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream4',
});
const SCDream5 = localFont({
  src: './fonts/SCDream5.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream5',
});
const SCDream6 = localFont({
  src: './fonts/SCDream6.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream6',
});
const SCDream7 = localFont({
  src: './fonts/SCDream7.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream7',
});
const SCDream8 = localFont({
  src: './fonts/SCDream8.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream8',
});
const SCDream9 = localFont({
  src: './fonts/SCDream9.otf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-SCDream9',
});

const fonts = [SCDream1, SCDream2, SCDream3, SCDream4, SCDream5, SCDream6, SCDream7, SCDream8, SCDream9];

const fontVariables = fonts.map((font) => font.variable).join(' ');
const fontClassNames = fonts.map((font) => font.className).join(' ');

export const metadata: Metadata = {
  title: '감성코어',
  description: '시 및 소설 웹 플랫폼입니다.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='kr' className={fontVariables}>
      <Providers>
        <body className={fontClassNames}>{children}</body>
      </Providers>
    </html>
  );
}
