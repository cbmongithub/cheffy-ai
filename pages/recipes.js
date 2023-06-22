import Sidebar from '@/components/Sidebar'
import Recipe from '@/components/Recipe'

const Recipes = ({ allRecipes }) => {
  return (
    <>
      <Sidebar />
      <div className='w-5/6 absolute top-0 right-0 mx-auto px-12 py-16'>
        <div className='grid gap-12 lg:grid-cols-2'>
          {allRecipes.map((recipe, i) => {
            return (
              <Recipe
                key={i}
                timestamp={recipe.timestamp}
                title={recipe.title}
                description={recipe.description}
                recipe={recipe.recipe}
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
