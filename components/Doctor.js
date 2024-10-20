import Image from 'next/image'
import React from 'react'
import Doctors from '@/assets/appointments-bg.png'

function Doctor() {
  return (
    <div className='hidden lg:flex h-[360px] p-5 gap-0'>
      <div className='flex-1 items-center justify-center p-5 bg-[#257EC2]'>
       
      </div>
      <div className='flex-1 content-center p-5 bg-[#00A5B5]'>
        <h1 className='text-center text-white text-[30px] font-sans leading-8 w-[550px] pb-7 font-medium'>With discreet comfort to live every moment with confidence</h1>
        <p className='text-center text-[#00A5B5] bg-white cursor-pointer rounded-full py-2 px-3 w-[140px] mx-auto'>Learn More</p>
      </div>
    </div>
  )
}

export default Doctor
