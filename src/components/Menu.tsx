'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const handleMenuOpen = () => {
    setOpen(!isOpen)
  }

  const handleMenuClose = () => {
    setOpen(false)
  }

  return (
    <div className='py-6 px-4 flex justify-between items-center'>
      <nav
        className={
          isOpen
            ? 'z-40 bg-blue-100 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col'
            : 'fixed right-[-100%] md:right-4'
        }
      >
        <ul
          className={
            isOpen
              ? 'flex h-screen justify-center items-center flex-col gap-6 text-xl'
              : 'block md:flex md:gap-8'
          }
        >
          <li>
            <Link onClick={handleMenuClose} href='/'>
              TOP
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href='/categories/65897f633352593082f24dc2/1'>
              Math
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href='/privacy'>
              Privacy
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className='fixed flex justify-center items-center bottom-10 right-4 bg-white w-12 h-12 rounded-full shadow-lg z-50 space-y-2 md:hidden'
        onClick={handleMenuOpen}
      >
        <div className=''>
          <span
            className={
              isOpen
                ? 'block w-8 h-[1px] bg-gray-600 rotate-45 duration-300'
                : 'block w-8 h-[1px] bg-gray-600 duration-300'
            }
          />
          <span
            className={
              isOpen
                ? 'block opacity-0 duration-300'
                : 'block w-8 h-[1px] my-2 bg-gray-600 duration-300'
            }
          />
          <span
            className={
              isOpen
                ? 'block w-8 h-[1px] bg-gray-600 -rotate-45 duration-300'
                : 'block w-8 h-[1px] bg-gray-600  duration-300'
            }
          />
        </div>
      </button>
    </div>
  )
}
