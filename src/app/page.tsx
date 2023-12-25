import { ArticleList } from '@/components/ArticleList'
import { Pagination } from '@/components/Pagination'
import { Profile } from '@/components/Profile'
import { ShareButtons } from '@/components/ShareButtons'
import { TagGroup } from '@/components/TagGroup'
import { getArticles, getPaginatedArticles, getTags, perPage } from '@/libs/newtClient'
import Image from 'next/image'

export default async function Home() {
  const pageNumber = Number(1)
  const allArticles = await getArticles()
  const allCount = allArticles.length
  const pageCount = Math.ceil(allCount / perPage)
  const pageNumbers = [...Array(pageCount)].map((_, i) => i + 1)
  const articles = await getPaginatedArticles(pageNumber)
  const tags = await getTags()
  return (
    <div className='flex min-h-screen flex-col items-center justify-between py-10 px-4'>
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
          <div className='hidden lg:block absolute top-48 w-[24.5%] -right-[calc(24.5%_+_1.5rem)] h-[100%]'>
            <div className='sticky top-0 pt-10 left-0 ...'>
              <div className='bg-white rounded-xl px-4 py-3 mt-6'>
                <p className='text-sm lg:text-xl font-bold mb-4'>tags</p>
                <TagGroup tags={tags} />
              </div>
            </div>
          </div>
        </div>

        <aside className='relative w-1/5 hidden lg:block'>
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
