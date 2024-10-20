import React from 'react'
import Image from 'next/image'
import { 
    SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
    GlobeAltIcon, 
} from '@heroicons/react/solid'
import logo from '@/assets/logo.png'
import Link from 'next/link'

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'About us', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Health tips', href: '/health-tips' },
  { name: 'Contact us', href: '/contact' },
];

function Header() {
  return (
    <nav className='hidden sticky top-0 z-50 lg:grid grid-cols-[25%_50%_25%] bg-white 
    border justify-between p-4 md:px-20'>
      {/* Left */}
      <Link 
        href='/'
        className='relative flex items-center mt-[-20px] mb-[-60px] cursor-pointer my-auto'>
        <Image src={logo}
        width={130}
        height={150}
        objectPosition='left' />
      </Link>

      {/* Middle */}
      <div className='flex-grow md:flex items-center justify-between md:border md:shadow-sm rounded-full py-1
        md:hover:shadow-md transition duration-300 ease-out hover:divide-x-0 px-1'>
        {navLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.href}
            className='hover:bg-gray-100 transition duration-300 ease-out rounded-full p-3
             active:bg-[#237DC0] active:text-white text-gray-700 ml-[4px] mr-[2px]'>
            <p className='hidden px-2 text-sm md:hidden lg:inline  
            cursor-pointer'>{link.name}</p>
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className='flex space-x-1 items-center justify-end'>
        <div className='hover:bg-gray-100 transition duration-300 ease-out rounded-full p-3
         active:bg-[#237DC0] active:text-white text-gray-700'>
            <p className='hidden px-2 text-sm md:hidden lg:inline  
            cursor-pointer' >Buy Online</p>
        </div>
        <div className='hover:bg-gray-100 transition duration-300 ease-out rounded-full p-3
         active:bg-[#237DC0] text-gray-500 active:text-white'>
        <GlobeAltIcon className='h-5  cursor-pointer' />
        </div>

        <div className='flex items-center space-x-0.8 border p-0.5 rounded-full 
        hover:shadow-md cursor-pointer transition ease-out duration-300'>
            <MenuIcon className='h-4 text-gray-900 mx-2 active:text-[#237DC0] transition 
            ease-out duration-300' />
            <UserCircleIcon className='h-10 text-gray-500 mx-0.5 active:text-[#237DC0] transition 
            ease-out duration-300' />
        </div>
      </div>
      
    </nav>
  )
}

export default Header
