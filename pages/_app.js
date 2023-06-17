import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className='bg-white overflow-x-hidden min-h-screen'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
