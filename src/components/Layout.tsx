import Image from 'next/image'
import React, { ReactNode } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Link from 'next/link'
import Menu from './Menu'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header
        className='bg-[#dbdbff] py-4 px-4 lg:px-10 flex justify-center items-center font-mono'
        style={{
          background: 'linear-gradient(-20deg, #ddbcff 0%, #bcffff 100%)',
        }}
      >
        <div className='max-w-4xl flex justify-between items-center mx-auto w-full'>
          <div>
            <Link href='/'>
              <h1>fractal tech blog</h1>
            </Link>
          </div>
          <div className='w-32 flex justify-end gap-3'>
            <FaXTwitter size='2rem' />
            <FaGithub size='2rem' />
          </div>
        </div>
      </header>
      <main className='bg-gray-100 font-mono pt-4 w-[100vw] overflow-x-hidden'>
        {children}
        {/* 3本線の丸い形のハンバーガーメニュー */}
        <Menu />
      </main>
      <footer className='bg-blue-100 py-14 flex justify-center items-center font-mono px-6'>
        <div>
          <h2 className='mb-10 text-center'>©fractal tech blog</h2>
          <Link href='/privacy' className='underline text-sm text-center'>
            プライバシーポリシー
          </Link>
        </div>
      </footer>
    </>
  )
}
