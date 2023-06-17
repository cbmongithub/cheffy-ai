import Image from 'next/image'
import cheffyIcon from '../public/cheffyIcon.svg'

const Navbar = () => {
  return (
    <nav className='absolute z-50 w-full flex items-center justify-center text-center flex-wrap bg-purple py-3'>
      <div className='flex items-center text-white'>
        <Image
          priority
          src={cheffyIcon}
          alt='Cheffy Icon'
          className='w-12 h-12 mt-2'
        />
        <span className='font-semibold text-xl tracking-tight'>CheffyAI</span>
      </div>
    </nav>
  )
}

export default Navbar
