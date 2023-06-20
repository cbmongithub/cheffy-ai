import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

const Recipes = () => {
  return (
    <>
      <Sidebar />
      <div className='w-5/6 absolute top-0 right-0 mx-auto px-12 py-16'>
        <div className='grid gap-12 lg:grid-cols-2'>
          <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
            <div className='flex justify-between items-center mb-5'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                <p>Recipe</p>
              </span>
              <span className='text-sm'>6/19/2023</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
              Banana Bread
            </h2>
            <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
              How to make banana bread
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Image
                  className='w-7 h-7 rounded-full'
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Christian Martinez Avatar'
                  width={28}
                  height={28}
                />
                <span className='font-medium text-zinc-800 dark:text-zinc-50'>
                  Cheffy
                </span>
              </div>
              <Link
                href='#'
                aria-label='Christian B Martinez | Blog Article Link'
                className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline'
              >
                View Recipe
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
          <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
            <div className='flex justify-between items-center mb-5'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                <p>Recipe</p>
              </span>
              <span className='text-sm'>6/19/2023</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
              Lasagna
            </h2>
            <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
              How to make banana lasagna
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Image
                  className='w-7 h-7 rounded-full'
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Christian Martinez Avatar'
                  width={28}
                  height={28}
                />
                <span className='font-medium text-zinc-800 dark:text-zinc-50'>
                  Cheffy
                </span>
              </div>
              <Link
                href='#'
                aria-label='Christian B Martinez | Blog Article Link'
                className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline'
              >
                View Recipe
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
          <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
            <div className='flex justify-between items-center mb-5'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                <p>Recipe</p>
              </span>
              <span className='text-sm'>6/19/2023</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
              Birthday Cake
            </h2>
            <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
              How to make a birthday cake
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Image
                  className='w-7 h-7 rounded-full'
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Christian Martinez Avatar'
                  width={28}
                  height={28}
                />
                <span className='font-medium text-zinc-800 dark:text-zinc-50'>
                  Cheffy
                </span>
              </div>
              <Link
                href='#'
                aria-label='Christian B Martinez | Blog Article Link'
                className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline'
              >
                View Recipe
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
          <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
            <div className='flex justify-between items-center mb-5'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                <p>Recipe</p>
              </span>
              <span className='text-sm'>6/19/2023</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
              Arroz con gandules
            </h2>
            <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
              How to make arroz con gandules
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Image
                  className='w-7 h-7 rounded-full'
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Christian Martinez Avatar'
                  width={28}
                  height={28}
                />
                <span className='font-medium text-zinc-800 dark:text-zinc-50'>
                  Cheffy
                </span>
              </div>
              <Link
                href='#'
                aria-label='Christian B Martinez | Blog Article Link'
                className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline'
              >
                View Recipe
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
          <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
            <div className='flex justify-between items-center mb-5'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                <p>Recipe</p>
              </span>
              <span className='text-sm'>6/19/2023</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
              Flan
            </h2>
            <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
              How to make traditional flan
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Image
                  className='w-7 h-7 rounded-full'
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Christian Martinez Avatar'
                  width={28}
                  height={28}
                />
                <span className='font-medium text-zinc-800 dark:text-zinc-50'>
                  Cheffy
                </span>
              </div>
              <Link
                href='#'
                aria-label='Christian B Martinez | Blog Article Link'
                className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline'
              >
                View Recipe
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
          <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
            <div className='flex justify-between items-center mb-5'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                <p>Recipe</p>
              </span>
              <span className='text-sm'>6/19/2023</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
              Tacos
            </h2>
            <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
              How to make authentic mexican tacos
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Image
                  className='w-7 h-7 rounded-full'
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Christian Martinez Avatar'
                  width={28}
                  height={28}
                />
                <span className='font-medium text-zinc-800 dark:text-zinc-50'>
                  Cheffy
                </span>
              </div>
              <Link
                href='#'
                aria-label='Christian B Martinez | Blog Article Link'
                className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline'
              >
                View Recipe
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
          <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
            <div className='flex justify-between items-center mb-5'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                <p>Recipe</p>
              </span>
              <span className='text-sm'>6/19/2023</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
              Meatloaf
            </h2>
            <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
              How to make the best meatloaf
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Image
                  className='w-7 h-7 rounded-full'
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Christian Martinez Avatar'
                  width={28}
                  height={28}
                />
                <span className='font-medium text-zinc-800 dark:text-zinc-50'>
                  Cheffy
                </span>
              </div>
              <Link
                href='#'
                aria-label='Christian B Martinez | Blog Article Link'
                className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline'
              >
                View Recipe
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
          <article className='p-6 bg-white rounded-lg shadow-2xl dark:bg-slate-800'>
            <div className='flex justify-between items-center mb-5'>
              <span className='bg-gradient-to-r from-cyan-500 to-purple-600 text-purple text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'
                  ></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                <p>Recipe</p>
              </span>
              <span className='text-sm'>6/19/2023</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-900'>
              Spaghetti
            </h2>
            <p className='mb-5 font-light text-zinc-900 dark:text-zinc-300'>
              How to make spaghetti
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Image
                  className='w-7 h-7 rounded-full'
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Christian Martinez Avatar'
                  width={28}
                  height={28}
                />
                <span className='font-medium text-zinc-800 dark:text-zinc-50'>
                  Cheffy
                </span>
              </div>
              <Link
                href='#'
                aria-label='Christian B Martinez | Blog Article Link'
                className='inline-flex items-center font-medium text-zinc-800 dark:text-zinc-50 hover:underline'
              >
                View Recipe
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Recipes
