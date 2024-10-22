import Image from 'next/image'
import React from 'react'
import promo from '@/assets/promo.png'

function Promo() {
  return (
    <div className='hidden lg:flex h-[380px] p-5 gap-0'>
      <div className='flex-1 content-center p-5 bg-gradient-to-l from-sky-500 to-indigo-500'>
        <h1 className='text-center text-white text-[35px] mx-auto font-sans leading-8 w-[550px] pb-7 font-medium'>With discreet comfort to live every moment with confidence</h1>
        <p className='text-center text-sky-500 bg-white cursor-pointer rounded-full 
        py-2 px-3 w-[140px] mx-auto hover:scale-105 transform transition duration-300 ease-out'>Learn More</p>
      </div>
      <div className='relative flex-1 items-center justify-center p-5'>
        <Image 
        src={promo} 
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover'}}
        />
      </div>
      
    </div>
  )
}

export default Promo
