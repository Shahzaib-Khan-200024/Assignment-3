import Image from 'next/image';
import React from 'react';
import Img from "@/app/ATS/Work Together Image.png";

export const Projectmgm = () => {
  return (
    <>
      <div className='w-full h-[1588px] top-[92px] py-[140px] px-[220px] font-inter'>
        <div className='w-[1480px] h-[547px] gap-[60px] flex items-center'>
          <div className='w-[672px] h-[411px]'>
            <div className='w-[627px] h-[288px]'>
              <div className='w-[627px] h-[174px]'>
                <h1 className='font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529] transition-all duration-500 hover:text-[#4F9CF9] font-title'>
                  Project Management
                </h1>
              </div>
              <br />
              <div className='w-[672px] h-[90px]'>
                <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529] transition-all duration-500 hover:opacity-80 font-title'>
                  Images, videos, PDFs, and audio files are supported. Create
                  math expressions and diagrams directly from the app. Take
                  photos with the mobile app and save them to a note.
                </p>
              </div>
              <div className='w-[201px] h-[63px]'></div>
              <button className='py-5 px-10 rounded-md bg-[#4F9CF9] flex items-center justify-center hover:bg-[#3a7fdd] transition-all duration-500'>
                <p className='w-[110px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white transition-all duration-500 font-title'>
                  Get Started
                </p>
                <span className='text-white text-2xl transition-all duration-500 hover:translate-x-2'>→</span>
              </button>
            </div>
          </div>
          <div className='w-[748px] h-[547px] bg-[#C4DEFD] hover:scale-105 transition-all duration-500 hover:shadow-2xl'></div>
        </div>
        <br />
        <br />
        <br />
        {/* 3rd page */}
        <div className='w-[1480px] h-[661px] gap-[100px] flex items-center'>
          <div className='w-[710px] h-[661px] transition-all duration-500 hover:scale-105 hover:shadow-lg'>
            <Image src={Img} alt='Image Container' />
          </div>
          <div className='w-[670px] h-[294px]'>
            <div className='w-[670px] h-[115px]'>
              <h1 className='font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529] transition-all duration-500 hover:text-[#4F9CF9] font-title'>
                Work together
              </h1>
            </div>
            <div className='w-[670px] h-[60px]'>
              <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529] transition-all duration-500 hover:opacity-80 font-title'>
                With whitespace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>
            <div className='w-[189px] h-[63px]'></div>
            <button className='py-4 px-10 rounded-md bg-[#4F9CF9] flex items-center justify-center hover:bg-[#3a7fdd] transition-all duration-500'>
              <p className='w-[82px] h-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white transition-all duration-500 font-title'>
                Try it now
              </p>
              <span className='text-white text-lg transition-all duration-500 hover:translate-x-2 font-title'> →</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
