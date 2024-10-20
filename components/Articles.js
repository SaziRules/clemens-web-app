import React from 'react'
import Image from 'next/image'
import FirstBlog from '@/assets/blog-1.png'
import SecondBlog from '@/assets/blog-2.png'
import ThirdBlog from '@/assets/blog-3.png'
import tick from '@/assets/tick.png'

const Posts = [
  {
    title: "Symptoms and types of bladder weakness",
    author: "Clemens",
    date: "March 15, 2022",
    image: "/blog-1.png",
    description:
      "Bladder weakness is a common problem. It occurs more often as people get older and...",
  },
  {
    title: "Embracing life’s changes with our solutions.",
    author: "Clemens",
    date: "February 20, 2022",
    image: "/blog-2.png",
    description:
      "Living with incontinence can be challenging, but it doesn't mean giving up on...",
  },
  {
    title: "Causes and risk factors for bladder weakness",
    author: "Clemens",
    date: "January 10, 2022",
    image: "/blog-3.png",
    description:
      "Bladder weakness can be caused by everyday habits, underlying medical conditions or physical problems...",
  }
]
function Articles() {
  return (
    <div className='flex space-x-3  overflow-scroll md:pl-5 scrollbar-hide'>
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative items-center pb-4'>
        <Image src={FirstBlog} alt='Prodessional Range'
        height={240} width={415}  />
      </div>
        <h3 className='text-[#2C2E74] text-[24px] font-normal leading-7 pb-2'>Symptoms and types of bladder weakness</h3>
        <p className='text-[#2C2E74] text-[14px] font-thin w-[350px] leading-5'>Bladder weakness is a common problem. It occurs more often as people get older and...</p>
        <button><Image src={tick} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative items-center pb-4'>
        <Image src={SecondBlog} alt='Prodessional Range'
        height={240} width={415}  />
      </div>
        <h3 className='text-[#2C2E74] text-[24px] font-normal leading-7 pb-2'>Embracing life’s changes with our solutions.</h3>
        <p className='text-[#2C2E74] text-[14px] font-thin w-[350px] leading-5'>Living with incontinence can be challenging, but it doesn't mean giving up on...</p>
        <button><Image src={tick} alt='tick' width={56} /></button>
    </div>

    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className='relative items-center pb-4'>
        <Image src={ThirdBlog} alt='Prodessional Range'
        height={240} width={415}  />
      </div>
        <h3 className='text-[#2C2E74] text-[24px] font-normal leading-7 pb-2'>Causes and risk factors for 
bladder weakness</h3>
        <p className='text-[#2C2E74] text-[14px] font-thin w-[350px] leading-5'>Bladder weakness can be caused by everyday habits, underlying medical conditions or physical problems.</p>
        <button><Image src={tick} alt='tick' width={56} /></button>
    </div>
    
    </div>
  )
}

export default Articles
