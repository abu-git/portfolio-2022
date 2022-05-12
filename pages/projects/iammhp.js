import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '../../components/Footer'


function Tunesketch() {
  return (
    <div>
        <Head>
            <title>Samuel Abu | Portfolio | iamMHP</title>
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
                            <h4 className='text-xl md:text-2xl font-bold text-center sm:mt-10 md:mt-7 lg:mt-20 mx-2 lg:mx-5'>A Multi-Page Web Application</h4>

                            <p className='mt-7 lg:mt-10 font-light text-lg lg:text-xl text-center mx-2 lg:mx-5'>iamMHP was made using Node.js, Express, Express-Handlebars and MongoDB. I made use of multiple routes to display different information and a MongoDB database to store subscriber emails.</p>

                            <p className='mt-7 lg:mt-10 font-light text-lg lg:text-xl text-center mx-2 lg:mx-5'>The application serves a musician and his community with a one-stop for all details and information about the artist “iamMHP”. It is successfully deployed on Heroku.</p>

                            <p className='mt-7 lg:mt-10 font-light text-lg lg:text-xl text-center mx-2 lg:mx-5'>
                                View Application: 
                                <a target="_blank" href="https://www.iammhp.com" rel="noreferrer">
                                    <span className='text-yellow-300 hover:text-purple-500 ml-1 cursor-pointer'>iamMHP</span>
                                </a>
                            </p>

                            <h4 className='mt-5 mb-4 text-center text-lg lg:text-xl font-thin'>Technologies used: </h4>

                            <div className='mt-3 sm:mb-10 md:mb-7 lg:mb-10 flex justify-center'>

                                <svg className='w-7 h-7 mr-3 fill-green-600 hover:fill-green-400' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>

                                <svg className='w-7 h-7 mr-3 fill-slate-700 hover:fill-slate-500' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Express</title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
                
                                <svg className='w-7 h-7 mr-3 fill-amber-900 hover:fill-amber-700' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Handlebars.js</title><path d="M9.1 4.948a3.45 3.45 0 0 0-.398.014C6.32 5.15 5.373 6.375 4.802 6.9c-.572.525-1.656 1.763-2.376 1.545-.721-.217-.924-1.107-.67-1.381s.454-.225.613 0c.097.18.145.383.14.587a1.36 1.36 0 0 0 .438-.665.792.792 0 0 0-.443-1.017c-1.3-.659-2.139.514-2.26.787-.122.273-.336.707-.2 1.695.135.989.612 1.902 2.104 2.261a6.31 6.31 0 0 0 4.238-.495l4.41-1.84a5.408 5.408 0 0 1 .556-.101v9.864c0 .506.316.913.708.913.391 0 .707-.407.707-.913V8.29a5.408 5.408 0 0 1 .437.088l4.41 1.84a6.31 6.31 0 0 0 4.238.494c1.492-.36 1.969-1.272 2.105-2.26.135-.989-.08-1.423-.2-1.696-.122-.273-.962-1.446-2.261-.787a.792.792 0 0 0-.443 1.017c.076.26.229.492.437.665a1.19 1.19 0 0 1 .141-.587c.159-.225.359-.274.613 0s.051 1.164-.67 1.382c-.72.217-1.804-1.02-2.376-1.546-.571-.525-1.518-1.75-3.9-1.938A3.45 3.45 0 0 0 12 6.653a3.45 3.45 0 0 0-2.9-1.705zm12.39 2.703v.004l.006.002c-.002-.002-.004-.004-.006-.004zm-18.98 0c-.002.002-.004.004-.006.004l.006-.001V7.65z"/></svg>

                                <svg className='w-7 h-7 mr-3 fill-green-600 hover:fill-green-400' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>

                                <svg className='w-7 h-7 mr-3 fill-yellow-600 hover:fill-yellow-400' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg> 

                                <svg className='w-7 h-7 fill-indigo-600 hover:fill-indigo-400' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Heroku</title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"/></svg>
                    </div>
                        </main>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-fit h-fit mt-2 md:mt-16 mb-5 pb-5 overflow-hidden rounded-md shadow-md text-cyan-500 shadow-cyan-500/50 hover:shadow-purple-500/50 mx-5'>
                            <a target="_blank" href="https://iammhp.com/" rel="noreferrer">
                            <Image src="/mhp.jpg" height={533} width={533} alt="tunesketch" objectcover="true" />
                            <h3 className='text-center mt-2 mb-2 text-2xl uppercase font-light px-6'>Multi-Page Musician Web Application</h3>
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