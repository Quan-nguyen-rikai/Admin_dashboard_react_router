import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-2xl font-semibold'>
        Dashboard
      </div>
      <div className='text-2xl font-semibold my-4'>
        About Page
      </div>
      <div>
        <Link to='list' className='text-blue-500 mr-4'>List Page</Link>
        <Link to='add' className='text-blue-500 mr-4'>Add Page</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default About