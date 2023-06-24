import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { BiFoodMenu, BiLogOut } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { BsChatDots } from 'react-icons/bs'

const Sidebar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <nav
        className={`bg-purple absolute z-10 w-full top-0 right-0 shadow-lg md:hidden`}
      >
        <div className='w-full flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='#' className='flex items-center'>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
              className='h-12 w-12 mt-2'
              alt='Cheffy Icon'
              width={100}
              height={100}
            />
            <span className='font-semibold text-xl tracking-tight text-white'>
              CheffyAI
            </span>
          </a>
          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-white bg-purpleDark hover:text-purple hover:bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-4'
              onClick={() => signOut('github')}
            >
              Logout
            </button>
            <button
              type='button'
              className='inline-flex items-center p-2 text-sm rounded-lg md:hidden hover:bg-purpleDark focus:outline-none'
              onClick={() => setShow(!show)}
            >
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='#FFFFFF'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              show ? null : 'hidden'
            } w-full md:hidden`}
          >
            <ul className='flex flex-col justify-center items-center p-4 md:p-0 mt-4 font-medium rounded-lg'>
              <li className='hover:bg-purpleDark rounded-lg w-full text-center'>
                <Link href='/chat' className='block py-2 pl-3 pr-4 text-white'>
                  Chat
                </Link>
              </li>
              <li className='hover:bg-purpleDark rounded-lg w-full text-center'>
                <Link
                  href='/recipes'
                  className='block py-2 pl-3 pr-4 text-white'
                >
                  Recipes
                </Link>
              </li>
              <li className='hover:bg-purpleDark rounded-lg w-full text-center'>
                <Link
                  href='/settings'
                  className='block py-2 pl-3 pr-4 text-white'
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <aside
        className='fixed top-0 hidden md:block left-0 z-40 md:w-2/6 lg:w-1/6 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <Link
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white'
              >
                <Image
                  priority
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
                  alt='Cheffy Icon'
                  className='w-12 h-12 mt-2'
                  width={75}
                  height={75}
                />
                <span className='font-semibold text-xl tracking-tight'>
                  CheffyAI
                </span>
              </Link>
            </li>
            <li>
              <Link
                href='/chat'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <BsChatDots />
                <span className='flex-1 ml-3 whitespace-nowrap'>Chat</span>
              </Link>
            </li>
            <li>
              <Link
                href='/recipes'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <BiFoodMenu />
                <span className='flex-1 ml-3 whitespace-nowrap'>Recipes</span>
              </Link>
            </li>
            <li>
              <Link
                href='/settings'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <CiSettings />
                <span className='flex-1 ml-3 whitespace-nowrap'>Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href='#'
                onClick={() => signOut('github')}
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <BiLogOut />
                <span className='flex-1 ml-3 whitespace-nowrap'>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
