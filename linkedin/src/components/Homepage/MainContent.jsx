import React from 'react'
import User from '../../assets/user.svg'
import Background from '../../assets/background.jpg'
import Modal from './Modal'
import Posts from './Posts'
import { useState } from 'react'



const MainContent = () => {
  const [imgRef, setImgRef] = useState('')
  return (
    <>
      <div className= 'h-fit mb-4 bg-white p-2 rounded-xl'>
            <p className='text-center text-slate-500'>Share</p>
            <div className='h-12 flex justify-start mt-4 gap-5'>
              <img src = {User} className = 'max-h-full rounded-full'></img>
              <label htmlFor="my-modal-3" className=' sharePost border-2 w-full rounded-3xl pl-4 py-4 cursor-text flex items-center font-semibold text-gray-600'>
                Share a post 
              </label>
            </div>
            <Modal setImgRef = {setImgRef}/>
            <div className='flex justify-between m-2'>
              <div className='cursor-pointer p-2 hover:bg-slate-200'>
                <span className="fa-solid fa-image text-blue-400"></span>
                <span className='ml-1 text-blue-500'>Photo</span>
              </div>
              <div className='cursor-pointer p-2 hover:bg-slate-200'> 
                <span className="fa-brands fa-youtube text-green-400"></span>
                <span  className='ml-1 text-blue-500'>Video</span>
              </div>
              <div className='cursor-pointer p-2 hover:bg-slate-200'> 
                <span className="fa-solid fa-image text-yellow-400"></span>
                <span className='ml-1 text-blue-500'>Event</span>
              </div>
              <div className='cursor-pointer p-2 hover:bg-slate-200'> 
                <span className="fa-solid fa-newspaper text-red-400"></span>
                <span className='ml-1 text-blue-500'>Write article</span>
              </div>
            </div>
          </div>
          <Posts imgRef = {imgRef}/>
          <article className='h-fit bg-white my-4 rounded-xl'>
            <div className='p-2 h-2/3 flex gap-3'>
              <img src={User} alt="User Icon" className='h-16'/>
              <div className='leading-5'>
                <h5 className='font-bold '>Title</h5>
                <p className=' text-xs'>Info</p>
                <p className='text-xs'>Date</p>
              </div>
              <span className="fa-solid fa-ellipsis ml-auto pr-2"></span>
            </div>
            <p className='px-2 mb-2 font-bold'>Description</p>
            <img src={Background} alt="Sample Image"/>
            <div className='p-2'>
              <button className='px-4 bg-slate-200 border-2 border-gray-400 mr-3'>
                <span className=" like fa-regular fa-thumbs-up mr-1 text-blue-500"></span>
                <span className="fa-solid fa-hands-clapping mr-2 text-green-500"></span>
                <span>75</span>
              </button>
              <span className='text-sm text-gray-500'>2 comments</span>
            </div>
            <hr className='border-1 border-slate-400 w-full mb-2 '/>
            <div className="button-group btn-group m-2 w-full flex py-2 pl-2 pr-6">
              <button className="btn bg-slate-3 bg-white border-none flex-grow flex-shrink ">
                <span className=" like fa-regular fa-thumbs-up text-blue-500"></span>
                <span className='text-blue-500 ml-1'>Like</span>
              </button>
              <button className=" btn bg-white border-1 border-none flex-grow flex-shrink">
                <span className="comment fa-regular fa-comment-dots text-blue-500"></span>
                <span className='text-blue-500 ml-1'>Comment</span>
              </button>
              <button className=" btn bg-white border-1 border-none flex-grow flex-shrink">
                <span className="share fa-solid fa-reply text-blue-500"></span>
                <span className='text-blue-500 ml-1'>Send</span>
              </button>
              <button className="btn bg-white border-1 border-none flex-grow flex-shrink">
                <span className="send fa-brands fa-telegram text-blue-500"></span>
                <span className='text-blue-500 ml-1'>Share</span>
              </button>
            </div>
          </article>
    </>
  )
}

export default MainContent
