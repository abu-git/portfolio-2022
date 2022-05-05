import React, { useState, useEffect } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [closeIcon, setCloseIcon] = useState(false)

    const displayMenu = (e) => {
        e.preventDefault()
        if(mobileMenu === false){
            setMobileMenu(true)
            setCloseIcon(true)
        }else{
            setMobileMenu(false)
            setCloseIcon(false)
        }
    }

    useEffect(() => {

    },[mobileMenu])

    return (
        <div className='bg-black container'>
            <div className='font-body py-4 px-8 rounded-sm shadow-md hover:shadow-lg hover:shadow-purple-500/50 bg-black shadow-cyan-500/50 fixed top-0 z-10 w-full'>
                <nav className='flex justify-between text-cyan-600 container mx-auto'>
                    <div className='ripple-nav'>
                        <img className="object-cover w-8 h-8 rounded-full" src="/sam.jpg" alt="Profile image"/>
                    </div>

                    <ul className='hidden md:flex justify-between items-center w-1/2 px-3'>
                        <Link to='home' spy={true} smooth={true} offset={-50} duration={500} delay={500}>
                            <li className='font-light text-lg hover:text-purple-400 cursor-pointer'>Home</li>
                        </Link>
                        <Link to='projects' spy={true} smooth={true} offset={-20} duration={500} delay={500}>
                            <li className='font-light text-lg hover:text-purple-400 cursor-pointer'>Projects</li>
                        </Link>
                        <Link to='services' spy={true} smooth={true} offset={-20} duration={500} delay={500}>
                            <li className='font-light text-lg hover:text-purple-400 cursor-pointer'>Services</li>
                        </Link>
                        <Link to='contact' spy={true} smooth={true} duration={500} delay={500}>
                            <li className='font-light text-lg hover:text-purple-400 cursor-pointer'>Contact</li>
                        </Link>
                    </ul>

                    {mobileMenu === false &&
                    <button onClick={displayMenu} className='md:hidden hover:text-purple-400 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>}

                    {closeIcon === true &&
                    <button onClick={displayMenu} className='md:hidden  hover:text-purple-400 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>}
                </nav>
                
                {mobileMenu === true &&
                <ul className='md:hidden text-right font-light py-5'>
                    <Link to='home' spy={true} smooth={true} offset={-50} duration={500} delay={500}>
                        <li className='py-1 cursor-pointer text-cyan-500 hover:text-purple-500' onClick={displayMenu}>Home</li>
                    </Link>
                        
                    <Link to='projects' spy={true} smooth={true} duration={500} delay={500}>
                        <li className='py-1 cursor-pointer text-cyan-500 hover:text-purple-500' onClick={displayMenu}>Projects</li>
                    </Link>
                    <Link to='services' spy={true} smooth={true} duration={500} delay={500}>
                        <li className='py-1 cursor-pointer text-cyan-500 hover:text-purple-500' onClick={displayMenu}>Services</li>
                    </Link>
                    <Link to='contact' spy={true} smooth={true} duration={500} delay={500}>
                        <li className='py-1 cursor-pointer text-cyan-500 hover:text-purple-500' onClick={displayMenu}>Contact</li>   
                    </Link>
                          
                </ul>}
            </div>
        </div>
    )
}

export default Navbar