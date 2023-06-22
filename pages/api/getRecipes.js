import clientPromise from '@/utils/mongodb'

const getRecipes = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('recipes')

    const recipes = await db
      .collection('recipes')
      .find({})
      .sort({ timestamp: -1 })
      .limit(20)
      .toArray()

    res.json(recipes)
  } catch (e) {
    console.error(e)
    res
      .status(500)
      .json({ error: 'An error occurred while trying to fetch recipes.', e })
  }
}

export default getRecipes
