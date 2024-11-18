import React from 'react'

const YourWork = () => {
  return (
    <>
      <div className='w-full h-[574px] py-[140px] px-[220px] font-inter bg-[#043873] relative overflow-hidden flex items-center justify-center text-center font-title'>
        {/* Animated Background Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#043873] to-[#0f4c81] animate-[bg-slide_15s_infinite]'></div>
        <div className='w-full h-full flex flex-col items-center justify-center relative z-10'>
          <div className='w-full max-w-[1064px]'>
            <h1 className='font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-white transition-transform duration-700 hover:scale-105'>
              Your work, everywhere you are
            </h1>
          </div>
          <div className='w-full max-w-[1064px] mt-4'>
            <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] text-white transition-opacity duration-500 hover:opacity-80'>
              Access your notes from your computer, phone, or tablet by
              synchronizing with various services, including whitespace,
              Dropbox, and OneDrive. The app is available on Windows, macOS,
              Linux, Android, and iOS. A terminal app is also available!
            </p>
          </div>
          <br />
          <div className='flex justify-center w-full h-[63px] mt-6'>
            <button className="py-5 px-10 rounded-lg bg-[#4F9CF9] flex items-center justify-center hover:bg-[#3A7FDD] transition-all duration-500 hover:scale-105">
              <p className="font-medium text-lg leading-[23px] text-white hover:text-[#FFE492] transition-colors duration-500">
                Try Taskey
              </p>
              <span className="text-white text-lg ml-2 transform hover:translate-x-2 transition-transform duration-500">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

// Custom CSS (include in your global CSS file)
// @keyframes bg-slide {
// 0% { background-position: 0% 50% }
// 50% { background-position: 100% 50% }
// 100% { background-position: 0% 50% }
// }

export default YourWork;
