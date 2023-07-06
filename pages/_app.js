import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'

const App = ({ Component, pageProps, session }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default appWithTranslation(App)
