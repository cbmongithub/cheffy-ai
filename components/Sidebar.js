import Image from 'next/image'
import Link from 'next/link'
import { BiFoodMenu, BiLogOut } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { AiOutlineUser } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <aside
      className='fixed top-0 left-0 z-40 w-1/6 h-screen transition-transform -translate-x-full sm:translate-x-0'
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
              href='/dashboard'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <BsChatDots />
              <span className='flex-1 ml-3 whitespace-nowrap'>Chat</span>
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <BiFoodMenu />
              <span className='flex-1 ml-3 whitespace-nowrap'>Recipes</span>
              <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                Pro
              </span>
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
              href='/'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <BiLogOut />
              <span className='flex-1 ml-3 whitespace-nowrap'>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
