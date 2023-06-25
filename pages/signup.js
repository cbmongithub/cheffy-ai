import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import backgroundPattern from '../public/vegetablepattern.jpg'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: Date.now(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    })
    let data = await response.json()
    data.text ? setIsSignedUp(true) : setIsSignedUp(false)
  }

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
        {!isSignedUp ? (
          <div className='w-full bg-white rounded-lg dark:border md:mt-0 shadow-xl sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign Up
              </h1>
              <hr />
              <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value)
                      console.log(firstName)
                    }}
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
                    placeholder='Jane'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='lastName'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value)
                      console.log(lastName)
                    }}
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
                    placeholder='Doe'
                    required
                  />
                </div>
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      console.log(email)
                    }}
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
                    required
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      console.log(password)
                    }}
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
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full hover:shadow-lg text-white bg-purple hover:bg-purpleDark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Sign Up
                </button>
                <p className='text-sm font-light text-gray-700 dark:text-gray-400'>
                  Already have an account?{' '}
                  <Link
                    href='/login'
                    className='font-medium text-purple hover:underline dark:text-primary-500'
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div className='w-full bg-white rounded-lg dark:border md:mt-0 shadow-xl sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8 text-center'>
              <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Success!
              </h1>
              <p className='text-sm font-light text-gray-700 dark:text-gray-400'>
                Click{' '}
                <Link
                  href='/login'
                  className='font-medium text-purple hover:underline dark:text-primary-500'
                >
                  here
                </Link>{' '}
                to return to the login page
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Signup
