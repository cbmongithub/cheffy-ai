import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    minLength: [4, 'Full name should be 4 characters or more'],
    maxLength: [30, 'Full name should be less than 30 characters'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email address',
    ],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
  language: { type: String },
  country: { type: String },
  recipes: [
    {
      timestamp: { type: Number },
      title: { type: String },
      description: { type: String },
      ingredients: { type: Array },
      instructions: { type: Array },
    },
  ],
})

const User = models.User || model('User', UserSchema)

export default User
