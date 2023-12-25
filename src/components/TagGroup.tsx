import { Tag } from '@/types/article'
import Link from 'next/link'

export const TagGroup = ({ tags }: { tags: Array<Tag> }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <Link href={`/categories/${tag._id}/1`} key={tag._id}>
          <p className='text-gray-500 hover:underline'>#{tag.name}</p>
        </Link>
      ))}
    </div>
  )
}
