import { useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import cheffy from '../public/cheffy.svg'
import backgroundPattern from '../public/vegetablepattern.jpg'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Home = () => {
  const [email, setEmail] = useState('')
  const { t } = useTranslation('common')
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
      <Navbar
        about={t('mainMenu.about')}
        pricing={t('mainMenu.pricing')}
        contact={t('mainMenu.contact')}
        login={t('mainMenu.login')}
        logout={t('mainMenu.logout')}
      />
      <main className='relative w-full overflow-hidden bg-zinc-50 min-h-screen'>
        <div className='absolute inset-0 opacity-5 aspect-square'>
          <Image src={backgroundPattern} alt='background image' fill />
        </div>
        <div className='relative flex flex-col justify-center items-center pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24 min-h-screen'>
          <div className='mx-auto max-w-5xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left'>
                <div className='lg:hidden w-full h-2/6 md:h-1-4'>
                  <Image priority src={cheffy} alt='Cheffy Icon' />
                </div>
                <div className='lg:py-24'>
                  <h1 className='mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                    <span className='block text-purple'>
                      {t('hero.title')}{' '}
                    </span>
                    <span className='block text-black'>CheffyAI</span>
                  </h1>
                  <p className='mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    {t('hero.paragraph')}
                  </p>
                  <div className='mt-10 sm:mt-12'>
                    <form
                      className='sm:mx-auto sm:max-w-xl lg:mx-0'
                      action='https://api.web3forms.com/submit'
                    >
                      <div className='sm:flex'>
                        <input
                          type='hidden'
                          name='access_key'
                          value='YOUR_ACCESS_KEy_HERE'
                        />
                        <input
                          type='hidden'
                          name='subject'
                          value='New Waitlist'
                        />
                        <div className='min-w-0 flex-1'>
                          <label htmlFor='email' className='sr-only'>
                            Email address
                          </label>
                          <input
                            id='email'
                            type='email'
                            placeholder={t('hero.placeholder')}
                            className='block w-full rounded-md border-0 bg-zinc-100 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple'
                            value={email}
                            onChange={handleChange}
                            autoComplete='off'
                          />
                        </div>
                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                          <button
                            type='submit'
                            className='block w-full rounded-md bg-purple py-3 px-4 font-medium text-white shadow hover:bg-purpleDark focus:outline-none'
                          >
                            {t('hero.join-waitlist')}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='mt-12 hidden lg:block'>
                <Image priority src={cheffy} alt='Cheffy Icon' />
              </div>
            </div>
          </div>
          <Footer copyright={t('footer.copyright')} />
        </div>
      </main>
    </>
  )
}

export default Home

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
