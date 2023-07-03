import connectToMongoDb from '@/lib/mongodb'
import User from '@/models/user'

const getUser = async (req, res) => {
  connectToMongoDb().catch((err) => res.json(err))
  const { email } = req.body
  const user = await User.findOne({ email: email })
    .then((user) => {
      return res.status(201).json(user)
    })
    .catch((err) => {
      res.status(409).json({ error: err })
    })
}

export default getUser
