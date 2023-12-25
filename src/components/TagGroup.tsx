import { Tag } from '@/types/article'
import Link from 'next/link'

export const TagGroup = ({ tags }: { tags: Array<Tag> }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <Link href={`/categories/${tag._id}/1`} key={tag._id}>
          <p className='text-xs px-3 py-1 bg-gray-200 rounded-full text-gray-600  hover:underline'>
            #{tag.name}
          </p>
        </Link>
      ))}
    </div>
  )
}
