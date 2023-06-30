import connectToMongoDb from '@/lib/mongodb'
import User from '@/models/user'

const saveRecipe = async (req, res) => {
  connectToMongoDb().catch((err) => res.json(err))
  const { timestamp, title, description, ingredients, instructions, index } =
    req.body

  const saveRecipeToUser = await User.save({
    recipes: {
      timestamp,
      title,
      description,
      ingredients,
      instructions,
      index,
    },
  })
    .then((data) => {
      console.log(data)
      return res.status(201).json({ text: 'Saved Recipe!', index: index })
    })
    .catch((err) => {
      res.status(409).json({ error: err })
    })
}

export default saveRecipe
