import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50'>
         <div className='rounded-lg bg-white p-8 shadow-lg'>
            <h1 className='mb-4 text-4xl font-bold'>404 Not Found</h1>
            <p className='mb-4 text-lg'>
               Oops! The page you requested could not be found.
            </p>
            <Link
               to='/'
               className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
            >
               Go to Home
            </Link>
         </div>
      </div>
   )
}

export default NotFound
