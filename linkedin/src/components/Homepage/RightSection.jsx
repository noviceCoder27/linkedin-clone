import React from 'react'
import Ad from '../../assets/ad.jpg'
import { useMediaQuery } from 'usehooks-ts'

const RightSection = () => {
    const matches = useMediaQuery('(min-width:700px)')
  return (
    <>
        <div className='h-fit p-2 bg-white rounded-xl'>
            <div className='leading-8'>
              <h4 className='text-gray-600 font-semibold'>Add to your feed</h4>
              <div className='flex h-fit mt-2 mb-3 gap-3 items-center flex-wrap'>
                <span className='bg-slate-500 p-1 h-10 w-10 rounded-full'>
                  <span className='bg-gray-300 h-8 flex justify-center rounded-full w-8 font-extrabold text-slate-900 text-2xl'>#</span>
                </span>
                <span className={matches ?'flex flex-wrap': ''}>
                  <p className='ml-2 font-bold'>#Linkedin</p>
                  <button className='border-2 border-black px-4 ml-2 rounded-xl hover:bg-slate-200'>Follow</button>
                </span>
              </div>
              <div className='flex h-fit mb-2 gap-3 items-center flex-wrap'>
                <span className='bg-slate-500 p-1 h-10 w-10 rounded-full'>
                  <span className='bg-gray-300 h-8 flex justify-center rounded-full w-8 font-extrabold text-slate-900 text-2xl'>#</span>
                </span>
                <span className={matches ?'flex flex-wrap': ''}>
                  <p className='ml-2 font-bold'>#Linkedin</p>
                  <button className='border-2 border-black px-4 ml-2 rounded-xl hover:bg-slate-200'>Follow</button>
                </span>
              </div>
              <div className= 'border-2 border-white w-fit hover:border-b-blue-600'>
                <a href = '/' className='text-blue-600 '>View all recommendations </a>
                <span className='text-blue-600'>&rarr;</span>
              </div>
            </div>
        </div>
        <div className='bg-white p-6 mt-4 rounded-xl'>
            <p className='text-slate-600 mb-2'>Ads:</p>
            <img src={Ad} alt="Linkedin Ad" className='w-full h-max-full'/>
        </div>
    </>
  )
}

export default RightSection