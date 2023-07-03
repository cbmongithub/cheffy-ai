import connectToMongoDb from '@/lib/mongodb'
import User from '@/models/user'

const updateUser = async (req, res) => {
  connectToMongoDb().catch((err) => res.json(err))
  const { email, fullName, password, country, language } = req.body

  const updatedUser = {
    email: email,
    fullName: fullName,
    password: password,
    country: country,
    language: language,
  }

  const user = await User.findOneAndUpdate({ email: email }, updatedUser, {
    new: true,
  })
    .then((user) => {
      return res.status(201).json({ text: 'Saved!', data: user })
    })
    .catch((err) => {
      res.status(409).json({ error: err })
    })
}

export default updateUser
