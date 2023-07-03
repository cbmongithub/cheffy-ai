import connectToMongoDb from '@/lib/mongodb'
import User from '@/models/user'

const saveRecipe = async (req, res) => {
  connectToMongoDb().catch((err) => res.json(err))
  const { email, timestamp, title, description, ingredients, instructions } =
    req.body

  const recipe = {
    timestamp: timestamp,
    title: title,
    description: description,
    ingredients: ingredients,
    instructions: instructions,
  }

  const user = await User.findOneAndUpdate(
    { email: email },
    {
      $push: {
        recipes: [recipe],
      },
    },
    {
      new: true,
    }
  )
    .then((user) => {
      return res.status(201).json({ text: 'Saved!', data: user })
    })
    .catch((err) => {
      res.status(409).json({ error: err })
    })
}

export default saveRecipe
