import { Article } from '@/types/article'
import Link from 'next/link'

export const TagList = ({ tags }: { tags: Article['tags'] }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <Link href={`/categories/${tag._id}/1`} key={tag._id}>
          <p className='text-xs lg:text-sm px-3 py-1 bg-gray-200 rounded-full text-gray-600 hover:underline'>
            #{tag.name}
          </p>
        </Link>
      ))}
    </div>
  )
}
