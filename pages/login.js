import { useEffect, useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import backgroundPattern from '../public/vegetablepattern.jpg'

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/getUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    let data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    session ? router.push('/chat') : null
  }, [session, router])

  return (
    <main className='relative w-full overflow-hidden bg-zinc-50 min-h-screen'>
      <div className='absolute inset-0 opacity-5 aspect-square'>
        <Image src={backgroundPattern} alt='background image' fill />
      </div>
      <div className='flex flex-col relative z-50 items-center justify-center min-h-screen px-6 py-8 mx-auto lg:py-0'>
        <div className='flex flex-col justify-center items-center'>
          <Link href='/' className='flex items-center'>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
              className='h-32 w-32'
              alt='Cheffy Icon'
              width={100}
              height={100}
            />
          </Link>
          <p className='-mt-5 mb-16 font-semibold text-xl tracking-tight text-zinc-900'>
            CheffyAI
          </p>
        </div>
        <div className='w-full bg-white rounded-lg dark:border md:mt-0 shadow-xl sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Login
            </h1>
            <div className='flex flex-row justify-between items-center py-3'>
              <button
                onClick={() => signIn('github')}
                type='button'
                className='text-white hover:shadow-lg w-auto bg-purple hover:bg-purpleDark focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
              >
                <svg
                  className='w-4 h-4 mr-2 -ml-1'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fab'
                  data-icon='github'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 496 512'
                >
                  <path
                    fill='currentColor'
                    d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                  ></path>
                </svg>
                Login with Github
              </button>

              <button
                onClick={() => signIn('google')}
                type='button'
                className='text-white hover:shadow-lg w-auto bg-sky-600 hover:bg-sky-700 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z'
                  />
                </svg>
                Login with Google
              </button>
            </div>
            <hr />
            <form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  className='text-base
                w-full
                font-normal
                text-zinc-700 dark:text-zinc-200
                bg-zinc-50 dark:bg-slate-800 bg-clip-padding
                border border-solid border-zinc-300 dark:border-zinc-500
                transition
                ease-in-out
                m-0
                  focus:border-purple focus:outline-none py-4 px-4 rounded-xl'
                  placeholder='email@example.com'
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='••••••••'
                  onChange={(e) => setPassword(e.target.value)}
                  className='text-base
                w-full
                font-normal
                text-zinc-700 dark:text-zinc-200
                bg-zinc-50 dark:bg-slate-800 bg-clip-padding
                border border-solid border-zinc-300 dark:border-zinc-500
                transition
                ease-in-out
                m-0
                  focus:border-purple focus:outline-none py-4 px-4 rounded-xl'
                  required=''
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      required=''
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='remember'
                      className='text-gray-500 dark:text-gray-300'
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href='#'
                  className='text-sm font-medium text-gray-700 hover:underline'
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type='submit'
                className='w-full hover:shadow-lg text-white bg-purple hover:bg-purpleDark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Sign in
              </button>
              <p className='text-sm font-light text-gray-700 dark:text-gray-400'>
                Don&apos;t have an account yet?{' '}
                <Link
                  href='/signup'
                  className='font-medium text-purple hover:underline dark:text-primary-500'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
