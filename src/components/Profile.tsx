import Image from 'next/image'

export const Profile = () => {
  return (
    <div className='flex lg:flex-col items-center justify-center'>
      <div className='w-1/2 max-w-20 mt-4 border border-gray-300 rounded-full overflow-hidden'>
        <Image src='/images/fractal.png' width={200} height={200} alt='fractal' />
      </div>

      <div className='ml-3 lg:ml-0'>
        <h2 className=''>fractal</h2>
        <p className='text-xs'>
          元機械エンジニア。Next.js/Railsをメインに開発。機械学習,Kaggle,数学を中心に執筆
        </p>
      </div>
    </div>
  )
}
