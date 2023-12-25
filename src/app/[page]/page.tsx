import { ArticleList } from '@/components/ArticleList'
import { Pagination } from '@/components/Pagination'
import { Profile } from '@/components/Profile'
import { ShareButtons } from '@/components/ShareButtons'
import { TagGroup } from '@/components/TagGroup'
import { getArticles, getArticlesByTag, getPaginatedArticles, getTags } from '@/libs/newtClient'

type Props = {
  params: {
    page: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  const allCount = articles.length
  const perPage = 2
  const pageCount = Math.ceil(allCount / perPage)
  const pageNumbers = [...Array(pageCount)].map((_, i) => i + 1)
  return pageNumbers.map((page) => ({
    page: String(page),
  }))
}

export const dynamicParams = false

export default async function Categories({ params }: Props) {
  const pageNumber = Number(params.page)
  const allArticles = await getArticles()
  const allCount = allArticles.length
  const perPage = 2
  const pageCount = Math.ceil(allCount / perPage)
  const pageNumbers = [...Array(pageCount)].map((_, i) => i + 1)
  const articles = await getPaginatedArticles(pageNumber)
  const tags = await getTags()

  return (
    <div className='flex min-h-screen flex-col items-center justify-between'>
      <div className='flex justify-center items-start gap-6 max-w-4xl'>
        <div className='relative w-4/5 min-h-screen bg-white rounded-xl px-4 py-3'>
          <ArticleList articles={articles} />
          <div>
            <Pagination pageNumbers={pageNumbers} currentPage={pageNumber} />
          </div>
          <div className='absolute top-10 w-16 -left-16 h-[100%]'>
            <div className='sticky top-16 pt-10 left-0 ...'>
              <ShareButtons />
            </div>
          </div>
        </div>

        <aside className='relative w-1/5'>
          <div className='bg-white rounded-xl px-4 py-3'>
            <p className='text-xl font-bold'>About</p>
            <Profile />
          </div>

          <div className='absolute top-56 w-full left-0 h-[100%]'>
            <div className='sticky top-16 pt-10 left-0 ...'>
              <div className='bg-white rounded-xl px-4 py-3 mt-6'>
                <p className='text-xl font-bold mb-4'>tags</p>
                <TagGroup tags={tags} />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
