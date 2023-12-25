import styles from '@/app/page.module.css'
import type { Metadata } from 'next'
import type { Article } from '@/types/article'
import { getArticleBySlug, getArticles, getTags } from '@/libs/newtClient'
import Image from 'next/image'
import { ShareButtons } from '@/components/ShareButtons'
import ReactMarkdown from 'react-markdown'
import type { ClassAttributes, HTMLAttributes } from 'react'
import type { ExtraProps } from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { BreadcrumbList } from '@/components/BreadcrumbList'
import { TagList } from '@/components/TagList'
import { EditHistoryList } from '@/components/EditHistoryList'
import { Profile } from '@/components/Profile'
import { TagGroup } from '@/components/TagGroup'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
    openGraph: {
      title: article?.title,
      url: article?.coverImage.src,
      siteName: article?.title,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: article?.title,
    },
  }
}

const Pre = ({
  children,
  ...props
}: ClassAttributes<HTMLPreElement> & HTMLAttributes<HTMLPreElement> & ExtraProps) => {
  if (!children || typeof children !== 'object') {
    return <code {...props}>{children}</code>
  }
  const childType = 'type' in children ? children.type : ''
  if (childType !== 'code') {
    return <code {...props}>{children}</code>
  }

  const childProps = 'props' in children ? children.props : {}
  const { className, children: code } = childProps
  const classList = className ? className.split(':') : []
  const language = classList[0]?.replace('language-', '')
  const fileName = classList[1]

  return (
    <>
      {fileName && (
        <div className='code-file-name'>
          <span>{fileName}</span>
        </div>
      )}
      <SyntaxHighlighter language={language} style={dracula}>
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </>
  )
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  const tags = await getTags()
  if (!article) return

  return (
    <div className='lg:max-w-4xl relative mx-auto pb-10 px-3'>
      <div>
        <BreadcrumbList list={[{ title: article.title, href: '' }]} />
      </div>
      <div className='my-10'>
        <h1 className='text-xl lg:text-4xl font-bold'>{article.title}</h1>
        <div className='flex justify-start w-full mt-4'>
          <EditHistoryList createdAt={article._sys.createdAt} updatedAt={article._sys.updatedAt} />
        </div>
      </div>
      <div className='flex justify-start gap-2 lg:w-4/5 my-4'>
        <TagList tags={article.tags} />
      </div>

      <div className='lg:flex lg:justify-center lg:items-start lg:gap-6 w-full'>
        <div className='relative lg:w-4/5 pb-20 bg-white rounded-xl p-4'>
          <ReactMarkdown
            components={{
              pre: Pre,
            }}
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkMath]}
            className='cms-content'
          >
            {article.body}
          </ReactMarkdown>
          <div className='hidden lg:block absolute top-10 w-16 -left-16 h-[100%]'>
            <div className='sticky top-16 pt-10 left-0 ...'>
              <ShareButtons />
            </div>
          </div>
          <div className='hidden lg:block absolute top-48 w-[22%] -right-[calc(22%_+_1.5rem)] h-[100%]'>
            <div className='sticky top-0 pt-10 left-0 ...'>
              <div className='bg-white rounded-xl px-4 py-3 mt-6'>
                <p className='text-sm lg:text-xl font-bold mb-4'>tags</p>
                <TagGroup tags={tags} />
              </div>
            </div>
          </div>
        </div>

        <aside className='relative w-1/5 hidden lg:block h-[100%]'>
          <div className='bg-white rounded-xl px-4 py-3'>
            <p className='text-xl font-bold'>About</p>
            <Profile />
          </div>
        </aside>

        <section className='lg:hidden my-4'>
          <div className='bg-white rounded-xl px-4 py-3'>
            <p className='text-xl font-bold'>About</p>
            <Profile />
          </div>
        </section>

        <section className='lg:hidden my-4'>
          <div className='bg-white rounded-xl px-4 py-3 mt-6'>
            <p className='text-xl font-bold mb-4'>tags</p>
            <TagGroup tags={tags} />
          </div>
        </section>
      </div>
    </div>
  )
}
