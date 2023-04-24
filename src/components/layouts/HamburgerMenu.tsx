import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
   return (
      <div className='absolute left-0 right-0 top-16 z-10 bg-[#ffffff] text-salemtak sm:hidden'>
         <Link
            to={'/about'}
            className='block px-4 py-2 font-interR hover:text-gray-400'
         >
            About us
         </Link>
         <Link
            to={'/contact'}
            className='block px-4 py-2 font-interR hover:text-gray-400'
         >
            Contact Us
         </Link>

         <Link
            to={'/privacy'}
            className='block px-4 py-2 font-interR hover:text-gray-400'
         >
            Privacy
         </Link>
      </div>
   )
}

export default HamburgerMenu
