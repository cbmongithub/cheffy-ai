import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Sidebar from '@/components/Sidebar'

const Settings = () => {
  const { data: session } = useSession()
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    country: '',
    language: '',
  })
  const countryOptions = ['USA', 'UK', 'Spain', 'France']
  const languageOptions = ['English', 'Spanish', 'French']
  const router = useRouter()

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
  }

  const handleCountryChange = (e) => {
    setUser({ ...user, country: e.target.value })
    console.log(user)
  }

  const handleLanguageChange = (e) => {
    setUser({ ...user, language: e.target.value })
    console.log(user)
  }

  const getUser = async (email) => {
    const response = await fetch('/api/getUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })

    const userData = await response.json()
    setUser({
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
      country: userData.country ? userData.country : 'USA',
      language: userData.language ? userData.language : 'English',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/updateUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        fullName: user.fullName,
        password: user.password,
        country: user.country,
        language: user.language,
      }),
    })

    let answer = await response.json()
    console.log(answer)
  }

  useEffect(() => {
    if (!session) {
      router.push('/login')
    } else {
      getUser(session.user.email)
    }
  }, [router, session])

  return (
    <>
      <Sidebar />
      <div className='mt-[100px] md:mt-0 py-16 w-full md:w-4/6 flex flex-row justify-center items-center md:fixed md:top-0 md:right-0 lg:w-5/6'>
        <div className='w-5/6 md:w-4/6 p-6 mx-auto bg-white rounded-lg shadow-2xl'>
          <h2 className='text-2xl text-zinc-900'>Account Settings</h2>
          <form
            className='mt-6 border-t border-zinc-400 pt-4'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full border-zinc-400'>
                <div className='flex items-center justify-between mt-3'>
                  <div className='w-full px-3 mb-6'>
                    <label
                      htmlFor='fullName'
                      className='block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2'
                    >
                      Full Name
                    </label>
                    <input
                      name='fullName'
                      value={user.fullName}
                      onChange={handleInputChange}
                      className='appearance-none block w-full bg-white text-zinc-700 border border-zinc-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-zinc-500'
                      type='text'
                      placeholder={user.fullName}
                    />
                  </div>
                </div>
              </div>
              <div className='w-full md:w-full px-3 mb-6'>
                <label
                  className='block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2'
                  htmlFor='email'
                >
                  email address
                </label>
                <input
                  className='appearance-none block w-full bg-gray-50 cursor-disabled text-gray-400 border border-zinc-400 shadow-inner rounded-md py-3 px-4 leading-tight'
                  type='email'
                  name='email'
                  value={user.email}
                  disabled
                  placeholder={user.email}
                />
              </div>
              <div className='w-full md:w-full px-3 mb-6 '>
                <label
                  htmlFor='password'
                  className='block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2'
                >
                  password
                </label>
                <div className='flex flex-row justify-between'>
                  <input
                    className='inline-block w-full bg-white text-zinc-700 border border-zinc-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-zinc-500'
                    type='password'
                    name='password'
                    placeholder='••••••••'
                    value={user.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label
                  htmlFor='country'
                  className='block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2'
                >
                  country
                </label>
                <div className='flex-shrink w-full inline-block relative'>
                  <select
                    onChange={handleCountryChange}
                    value={user.country}
                    className='block appearance-none text-zinc-500 w-full bg-white border border-zinc-400 shadow-inner px-4 py-2 pr-8 rounded'
                  >
                    {countryOptions.map((option, index) => {
                      return <option key={index}>{option}</option>
                    })}
                  </select>
                  <div className='pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-zinc-600'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2'>
                  Language
                </label>
                <div className='flex-shrink w-full inline-block relative'>
                  <select
                    onChange={handleLanguageChange}
                    value={user.language}
                    className='block appearance-none text-zinc-500 w-full bg-white border border-zinc-400 shadow-inner px-4 py-2 pr-8 rounded'
                  >
                    {languageOptions.map((option, index) => {
                      return <option key={index}>{option}</option>
                    })}
                  </select>
                  <div className='pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-zinc-600'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
              <button
                className='ml-3 mt-3 py-3 rounded-xl inline-block text-md px-4 leading-none border text-white bg-purple border-purple hover:border-purpleDark hover:bg-purpleDark hover:text-white'
                type='submit'
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Settings
