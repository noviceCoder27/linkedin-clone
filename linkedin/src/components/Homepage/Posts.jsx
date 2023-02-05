import React from 'react'
import User from '../../assets/user.svg'
import Background from '../../assets/background.jpg'
import { db } from '../../firebase'
import { collection, getDocs, orderBy } from "firebase/firestore"
import { useState,useEffect } from 'react'

const Posts = ({imgRef}) => {
    useEffect(() => {
        getPosts()
      },[])
      const [userData, setUserData] = useState([])
  
      async function getPosts() {
        const userCollectionRef = collection(db, "posts")
        const data = await getDocs(userCollectionRef,orderBy('createdAt'))
        setUserData(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      }

        const posts = userData.map(data => (
            <div key = {data.id}>
                <article className='h-fit bg-white my-4 rounded-xl'>
            <div className='p-2 h-2/3 flex gap-3'>
              <img src={User} alt="User Icon" className='h-16'/>
              <div className='leading-5'>
                <h5 className='font-bold '>{localStorage.getItem('username')}</h5>
                <p className='text-xs'>{data?.createdAt.toDate().toUTCString()}</p>
              </div>
              <span className="fa-solid fa-ellipsis ml-auto pr-2"></span>
            </div>
            <p className='px-2 mb-2 font-bold'>Description</p>
            <p className='p-2'>{data?.content}</p>
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
            </div>
        ))

  return (
    <>
       {posts}
    </>
  )
}

export default Posts
