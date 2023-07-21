import NextAuth from 'next-auth'
import { compare } from 'bcryptjs'
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

        await connectToMongoDb().catch((err) => {
          throw new Error(err)
        })

        const user = await User.findOne({
          email: email,
        }).select('fullName email password language country recipes')

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(password, user.password)

        if (!isPasswordValid) {
          return null
        }

        return user
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
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      const user = token.user
      session.user = user
      return session
    },
    async signIn({ user }) {
      if (user.name || user.fullName) {
        return true
      } else {
        return false
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.includes('/login')) {
        return `${baseUrl}/chat`
      } else if (new URL(url).origin === baseUrl) {
        return url
      }
      return baseUrl
    },
  },
}

export default NextAuth(authOptions)
