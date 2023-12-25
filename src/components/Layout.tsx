import Image from 'next/image'
import React, { ReactNode } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header
        className='bg-[#dbdbff] py-4 px-10 flex justify-center items-center font-mono'
        style={{
          background: 'linear-gradient(-20deg, #ddbcff 0%, #bcffff 100%)',
        }}
      >
        <div className='max-w-4xl flex justify-between items-center mx-auto w-full'>
          <div>
            <h1>fractal tech blog</h1>
          </div>
          <div className='w-32 flex justify-center gap-3'>
            <FaXTwitter size='2rem' />
            <FaGithub size='2rem' />
          </div>
        </div>
      </header>
      <main className='bg-gray-100 font-mono pt-20'>{children}</main>
      <footer className='bg-[#CEC5F0] py-4 flex justify-center items-center font-mono px-6'>
        <h2>fractal tech blog</h2>
      </footer>
    </>
  )
}
