import Head from 'next/head'

import Navbar from '../components/Navbar'
import Header from '../components/LandingHeader'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div>
      <div className='bg-black'>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='bg-black'>
          <Navbar />
          <Header />
          <Projects />
        </div>
      </div>
      
      

    </div>
  )
}