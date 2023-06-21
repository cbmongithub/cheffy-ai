import clientPromise from '@/utils/mongodb'

const saveRecipe = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('recipes')
    const { timestamp, recipe, index } = req.body

    const recipes = await db.collection('recipes').insertOne({
      timestamp,
      recipe,
      index,
    })
    res.status(200).json({ text: 'Saved!', index: index })
    //res.redirect('/recipes')
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Error :(', e })
  }
}

export default saveRecipe
