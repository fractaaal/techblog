import { formatDate } from '@/libs/formatDate'
import { MdEdit } from 'react-icons/md'
import { RxUpdate } from 'react-icons/rx'

type Props = {
  createdAt: string
  updatedAt: string
}

export const EditHistoryList = ({ createdAt, updatedAt }: Props) => {
  const createdAtDate = formatDate(createdAt)
  const updatedAtDate = formatDate(updatedAt)

  return (
    <div className='flex justify-center gap-4 text-xs'>
      <p className='flex gap-2 justify-center items-center'>
        <span>
          <MdEdit />
        </span>
        {createdAtDate}
      </p>
      <p className='flex gap-2 justify-center items-center'>
        <span>
          <RxUpdate />
        </span>
        {updatedAtDate}
      </p>
    </div>
  )
}
