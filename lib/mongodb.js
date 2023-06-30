import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
  throw new Error('Invalid Environment variable for MONGODB_URI')
}

const connectToMongoDb = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI)

    if (connection.readyState === 1) {
      console.log('Connected to MongoDB!')
      return Promise.resolve(true)
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

export default connectToMongoDb
