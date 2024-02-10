import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Layout } from '@/components/Layout'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'fractal tech blog | 地方エンジニアの技術ブログ',
  description:
    'フルリモートで働く地方エンジニアの技術ブログです。Next.js, Python, 機械学習を中心にご紹介します。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    title: 'fractal tech blog | 地方エンジニアの技術ブログ',
    description:
      'フルリモートで働く地方エンジニアの技術ブログです。Next.js, Python, 機械学習を中心にご紹介します。',
    images: [
      {
        url: 'https://fractal-tech.assets.newt.so/v1/de924992-aca0-4f4f-bb56-12aa888ddfbe/tech-blog-cover.png',
      },
    ],
    url: 'https://www.fractalblog.com/',
    siteName: 'fractal tech blog',
  },
  metadataBase: new URL('https://www.fractalblog.com/'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <Layout>
          <Suspense>{children} </Suspense>
        </Layout>
      </body>
    </html>
  )
}
