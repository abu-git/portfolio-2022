import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '../../components/Footer'


function Tunesketch() {
  return (
    <div>
        <Head>
            <title>Samuel Abu | Portfolio | Tufcat Books</title>
        </Head>

        <div className='bg-slate-900 text-cyan-500 container mx-auto'>
            <header className='mx-5'>
                <Link href="/">
                    <div className='flex hover:text-purple-500 w-fit cursor-pointer'>
                        <span className='mt-10 text-left'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </span>
                        <h3 className='mt-10 text-md  ml-2'>Back to home</h3>
                    </div>
                </Link>
            </header>

            <section className='sm:mt-10 md:mt-20 lg:mt-14 sm:mb-7 md:mb-60 lg:mb-7 mx-1 lg:mx-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                    <div className='m-9'>
                        <main>
                            <h4 className='text-xl md:text-2xl font-bold text-center sm:mt-10 md:mt-7 lg:mt-20 mx-2 lg:mx-5'>Book Availability Display Application</h4>

                            <p className='mt-7 lg:mt-10 font-light text-lg lg:text-xl text-center mx-2 lg:mx-5'>TufCatBooks was made using React.js and Material UI. It is an ongoing project for an NGO that caters to feral cats using the proceeds from books sales. The web application is a small demo that shows available books, unavailable books and prices. </p>

                            {/*<p className='mt-7 lg:mt-10 font-light text-lg lg:text-xl text-center mx-2 lg:mx-5'>Passport was used for Signup/Register functionality and passwords were encrypted. It is successfully deployed on Heroku.</p>*/}

                            <p className='mt-7 lg:mt-10 font-light text-lg lg:text-xl text-center mx-2 lg:mx-5'>
                                View Application: 
                                <a target="_blank" href="https://tufcat-books.herokuapp.com/" rel="noreferrer">
                                    <span className='text-yellow-300 hover:text-purple-500 ml-1 cursor-pointer'>Tufcat Books</span>
                                </a>
                            </p>

                            <h4 className='mt-5 mb-4 text-center text-lg lg:text-xl font-thin'>Technologies used: </h4>

                            <div className='mt-3 sm:mb-10 md:mb-7 lg:mb-10 flex justify-center'>
                                <svg className='w-7 h-7 mr-3 fill-teal-500 hover:fill-teal-300' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>

                                <svg className='w-7 h-7 mr-3 fill-slate-600 hover:fill-slate-400' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Material Design</title><path d="M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12 12-5.377 12-12S18.623 0 12 0zm0 .75c2.871 0 5.482 1.082 7.469 2.85H4.53A11.197 11.197 0 0 1 12 .75zm-7.186 3.6h14.372L12 18.723 4.814 4.35zM3.6 4.53V19.47A11.197 11.197 0 0 1 .75 12c0-2.87 1.082-5.481 2.85-7.468zm16.8 0A11.197 11.197 0 0 1 23.25 12c0 2.871-1.082 5.482-2.85 7.469V4.53zM4.35 5.1l7.275 14.55H4.35V5.1zm15.3 0v14.55h-7.275L19.651 5.1zM4.533 20.4H19.469A11.197 11.197 0 0 1 12 23.25a11.197 11.197 0 0 1-7.468-2.85z"/></svg>

                                <svg className='w-7 h-7 fill-indigo-600 hover:fill-indigo-400' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Heroku</title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"/></svg>                       
                            </div>
                        </main>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-fit h-fit mt-2 md:mt-16 mb-5 pb-5 overflow-hidden rounded-md shadow-md text-cyan-500 shadow-cyan-500/50 hover:shadow-purple-500/50 mx-5'>
                            <a target="_blank" href="https://tufcat-books.herokuapp.com/" rel="noreferrer">
                            <Image src="/tufcat.jpg" height={533} width={533} alt="tunesketch" objectcover="true" />
                            <h3 className='text-center mt-2 mb-2 text-2xl uppercase font-light px-6'>Simple Book Availability Display Service</h3>
                            </a>
                        </div>
                    </div>
                    
                    
            
                </div>
            </section>
        </div>

        <Footer />

    </div>
  )
}

export default Tunesketch