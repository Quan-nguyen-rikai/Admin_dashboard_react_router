import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Layout = () => {
  return (
    <div className='flex h-screen'>
        <nav className='w-1/6 bg-[#08948c]'>
            <Nav/>
        </nav>
        <main className='flex-1 p-6'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout