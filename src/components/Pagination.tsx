import Link from 'next/link'

export const Pagination = ({
  pageNumbers,
  currentPage,
}: {
  pageNumbers: Array<number>
  currentPage: number
}) => {
  return (
    <div className='flex justify-center gap-2'>
      {/* 前のページが存在すればリンクを置く */}
      {currentPage !== 1 && (
        <Link href={`/${currentPage - 1}`}>
          <p className='text-gray-500 hover:underline'>前のページ</p>
        </Link>
      )}
      {/* ページ番号のリンク */}

      {pageNumbers.map((page) => {
        if (page === currentPage) {
          return (
            <p className='text-gray-500' key={page}>
              {page}
            </p>
          )
        }
        return (
          <Link href={`/${page}`} key={page}>
            <p className='text-gray-500 hover:underline'>{page}</p>
          </Link>
        )
      })}
      {/* 次のページが存在すればリンクを置く */}
      {currentPage !== pageNumbers.length && (
        <Link href={`/${currentPage + 1}`}>
          <p className='text-gray-500 hover:underline'>次のページ</p>
        </Link>
      )}
    </div>
  )
}
