import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { loginUser } from '../helpers'
import backgroundPattern from '../public/vegetablepattern.jpg'

const Signup = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
  })
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [validationErrors, setValidationErrors] = useState([])
  const [submitError, setSubmitError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const validateData = (data) => {
    const err = []

    if (data.fullName?.length < 4) {
      err.push({ fullName: 'Full name must be at least 4 characters long' })
    } else if (data.fullName?.length > 30) {
      err.push({ firstName: 'Full name must be less than 30 characters' })
    } else if (data.password?.length < 6) {
      err.push({ password: 'Password must be at least 6 characters' })
    }

    setValidationErrors(err)

    if (err.length > 0) {
      return false
    } else {
      return true
    }
  }
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSignup = async (e) => {
    e.preventDefault()

    const isValid = validateData(data)

    if (isValid) {
      try {
        setLoading(true)
        const apiRes = await axios.post(
          'http://localhost:3000/api/auth/signup',
          data
        )

        if (apiRes?.data?.success) {
          const loginRes = await loginUser({
            email: data.email,
            password: data.password,
          })

          if (loginRes && !loginRes.ok) {
            setSubmitError(loginRes.error || '')
          } else {
            router.push('/chat')
          }
          setIsSignedUp(true)
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error
          setSubmitError(errorMsg)
        }
      }

      setLoading(false)
    }
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
              <form className='space-y-4 md:space-y-6' onSubmit={handleSignup}>
                <div>
                  <label
                    htmlFor='fullName'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='fullName'
                    value={data.fullName}
                    onChange={handleInputChange}
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
                    placeholder='Jane Doe'
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
                    value={data.email}
                    onChange={handleInputChange}
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
                    value={data.password}
                    onChange={handleInputChange}
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
                  disabled={loading}
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
                {submitError && <p>{submitError}</p>}
              </form>
            </div>
          </div>
        ) : (
          <div className='w-full bg-white rounded-lg dark:border md:mt-0 shadow-xl sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8 text-center'>
              <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Success!
              </h1>
              <p className='mt-5 text-md font-normal text-gray-700 dark:text-gray-400'>
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
