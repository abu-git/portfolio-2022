import React from 'react'

function Navbar() {
  return (
    <div className='bg-black container'>
        <div className='font-body py-4 px-8 rounded-sm shadow-md hover:shadow-lg hover:shadow-purple-500/50 bg-black shadow-cyan-500/50 fixed top-0 z-10 w-full'>
            <nav className='flex justify-between text-cyan-600 container mx-auto'>
                <div className='ripple-nav'><img className="object-cover w-8 h-8 rounded-full" src="/sam.jpg" alt="Profile image"/></div>
                <ul className='flex justify-between items-center w-1/2 px-3'>
                    <li className='font-light text-lg hover:text-purple-400 cursor-pointer'>Home</li>
                    <li className='font-light text-lg hover:text-purple-400 cursor-pointer'>Projects</li>
                    <li className='font-light text-lg hover:text-purple-400 cursor-pointer'>Services</li>
                    <li className='font-light text-lg hover:text-purple-400 cursor-pointer'>Contact</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar