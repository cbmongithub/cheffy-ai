import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

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
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.includes('/login')) {
        return `${baseUrl}/chat`
      } else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
}

export default NextAuth(authOptions)
