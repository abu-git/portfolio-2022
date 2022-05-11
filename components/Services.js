import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div className=' bg-slate-900 container sm:mt-16 mt-28 mx-auto'>
        <div className='flex justify-center mb-10'>
            <h2 className='font-thin text-center text-4xl text-cyan-500 mb-7'>Services</h2>
            <span className='ml-2 animate-bounce text-purple-500 font-serif text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
            </span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex justify-center text-cyan-500'>
                <div className='grid grid-cols-1 content-center'>
                    <ul className='list-decimal text-left mx-2'>
                        <li className='font-normal text-2xl py-3 mx-7'>
                            Develop <span className='text-lime-200'>web applications</span> for small businesses.
                        </li>
                        <li className='font-normal text-2xl py-3 mx-7'>
                            Provide <span className='text-cyan-100'>maintenance services</span> for deployed web applications.
                        </li>
                        <li className='font-normal text-2xl py-3 mx-7'>
                            <span className='text-indigo-300'>Create schema and deploy database</span> for business solutions.
                        </li>
                        <li className='font-normal text-2xl py-3 mx-7'>
                            <span className='text-purple-400'>Integrate secure domain and email</span> for better branding.
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className='flex justify-center mx-3 mb-5'>
                <Image className='rounded-xl' width={300} height={300} src='/services.png' objectFit='true' />
            </div>
            
        </div>
    </div>
  )
}

export default Services