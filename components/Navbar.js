import React from 'react'

function Navbar() {
  return (
    <div className='bg-black container'>
        <div className='font-body py-4 px-8 rounded shadow-md hover:shadow-lg hover:shadow-purple-500/50 bg-black shadow-cyan-500/50 fixed top-0 z-10 w-full'>
            <nav className='flex justify-between text-cyan-600 container mx-auto'>
                <h1 className='font-light text-3xl'>Abu's</h1>
                <ul className='flex justify-between items-center w-1/2 px-3'>
                    <li className='font-light hover:text-purple-400'>Home</li>
                    <li className='font-light hover:text-purple-400'>Projects</li>
                    <li className='font-light hover:text-purple-400'>Services</li>
                    <li className='font-light hover:text-purple-400'>Contact</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar