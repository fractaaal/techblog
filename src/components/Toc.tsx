import { Article } from '@/types/article'
import { ClassAttributes, HTMLAttributes } from 'react'
import ReactMarkdown, { ExtraProps } from 'react-markdown'
import { MdOutlineToc } from 'react-icons/md'

type Props = {
  article: Article
}

export const H2 = ({
  node,
  children,
}: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement> & ExtraProps) => {
  const title = node?.children[0] && 'value' in node?.children[0] ? node?.children[0].value : ''
  return <h2 id={title}>{children}</h2>
}

export const H3 = ({
  node,
  children,
}: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement> & ExtraProps) => {
  const title = node?.children[0] && 'value' in node?.children[0] ? node?.children[0].value : ''
  return <h3 id={title}>{children}</h3>
}

// TocH2のliの中にh3を入れる

export const TocH2 = ({
  node,
}: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement> & ExtraProps) => {
  const title = node?.children[0] && 'value' in node?.children[0] ? node?.children[0].value : ''
  return (
    <li key={title} className='my-2 text-gray-500 text-sm'>
      <a href={`#${title}`} className='hover:underline'>
        {title}
      </a>
    </li>
  )
}

export const Toc = ({ article }: Props) => {
  return (
    <div className='bg-white rounded-xl p-4'>
      <div className='flex items-center w-full justify-center'>
        <div>
          <MdOutlineToc size='1.6rem' />
        </div>
        <h2 className='text-gray-500'>目次</h2>
      </div>
      <ul
        className='text-sm'
        style={{
          listStyleType: 'circle',
          paddingLeft: '1rem',
        }}
      >
        <ReactMarkdown
          allowedElements={['h2']}
          components={{
            h2: TocH2,
          }}
        >
          {article.body}
        </ReactMarkdown>
      </ul>
    </div>
  )
}
