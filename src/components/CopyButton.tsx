'use client'
import React, { useState } from 'react'
import { RiFileCopy2Line } from 'react-icons/ri'
import { IconContext } from 'react-icons'

type Props = {
  text: string
}

export const CopyButton = ({ text }: Props) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // 2秒後にメッセージを非表示にする
      })
      .catch((err) => {
        console.error('コピーに失敗しました:', err)
      })
  }

  return (
    <div className='relative'>
      <button className='absolute top-2 z-30 right-2 rounded-md p-1' onClick={handleCopy}>
        <IconContext.Provider value={{ color: 'gray', size: '1.5rem' }}>
          <RiFileCopy2Line />
        </IconContext.Provider>
      </button>
      {copied && (
        <div className='absolute z-50 top-0 right-4 rounded-sm mr-2 text-xs px-2 py-1 bg-black text-white'>
          コピーしました
        </div>
      )}
    </div>
  )
}
