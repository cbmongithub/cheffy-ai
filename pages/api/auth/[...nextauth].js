import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/models/user'
import connectToMongoDb from '@/lib/mongodb'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CHEFFY_ID,
      clientSecret: process.env.GITHUB_CHEFFY_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CHEFFY_ID,
      clientSecret: process.env.GOOGLE_CHEFFY_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = req.body
        try {
          await connectToMongoDb().catch((err) => {
            throw new Error(err)
          })

          const user = await User.findOne({
            email: email,
            password: password,
          })

          return user
        } catch (error) {
          console.log(error)
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      const user = token.user
      session.user = user

      return session
    },
  },
}

export default NextAuth(authOptions)
