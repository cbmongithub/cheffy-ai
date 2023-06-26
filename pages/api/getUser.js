import clientPromise from '@/utils/mongodb'

const getUser = async (req, res) => {
  try {
    const client = await clientPromise
    const db = client.db('users')
    const { email, password } = req.body

    const user = await db.collection('users').findOne({
      email: email,
      password: password,
    })

    if (user) {
      res.status(200).json({ text: 'User found!', data: user })
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ text: 'No user found :(', e })
  }
}

export default getUser
