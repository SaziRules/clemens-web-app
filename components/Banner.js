import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'

function Banner() {
  return (
    <header className='sticky top-0 z-50 lg:hidden px-6 py-5  
    items-center shadow-sm'>
      <div className='border rounded-full shadow-md flex-grow items-center 
      py-3 cursor-pointer flex bg-white'>
        <div className='pl-4 items-center flex'>
          <SearchIcon className='h-7 text-gray-700' />
        </div>
        <div className='flex-grow pl-4'>
        <label className='flex text-sm '>Where to buy?</label>  
         <p className='flex-grow text-xs font-extralight text-gray-400'>Country . Province . City</p>
        </div>
      </div>
    </header>
  )
}

export default Banner

