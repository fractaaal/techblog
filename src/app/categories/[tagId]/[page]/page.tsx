import { ArticleList } from '@/components/ArticleList'
import { BreadcrumbList } from '@/components/BreadcrumbList'
import { Pagination } from '@/components/Pagination'
import { Profile } from '@/components/Profile'
import { ShareButtons } from '@/components/ShareButtons'
import { TagGroup } from '@/components/TagGroup'
import {
  getAllArticlesByTag,
  getArticles,
  getArticlesByTag,
  getTags,
  perPage,
} from '@/libs/newtClient'

type Props = {
  params: {
    tagId: string
    page: string
  }
}
export async function generateStaticParams() {
  const articles = await getArticles()
  const allCount = articles.length
  const pageCount = Math.ceil(allCount / perPage)
  const pageNumbers = [...Array(pageCount)].map((_, i) => i + 1)
  // tagIdを取得する
  const tags = await getTags()
  const tagIds = tags.map((tag) => tag._id)
  const params = []
  for (const tagId of tagIds) {
    for (const page of pageNumbers) {
      params.push({
        tagId,
        page: String(page),
      })
    }
  }
  return params
}

export const dynamicParams = false

export default async function Categories({ params }: Props) {
  const pageNumber = Number(params.page)
  const allArticles = await getAllArticlesByTag(params.tagId)
  const allCount = allArticles.length
  const perPage = 2
  const pageCount = Math.ceil(allCount / perPage)
  const pageNumbers = [...Array(pageCount)].map((_, i) => i + 1)
  const articles = await getArticlesByTag(params.tagId, Number(params.page))
  const tags = await getTags()
  const targetTag = tags.find((tag) => tag._id === params.tagId)

  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-between pb-10 px-4'>
        <div>
          <div className='mb-3'>
            <BreadcrumbList
              list={
                targetTag
                  ? [{ title: `#${targetTag.name}`, href: `/categories/${params.tagId}/1` }]
                  : []
              }
            />
          </div>
          <div className='lg:flex lg:justify-center lg:items-start mx-auto lg:gap-6 w-full lg:max-w-4xl'>
            <div className='relative lg:w-4/5 bg-white lg:min-h-screen rounded-xl px-4 py-3'>
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

            <aside className='relative w-1/5 hidden lg:block'>
              <div className='bg-white rounded-xl px-4 py-3'>
                <p className='text-xl font-bold'>About</p>
                <Profile />
              </div>

              <div className='absolute top-48 w-full left-0 h-[100%]'>
                <div className='sticky top-16 pt-10 left-0 ...'>
                  <div className='bg-white rounded-xl px-4 py-3 mt-6'>
                    <p className='text-xl font-bold mb-4'>tags</p>
                    <TagGroup tags={tags} />
                  </div>
                </div>
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
      </div>
    </>
  )
}
