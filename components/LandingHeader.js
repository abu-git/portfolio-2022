

function LandingHeader() {
  return (
    <div className='bg-black container mx-auto mt-16'>
        <div name="home"></div>
        <header className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 mx-5'>
            <div className='flex justify-center'>
              <div className="mt-8 ripple">
                <img className="object-cover rounded-full" src="/sam.jpg" alt="Profile image"/>
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className="text-center font-thin lg:text-7xl text-3xl md:text-5xl text-purple-400 mt-6 md:mt-12 mb-1">Hi there,</h2> 
              <h3 className='text-center font-light text-2xl md:text-4xl lg:text-5xl text-cyan-600 mt-0 mb-2'>
                welcome to my portfolio.
              </h3>
            </div>
            <div name="projects"></div>
        </header>
        
    </div>
  )
}

export default LandingHeader