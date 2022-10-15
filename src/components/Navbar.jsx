import React from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'> Brand</h1>
            </div>
        </div>


        <Bars3Icon className='w-5'/>
    </div>
  )
}

export default Navbar