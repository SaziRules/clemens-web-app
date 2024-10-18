import React from 'react'
import Image from 'next/image'
import uniPants from '@/assets/uni-pants.png'
import uniPads from '@/assets/uni-pads.png'
import plusSlips from '@/assets/plus-slips.png'
import femiPants from '@/assets/femi-pants.png'
import rating from '@/assets/rating.png'
import femiPads from '@/assets/femi-pads.png'

function ProductSlider() {
  return (
    <div className='flex space-x-3 overflow-scroll md:pl-5 scrollbar-hide'>
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={plusSlips} alt='Prodessional Range'
        layout='fill' className=' rounded-3xl'  />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Clemens Plus Slips</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Comfort and protection for heavy 
incontinence..</p>
<button><Image src={rating} alt='tick' width={56} /></button>
        
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={femiPants} alt='Prodessional Range'
        layout='fill' />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Clemens Feminine Pants</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Secure and discreet protection for 
moderate incontinence.</p>
<button><Image src={rating} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={uniPads} alt='Prodessional Range'
        layout='fill' />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Clemens Unisex Pads</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Superior comfort and protection for 
severe to very severe incontinence.</p>
<button><Image src={rating} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={uniPants} alt='Prodessional Range'
        layout='fill' />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Clemens Unisex Pants</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Discreet protection for moderate 
incontinence.</p>
<button><Image src={rating} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={plusSlips} alt='Prodessional Range'
        layout='fill' className=' rounded-3xl'  />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Clemens Plus Slips</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Comfort and protection for heavy 
incontinence..</p>
<button><Image src={rating} alt='tick' width={56} /></button>
        
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={femiPads} alt='Prodessional Range'
        layout='fill' />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Clemens Feminine Pads</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Secure and discreet protection for 
moderate incontinence.</p>
<button><Image src={rating} alt='tick' width={56} /></button>
    </div>

    
    </div>
  )
}

export default ProductSlider
