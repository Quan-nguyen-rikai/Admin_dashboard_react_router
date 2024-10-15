import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex flex-col justify-center items-start'>
        <div className='text-white text-xl w-max py-4 pl-4 font-semibold'>
            <h1>
                Simple Admin
            </h1>
        </div>
        <div className='flex flex-col text-white font-sm w-full'>
            <Link to={"/"} className='px-5 py-2 hover:bg-[#087c6c] cursor-pointer'>
                Dashboard
            </Link>
            <Link to={"/about"} className='px-5 py-2 hover:bg-[#087c6c] cursor-pointe'>
                About 
                <span className='bg-orange-600 ml-2 px-2 pb-1 text-sm rounded-md items-center '>new</span>
            </Link>
            <Link to={"/contact"} className='px-5 py-2 hover:bg-[#087c6c] cursor-pointer'>
                Contact
            </Link>
            <Link to={"/error"} className='px-5 py-2 hover:bg-[#087c6c] cursor-pointer'>
                Error
            </Link>
            
           
        </div>
    </div>
  )
}

export default Nav