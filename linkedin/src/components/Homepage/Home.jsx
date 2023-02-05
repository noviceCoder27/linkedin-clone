import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import RightSection from './RightSection'
import MainContent from './MainContent'
import { useMediaQuery } from 'usehooks-ts'

const Home = () => {
  const matches = useMediaQuery('(min-width: 700px)')

  return (
    <div className='overflow-visible'>
      <Navbar />
      <main className='content bg-slate-200 overflow-visible'>
        <div className='flex flex-wrap p-4 justify-center text-lg'>
          <a href = '/' className=' text-blue-700 underline text-center font-bold'>Hiring in a hurry? - </a>
          <a href = '/' className='underline text-center'>Find talented pros in record time with Upwork and keep business moving.</a>
        </div>
        {matches && 
        <section className= 'grid grid-cols-4 overflow-visible'>
          <div className='p-4 h-fit sticky top-16'>
            <Sidebar />
          </div>
          <div className='p-4 col-span-2'>
            <MainContent />
          </div>
          <div className='p-4 h-fit sticky top-16'>
            <RightSection />
          </div>
        </section>}
        {!matches && 
        <section className='p-4'>
          <Sidebar />
          <MainContent />
          <RightSection />
        </section>}  
      </main>
      {!matches && <Footer />}
    </div>
    
  )
}

export default Home