import { ArticleList } from '@/components/ArticleList'
import { Profile } from '@/components/Profile'
import { ShareButtons } from '@/components/ShareButtons'
import { TagGroup } from '@/components/TagGroup'
import { getArticles, getTags } from '@/libs/newtClient'
import Image from 'next/image'

export default async function Home() {
  const articles = await getArticles()

  const tags = await getTags()
  return (
    <div className='flex min-h-screen flex-col items-center justify-between py-10'>
      <div className='flex justify-center items-start gap-6 max-w-4xl'>
        <div className='relative w-4/5 bg-white min-h-screen rounded-xl px-4 py-3'>
          <ArticleList articles={articles} />
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

          <div className='absolute top-48 w-full left-0 h-[100%]'>
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
