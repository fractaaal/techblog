import Link from 'next/link'
import { IoHomeSharp } from 'react-icons/io5'

type Props = {
  list: Array<{ title: string; href: string }>
}

export const BreadcrumbList = ({ list }: Props) => {
  return (
    <>
      <div className='flex flex-nowrap gap-2 items-end'>
        <div className='flex flex-nowrap gap-2'>
          <Link href={'/'}>
            <IoHomeSharp size='1.5rem' />
          </Link>
        </div>
        <span className='text-gray-500'>{'>'}</span>
        {list.map((item, index) => {
          const isLast = index === list.length - 1
          return (
            <div className='flex flex-nowrap gap-2' key={item.href}>
              <Link href={item.href}>
                <p className='text-gray-500 hover:underline'>{item.title}</p>
              </Link>
              {!isLast && <span className='text-gray-500'>{'>'}</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
