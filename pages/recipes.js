import { useState, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import Recipe from '@/components/Recipe'

const Recipes = () => {
  const { data: session } = useSession()
  const [allRecipes, setAllRecipes] = useState('')
  const router = useRouter()
  const { t } = useTranslation('common')

  const getRecipes = async (email) => {
    const response = await fetch('/api/getRecipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })

    let recipes = await response.json()
    setAllRecipes(recipes.recipes)
  }

  //useEffect(() => {
  //  if (!session) {
  //    router.push('/login')
  //  } else {
  //    getRecipes(session.user.email)
  //  }
  //}, [router, session])

  return (
    <>
      <Sidebar
        chat={t('sideMenu.chat')}
        recipes={t('sideMenu.recipes')}
        settings={t('sideMenu.settings')}
        logout={t('sideMenu.logout')}
      />
      <div className='mt-[100px] md:mt-0 w-full md:w-4/6 lg:w-5/6 absolute top-0 right-0 mx-auto px-12 py-16'>
        <div className='grid gap-12 lg:grid-cols-1'>
          {allRecipes.length !== 0 ? (
            allRecipes.map((recipe, i) => {
              return (
                <Recipe
                  key={i}
                  timestamp={recipe.timestamp}
                  title={recipe.title}
                  description={recipe.description}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                />
              )
            })
          ) : (
            <div className='flex flex-row justify-center items-center h-[750px]'>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                  {t('recipes.not-found')}
                </h1>
                <p className='mt-5 text-md font-normal text-gray-700 dark:text-gray-400'>
                  {t('recipes.click')}{' '}
                  <Link
                    href='/chat'
                    className='font-medium text-purple hover:underline dark:text-primary-500'
                  >
                    {t('recipes.here')}
                  </Link>{' '}
                  {t('recipes.return-to-chat')}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Recipes

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
