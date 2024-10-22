import React from 'react'
import Image from 'next/image'
import uniPants from '@/assets/uni-pants.png'
import uniPads from '@/assets/uni-pads.png'
import plusSlips from '@/assets/plus-slips.png'
import femiPants from '@/assets/femi-pants.png'
import rating from '@/assets/rating.svg'
import femiPads from '@/assets/femi-pads.png'

const products = [
  { src: plusSlips, title: 'Clemens Plus Slips', description: 'Comfort and protection for heavy incontinence.' },
  { src: femiPants, title: 'Clemens Feminine Pants', description: 'Secure and discreet protection for moderate incontinence.' },
  { src: uniPads, title: 'Clemens Unisex Pads', description: 'Superior comfort and protection for severe to very severe incontinence.' },
  { src: uniPants, title: 'Clemens Unisex Pants', description: 'Discreet protection for moderate incontinence.' },
  { src: plusSlips, title: 'Clemens Plus Slips', description: 'Comfort and protection for heavy incontinence.' },
  { src: femiPads, title: 'Clemens Feminine Pads', description: 'Secure and discreet protection for moderate incontinence.' },
]

function ProductSlider() {
  return (
    <div className='flex space-x-6 overflow-x-auto md:pl-5 scrollbar-hide py-4'>
      {products.map((product, index) => (
        <div key={index} className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
          <div className='relative h-[310px] w-[300px] items-center'>
            <Image 
              src={product.src} 
              alt='Professional Range'
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='rounded-3xl'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className='text-[#2C2E74] text-[24px] font-normal'>{product.title}</h3>
          <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5 pb-2'>{product.description}</p>
          <button>
            <Image 
              src={rating} 
              alt='rating' 
              width={56} 
              height={56} 
              style={{ width: 'auto', height: 'auto' }} 
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductSlider