import React from 'react'

function Contact() {
  return (
    <div className='mt-24 container mx-auto'>
        <div name="contact"></div>
        <div className='flex justify-center mb-10 mx-5'>
            <h2 className='font-thin text-center text-4xl text-cyan-500 mb-7'>Contact</h2>
            <span className='ml-2 animate-bounce text-purple-500 font-serif text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            </span>
        </div>
        <div className='flex justify-center mx-6'>
            <form className='w-96'>
                <div className='mb-6'>
                    <input className="appearance-none bg-transparent border-b-2 border-cyan-400 w-full text-purple-500 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-purple-400" type="text" placeholder="Jane Doe" aria-label="Full name"/>
                </div>
                <div className='mb-6'>
                    <textarea rows="8" className="appearance-none bg-transparent border-b-2 border-cyan-400 w-full text-purple-500 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-purple-400" type="text" placeholder="Your message..." aria-label="Full name" />
                </div>
                <div className='mb-4 flex justify-end'>
                    <button className='bg-cyan-600 hover:bg-purple-500 shadow-md hover:shadow-lg shadow-cyan-500/60 hover:shadow-purple-500/70 border-2 border-black text-black text-semibold text-lg py-1 px-2 rounded'>Send Message!</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Contact