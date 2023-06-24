import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CHEFFY_ID,
      clientSecret: process.env.GITHUB_CHEFFY_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CHEFFY_ID,
      clientSecret: process.env.FACEBOOK_CHEFFY_SECRET,
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
  secret: process.env.GITHUB_CHEFFY_SECRET,
}

export default NextAuth(authOptions)
