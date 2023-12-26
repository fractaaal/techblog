'use client'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
} from 'react-share'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { Article } from '@/types/article'
import { generateShareText } from '@/libs/generateShareText'

type Props = {
  article?: Article
}

const URL = 'https://www.fractalblog.com/'
const QUOTE =
  'フルリモートで働く地方エンジニアの技術ブログです。Nextjs, Python, 機械学習を中心にご紹介します。\n\n#フルリモート #地方エンジニア #Next.js #Python #機械学習'

export const ShareButtons = ({ article }: Props) => {
  const url = article ? `${URL}articles/${article.slug}` : URL
  const quote = article ? generateShareText(article) : QUOTE

  return (
    <div className='w-full flex flex-nowrap flex-col gap-4'>
      <TwitterShareButton url={url} title={quote}>
        <FaXTwitter size='2rem' />
      </TwitterShareButton>
      <FacebookShareButton url={url} title={quote}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>
      <LineShareButton url={url} title={quote}>
        <LineIcon size={36} round />
      </LineShareButton>
      <HatenaShareButton url={url} title={quote} windowWidth={660} windowHeight={460}>
        <HatenaIcon size={36} round />
      </HatenaShareButton>
    </div>
  )
}

export const GridShareButtons = ({ article }: Props) => {
  const url = article ? `${URL}articles/${article.slug}` : URL
  const quote = article ? generateShareText(article) : QUOTE
  return (
    <div className='flex justify-center items-center gap-3'>
      <TwitterShareButton url={url} title={quote}>
        <FaXTwitter size='2rem' />
      </TwitterShareButton>
      <FacebookShareButton url={url} title={quote}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>
      <LineShareButton url={url} title={quote}>
        <LineIcon size={36} round />
      </LineShareButton>
      <HatenaShareButton url={url} title={quote} windowWidth={660} windowHeight={460}>
        <HatenaIcon size={36} round />
      </HatenaShareButton>
    </div>
  )
}
