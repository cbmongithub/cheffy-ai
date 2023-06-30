import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [show, setShow] = useState(false)
  return (
    <nav className='bg-purple fixed w-full z-50 shadow-lg top-0 left-0'>
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
        <div className='flex md:order-2'>
          {!session ? (
            <Link href='/login'>
              <button
                type='button'
                className='text-white bg-purpleDark hover:text-purple hover:bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-4'
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              type='button'
              className='text-white bg-purpleDark hover:text-purple hover:bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-4'
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
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
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className='flex flex-col justify-center items-center p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li className='hover:bg-purpleDark rounded-lg w-full text-center'>
              <a href='#' className='block py-2 pl-3 pr-4 text-white'>
                About
              </a>
            </li>
            <li className='hover:bg-purpleDark rounded-lg w-full text-center'>
              <a href='#' className='block py-2 pl-3 pr-4 text-white'>
                Pricing
              </a>
            </li>
            <li className='hover:bg-purpleDark rounded-lg w-full text-center'>
              <a href='#' className='block py-2 pl-3 pr-4 text-white'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
