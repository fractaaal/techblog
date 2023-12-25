import { Article } from '@/types/article'
import Image from 'next/image'
import Link from 'next/link'
import { ShareButtons } from './ShareButtons'
import { formatDate } from '@/libs/formatDate'
import { TagList } from './TagList'

export const ArticleList = ({ articles }: { articles: Array<Article> }) => {
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article._id}>
            <div className='flex justify-between items-start gap-3'>
              <Link
                href={`/articles/${article.slug}`}
                className='w-2/5 rounded-md overflow-hidden h-20 sm:h-32 md:h-48 lg:h-48 flex justify-center items-center hover:bg-opacity-40'
                style={{
                  backgroundImage: `url(${article.coverImage ? article.coverImage.src : ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></Link>

              <div className='w-3/5'>
                <Link href={`/articles/${article.slug}`} className=' hover:underline'>
                  <h1 className='text-sm lg:text-xl font-bold'>{article.title}</h1>
                </Link>
                <p className='text-xs lg:text-sm text-gray-400'>
                  {formatDate(article._sys.createdAt)}
                </p>
                {article.tags.length > 0 && <TagList tags={article.tags} />}
              </div>
            </div>

            <hr className='w-full bg-gray-300 h-[1px] my-6' />
          </li>
        )
      })}
    </ul>
  )
}
