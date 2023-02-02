import React from 'react'
import { useState, useRef } from 'react'
import User from '../../assets/user.svg'
import ReactPlayer from 'react-player'

function Modal() {
    const [inputMediaField,setInputMediaField] = useState({img: false, video: false})
    const [videoURL, setVideoURL] = useState('')
  
    const imgRef = useRef(null)
    const inputRef = useRef(null)
    const closeImgRef = useRef(null)
    const postImage = (e) => {
        imgRef.current.style.display = 'block'
        const img = imgRef.current.lastChild
        if(e.target.files[0] === undefined) {
        closeImgRef.current.style.display = 'none'
        return
        } else {
        try {
            img.src = URL.createObjectURL(e.target.files[0])
        } catch(err) {
            console.log(err.message)
        }
        }
        closeImgRef.current.style.display = 'block'
        inputRef.current.style.display = 'none'
    }
   

    const deselectImg = () => {
        imgRef.current.style.display = 'none'
        const img = imgRef.current.lastChild
        img.src = ''
        inputRef.current.style.display = 'block'
        
    }
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white" >✕</label>
            <h3 className="text-lg font-bold text-slate-600">Create a post</h3>
            <hr className='my-2 border-slate-300'/>
            <section>
                <article className='px-6 flex flex-col gap-y-4 justify-center mt-8'>
                <div className='flex items-center gap-2'>
                    <img src={User} alt="user icon" className='cursor-pointer h-10 rounded-full '/>
                    <h4 className='font-bold'>{localStorage.getItem('username')}</h4>
                </div>
                <textarea placeholder = 'What do you want to talk about?' className=' mt-2 p-2 border-2 border-slate-300 h-32 w-full resize-none'></textarea>
                {inputMediaField.img && 
                <label className='cursor-pointer font-bold' ref = {inputRef} htmlFor = 'myImg'> 
                Select and image
                </label>}
                <input type="file" name="myImg" id="myImg" className = 'hidden' onChange = {postImage}/>
                {inputMediaField.video && 
                <>
                  <input type="text" name="myVideo" id="myVideo" placeholder='enter a URL'className='p-1 border-2  border-slate-300 rounded-md'onChange={(e) => setVideoURL(e.target.value)}/>
                  {videoURL && <ReactPlayer width = '100%'url = {videoURL}/>}
                </>
                }
                <div ref = {imgRef} className = 'relative hidden'>
                    <button className='absolute right-0 m-2  border-black border-[1px] text-black btn-circle font-bold hover:bg-black hover:text-white' ref = {closeImgRef} onClick = {deselectImg}>✕</button>
                    <img />
                </div>
                <div className='flex mt-8'>
                    <div className='flex items-center py-0 border-r-[1px]  border-r-slate-400 pr-2  mr-4'>
                    <button className='bg-gray-300 py-1 px-2 border-[1px] border-slate-500' onClick ={() =>setInputMediaField(prev => ({img: !prev.img, video: false}))}>
                    <span className="fa-solid fa-image text-gray-600"></span>
                    </button>
                    <button className='bg-gray-300 py-1 px-2 border-[1px] border-slate-500' onClick ={() =>setInputMediaField(prev => ({img:false, video: !prev.video}))}>
                    <span className="fa-brands fa-youtube text-gray-600"></span>
                    </button>
                    </div>
                    <div className='flex items-center'>
                    <button className='bg-gray-300 py-1 px-2 border-[1px] border-slate-500'>
                    <span className=" comment fa-regular fa-comment-dots text-gray-600"></span>
                    <span className='ml-1'>Anyone</span>
                    </button>
                    </div>
                    <button className='text-blue-700 px-4 py-2 rounded-2xl border-2 border-blue-500 ml-auto hover:bg-blue-500 hover:text-white'>Post</button>
                </div>
                </article>
            </section>
            
            </div>
        </div>
    </>
  )
}

export default Modal
