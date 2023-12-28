import { Article } from '@/types/article'
import Image from 'next/image'
import Link from 'next/link'
import { TagList } from './TagList'
import { MdEdit } from 'react-icons/md'
import { formatDate } from '@/libs/formatDate'

export const ArticleList = ({ articles }: { articles: Array<Article> }) => {
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article._id}>
            <div className='relative flex justify-between items-start gap-3'>
              <Link
                href={`/articles/${article.slug}`}
                className='w-2/5 rounded-md overflow-hidden h-20 sm:h-32 md:h-40 lg:h-40 flex justify-center items-center hover:bg-opacity-40'
                aria-label={`${article.title}の記事へのリンク`}
              >
                <div className='relative w-full rounded-md overflow-hidden h-20 sm:h-32 md:h-40 lg:h-40 flex justify-center items-center hover:bg-opacity-40'>
                  {article.coverImage && (
                    <Image
                      src={article.coverImage.src}
                      alt={article.coverImage.altText || ''}
                      layout='fill'
                      objectFit='cover'
                    />
                  )}
                </div>
              </Link>

              <div className='w-3/5'>
                <div>
                  <Link
                    href={`/articles/${article.slug}`}
                    className=' hover:underline'
                    aria-label={`${article.title}の記事へのリンク`}
                  >
                    <h1 className='text-sm lg:text-xl font-bold'>{article.title}</h1>
                  </Link>
                  <p className='text-xs lg:text-sm text-gray-400'>
                    {formatDate(article._sys.createdAt)}
                  </p>
                  {article.tags.length > 0 && <TagList tags={article.tags} />}
                </div>
              </div>
            </div>

            <hr className='w-full bg-gray-300 h-[1px] my-6' />
          </li>
        )
      })}
    </ul>
  )
}
