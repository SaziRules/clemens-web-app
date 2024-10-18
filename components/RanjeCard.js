import Image from 'next/image'
import React from 'react'
import ProRange from  '@/assets/pro.png'
import consumeRange from '@/assets/consumer.png'
import Buy from '@/assets/buy.png'
import extras from '@/assets/extras.png'
import tick from '@/assets/tick.png'

function RanjeCard() {
  return (
    <div className='flex space-x-3 overflow-scroll md:pl-5 scrollbar-hide'>
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={consumeRange} alt='Prodessional Range'
        layout='fill' className=' rounded-3xl'  />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Consumer Range</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Comfort and protection for consumer 
incontinence.</p>
<button><Image src={tick} alt='tick' width={56} /></button>
        
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={ProRange} alt='Prodessional Range'
        layout='fill' />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Professional Range</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Professional incontinence product range 
your partner for over 18 years.</p>
<button><Image src={tick} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={extras} alt='Prodessional Range'
        layout='fill' />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Accessories</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>The latest absorbency technology to 
keep you dry, day and night.</p>
<button><Image src={tick} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={Buy} alt='Prodessional Range'
        layout='fill' />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Where to buy</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>You can find Clemens™ products in-store 
at popular select retail stores.</p>
<button><Image src={tick} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={consumeRange} alt='Prodessional Range'
        layout='fill' className=' rounded-3xl'  />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Consumer Range</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Comfort and protection for consumer 
incontinence.</p>
<button><Image src={tick} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative h-[310px] w-[300px] items-center'>
        <Image src={ProRange} alt='Prodessional Range'
        layout='fill' />
      </div>
      <h3 className='text-[#2C2E74] text-[24px] font-normal'>Professional Range</h3>
      <p className='text-[#2C2E74] text-[14px] font-thin w-[295px] leading-5'>Professional incontinence product range 
your partner for over 18 years.</p>
<button><Image src={tick} alt='tick' width={56} /></button>
    </div>
    </div>
  )
}

export default RanjeCard
