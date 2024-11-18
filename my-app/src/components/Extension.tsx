import React from 'react'

const Extension = () => {
  return (
    <>
      <div className='w-full h-[759px] top-[2509px] py-[140px] px-[220px] bg-[#043873] gap-[98px] font-inter flex items-center font-title'>
        <div className='w-[697px] h-[294px]'>
          <div className='w-[697px] h-[171px]'>
            <div className='w-[697px] h-[87px]'>
              <h1 className='font-bold text-7xl leading-[87.14px] tracking-[0.02em] text-white transition-transform duration-500 hover:rotate-3 hover:scale-105'>
                Use as Extension
              </h1>
            </div>
            <br />
            <div className='w-[667px] h-[60px]'>
              <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] text-white transition-transform duration-500 hover:skew-x-3 hover:text-[#B0D4FF]'>
                Use the web clipper extension, available on Chrome and Firefox,
                to save web pages or take screenshots as notes.
              </p>
            </div>
            <div className='w-[171px] h-[63px]'></div>
            <button className="py-5 px-10 rounded-lg bg-[#4F9CF9] flex items-center justify-center hover:bg-[#3A7FDD] transition-all duration-500 hover:scale-105">
              <p className="font-medium text-lg leading-[23px] text-white hover:text-[#FFE492] transition-colors duration-500">
                Let's Go
              </p>
              <span className="text-white text-lg ml-2 transform hover:translate-x-2 transition-transform duration-500">
                →
              </span>
            </button>
          </div>
        </div>
        <div className='w-[686px] h-[479px] bg-[#C4DEFD] transition-all duration-500 hover:rotate-6 hover:shadow-2xl hover:opacity-90'></div>
      </div>
    </>
  )
}

export default Extension
