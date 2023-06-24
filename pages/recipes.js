import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Sidebar from '@/components/Sidebar'
import Recipe from '@/components/Recipe'

const Recipes = ({ allRecipes }) => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    !session ? router.push('/login') : null
  }, [session, router])
  return (
    <>
      <Sidebar />
      <div className='mt-[100px] md:mt-0 w-full md:w-4/6 lg:w-5/6 absolute top-0 right-0 mx-auto px-12 py-16'>
        <div className='grid gap-12 lg:grid-cols-1'>
          {allRecipes.map((recipe, i) => {
            return (
              <Recipe
                key={i}
                timestamp={recipe.timestamp}
                title={recipe.title}
                description={recipe.description}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
                index={recipe.index}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Recipes

export async function getServerSideProps() {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getRecipes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let allRecipes = await res.json()
  return {
    props: { allRecipes },
  }
}
