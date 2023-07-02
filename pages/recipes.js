import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Sidebar from '@/components/Sidebar'
import Recipe from '@/components/Recipe'

const Recipes = () => {
  const { data: session } = useSession()
  const [allRecipes, setAllRecipes] = useState('')
  const router = useRouter()

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
    setAllRecipes(recipes)
  }

  useEffect(() => {
    if (!session) {
      router.push('/login')
    } else {
      console.log(session)
      getRecipes(session.user.email)
    }
  }, [router, session])

  return (
    <>
      <Sidebar />
      <div className='mt-[100px] md:mt-0 w-full md:w-4/6 lg:w-5/6 absolute top-0 right-0 mx-auto px-12 py-16'>
        <div className='grid gap-12 lg:grid-cols-1'>
          {allRecipes &&
            allRecipes.recipes.map((recipe, i) => {
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
            })}
        </div>
      </div>
    </>
  )
}

export default Recipes
