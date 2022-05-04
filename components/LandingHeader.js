

function LandingHeader() {
  return (
    <div className='bg-black container mt-22 mx-auto'>
        <header className='flex justify-between w-full mt-16'>
            <div className='h-64 w-1/2'>
              <h2 className="text-center font-thin text-7xl text-purple-400 mt-12 mb-1">Hi there,</h2> 
              <h3 className='text-center font-extralight text-5xl text-cyan-600 mt-0 mb-2'>
                welcome to <span className="text-orange-500 text-6xl">Sam's</span> portfolio.
              </h3>
            </div>
            <div className='w-1/2 flex justify-center'>
              <img className="inline object-cover w-48 h-48 mt-8 rounded-full" src="/sam.jpg" alt="Profile image"/>
            </div>
        </header>
    </div>
  )
}

export default LandingHeader