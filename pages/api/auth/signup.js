import connectToMongoDb from '@/lib/mongodb'
import User from '@/models/user'

const signUpHandler = async (req, res) => {
  connectToMongoDb().catch((err) => res.json(err))

  if (req.method === 'POST') {
    if (!req.body) return res.status(400).json({ error: 'Data is missing' })

    const { fullName, email, password, language, country } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(409).json({ error: 'User Already exists' })
    } else {
      if (password.length < 6)
        return res
          .status(409)
          .json({ error: 'Password should be 6 characters long' })

      User.create({
        fullName,
        email,
        password,
        language,
        country,
      })
        .then((data) => {
          const user = {
            fullName: data.fullName,
            email: data.email,
            password: data.password,
            language: data.language,
            country: data.country,
            _id: data._id,
          }
          return res.status(201).json({
            success: true,
            user,
          })
        })
        .catch((err) => {
          res.status(409).json({ error: err })
        })
    }
  } else {
    res.status(401).json('Unauthorized')
  }
}

export default signUpHandler
