import phoneImage from '../assets/images/phone14.svg'

const Landing = () => {
   return (
      <div className='flex  h-screen flex-col items-center justify-between  bg-gray-100 px-10 pt-10 xl:flex-row'>
         <div className='container mb-6  text-center sm:mb-0 sm:text-left'>
            <h1 className='sm:w-400 sm:h-400 text-shadow-lg pb-6 font-interR text-4xl font-semibold sm:text-8xl lg:w-[80%]  '>
               Download the App Now
            </h1>
            <div className='mt-0 flex flex-col  sm:mt-10 sm:flex-row'>
               <a
                  href='https://www.apple.com/app-store/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mx-5'
               >
                  <button className='my-3 rounded bg-salemtak px-5 py-3 font-interR text-white shadow-lg hover:bg-salemtak-hover'>
                     App Store
                  </button>
               </a>
               <a
                  href='https://play.google.com/store'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mx-5'
               >
                  <button className='my-3 rounded bg-salemtak px-5 py-3 font-interR text-white shadow-lg hover:bg-salemtak-hover'>
                     Google Play
                  </button>
               </a>
            </div>
         </div>
         <img
            src={phoneImage}
            alt='Phone'
            className='w-full sm:w-auto md:w-3/5 lg:w-2/5 xl:w-[380px]   '
         />
      </div>
   )
}

export default Landing
