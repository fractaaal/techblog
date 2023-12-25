'use client'
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'

const URL = 'https://example.com/'
const QUOTE = '共有するときのメッセージ'

export const ShareButtons = () => {
  return (
    <div className='w-full flex flex-nowrap flex-col gap-4'>
      <TwitterShareButton url={URL} title={QUOTE}>
        <FaXTwitter size='2rem' />
      </TwitterShareButton>
      <FacebookShareButton url={URL} title={QUOTE}>
        <FaFacebook size='2rem' />
      </FacebookShareButton>
    </div>
  )
}
