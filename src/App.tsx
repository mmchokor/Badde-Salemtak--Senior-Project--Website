import React from 'react';
import phoneImage from '../dist/phone14.svg';

const App = () => {
  return (
    <>
      {/* <header className="flex justify-between items-center py-4 px-5 bg-[#ffffff] text-[#006A6B]">
        <div className="flex items-center">
          <img src="dist\BadiSLogo.png" alt="Logo" className="h-12  mr-2" />
          <h1 className="text-2xl font-semibold">Bade Salemtak</h1>
        </div>
        <div className="sm:flex">
          <a href="#" className="hover:bg-[#028c8e] bg-[#006A6B] text-[#ffffff] rounded-full py-2 px-5">
            Login
          </a>
        </div>
      </header> */}
      <div className="bg-gray-200 pt-8">
        <div className="flex justify-between ">
         <div>
          <h1 className="text-6xl font-semibold py-20 px-5">Download the</h1>
          <h1 className="text-6xl font-semibold pb-20 px-20">App Now</h1>
          </div>
          <img src={phoneImage} alt="Phone" width="420px" height="420px" />
        </div>
      </div>
    </>
  );
};

export default App;
