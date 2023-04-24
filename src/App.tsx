import phoneImage from './ImageAssests/phone14.svg';
import React, { useState } from 'react';

   const App = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <>
       <header className="flex justify-between items-center sm:px-4 py-4 px-3 bg-[#ffffff] text-salemtak ">
       <div className="flex items-center">
  <img src="src\ImageAssests\BadiSLogo.png" alt="Logo" className="w-auto h-8 sm:mr-2 " />
  <h1 className="text-2xl font-semibold font-interR">Bade Salemtak</h1>
</div>

      <div className="flex items-center">
        <div className="hidden sm:flex space-x-4">
          <a href="#" className="hover:text-gray-400 px-4  font-interR">
            About
          </a>
          <a href="#" className="hover:text-gray-400 px-4  font-interR">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-400 px-4 font-interR">
            Contact us
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={handleMenuToggle}>
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-salemtak"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-0 left-0 z-10 bg-[#ffffff] text-salemtak">
          <a href="#" className="block py-2 px-4 hover:text-gray-400 font-interR">
            About us
          </a>
          <a href="#" className="block py-2 px-4 hover:text-gray-400 font-interR">
            Contact Us
          </a>
         
          <a href="#" className="block py-2 px-4 hover:text-gray-400 font-interR">
            Privacy
          </a>
        </div>
      )}
    </header>
      <div className="bg-gray-200  sm:py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-12 md:mx-24 lg:mx-10 xl:mx-38">
          <div className="text-center sm:text-left mb-10 mt-10 sm:mb-0">
            <h1 className="text-4xl sm:text-8xl font-semibold pb-6 sm:w-400 sm:h-400 text-shadow-lg lg:w-[80%] font-interR">Download the App Now</h1>
            <div className="flex flex-col sm:flex-row mt-10 sm:mt-12">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="mx-5">
                <button className="py-3 px-5 bg-salemtak rounded hover:bg-salemtak-hover text-white my-3 shadow-lg font-interR">App Store</button>
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="mx-5">
                <button className="py-3 px-5 bg-salemtak rounded hover:bg-salemtak-hover text-white my-3 shadow-lg font-interR">Google Play</button>
              </a>
            </div>
          </div>
          <img src={phoneImage} alt="Phone" className="w-full sm:w-auto md:w-3/5 lg:w-2/5 xl:w-[380px]" />
        </div>
        <footer>
         <h1 className='text-[19px] text-center text-gray-600 font-interR'>&copy; 2023 All Rights Reserved</h1>
        </footer>
      </div>
    </>
  );
};

export default App;
