import Image from 'next/image'
import React from 'react'
import Doctors from '@/assets/appointments-bg.png'

function Doctor() {
  return (
    <div className='hidden lg:flex h-[360px] p-5 gap-0'>
      <div className="relative flex-1 items-center justify-center p-5">
        <Image 
        src={Doctors} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover'}}
         />
       
      </div>
      <div className='flex-1 content-center p-5 bg-gradient-to-r from-sky-500 to-indigo-500'>
        <h1 className='text-center text-white text-[35px] font-sans leading-8 w-[550px] pb-5 font-medium mx-auto'>Are you a medical professional?</h1>
        <p className='text-center text-white font-thin leading-4 pb-7 text-[14px] w-[450px] mx-auto'>If you are unsure which Clemens product is right for you or for your loved one, request a FREE sample by clicking the button below to submit a request form.</p>
        <p className='text-center text-sky-500 bg-white cursor-pointer rounded-full py-2 px-3 w-[140px] mx-auto
        hover:scale-105 transform transition duration-300 ease-out'>Learn More</p>
      </div>
    </div>
    
  )
}

export default Doctor
