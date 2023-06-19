import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute z-50 w-full flex items-center justify-between text-center flex-wrap bg-purple py-3'>
      <div className='flex items-center text-white'>
        <Image
          priority
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/cheffyIcon.svg`}
          alt='Cheffy Icon'
          className='w-12 h-12 mt-2'
          width={75}
          height={75}
        />
        <span className='font-semibold text-xl tracking-tight'>CheffyAI</span>
      </div>
      <Link
        href='/dashboard'
        className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple hover:bg-white mr-4 lg:mt-0'
      >
        Login
      </Link>
    </nav>
  )
}

export default Navbar
