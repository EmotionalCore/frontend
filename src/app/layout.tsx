import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const LaundryGothicOTF = localFont({
  src: './fonts/런드리고딕 Regular.woff',
  display: 'swap',
  variable: '--font-laundry',
})

export const metadata: Metadata = {
  title: '감성코어',
  description: '시 및 소설 웹 플랫폼입니다.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='kr' className={`${pretendard.variable} ${LaundryGothicOTF.variable}`}>
      <body className={`${pretendard.className} `}>{children}</body>
    </html>
  )
}
