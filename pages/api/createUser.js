import clientPromise from '@/utils/mongodb'

const createUser = async (req, res) => {
  console.log(req.body)
  try {
    const client = await clientPromise
    const db = client.db('users')
    const { timestamp, firstName, lastName, email, password } = req.body

    const users = await db.collection('users').insertOne({
      timestamp,
      firstName,
      lastName,
      email,
      password,
    })
    res.status(200).json({ text: 'Saved User!' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Error saving user :(', e })
  }
}

export default createUser
