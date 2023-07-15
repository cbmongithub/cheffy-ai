import connectToMongoDb from '@/lib/mongodb'
import User from '@/models/user'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'

const saveRecipe = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
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
  } else {
    res.status(401).json('Unauthorized')
  }
}

export default saveRecipe
