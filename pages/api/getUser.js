import connectToMongoDb from '@/lib/mongodb'
import User from '@/models/user'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'

const getUser = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    connectToMongoDb().catch((err) => res.json(err))
    const { email } = req.body
    const user = await User.findOne({ email: email })
      .then((user) => {
        return res.status(201).json(user)
      })
      .catch((err) => {
        res.status(409).json({ error: err })
      })
  } else {
    res.status(401).json('Unauthorized')
  }
}

export default getUser
