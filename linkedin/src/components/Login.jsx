import React from 'react'
import LoginHero from '../assets/login-hero.svg'
import LinkeDin from '../assets/linkedin.png'
import GoogleIcon from '../assets/google.svg'
import { useMediaQuery } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../utils/createContext'

const Login = () => {

    const {googleAuth} = useContext(UserContext)
    const matches = useMediaQuery('(min-width: 700px)')
    const navigate = useNavigate()
    const signIn = () => {
        navigate('/login/userCredentials')
    }

    const login = () => {
        googleAuth()
    }

    const openModal = (
        <>
         <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Be a part Of the LinkeDin Community!</h3>
                <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <hr className=' border-gray-300 mt-3'/>
                <p className="py-4">Please sign in with your valid credentils to be able to access all the features of linkeDin!</p>
                <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn rounded-xl" onClick={signIn}>Sign in</label>
                </div>
            </div>
        </div>
        </>
    )

  return (
    <div className= {matches ? 'flex flex-col bg-slate-100 relative' : ' bg-slate-100 flex flex-col'}>
        <header className= {matches ? 'w-full flex flex-auto align-middle mb-28 px-12 py-4' : 'w-full flex flex-auto align-middle mb-8'}>
             <img src = {LinkeDin} alt = 'linkedin-logo' className = 'w-44 p-3' />
             <div className='flex ml-auto gap-2 p-3 mr-2'>
                <label htmlFor="my-modal-6" className='btn bg-slate-100 border-none rounded-3xl py-0 px-6 text-gray-800 font-bold hover:bg-slate-300'>Join now</label>
                <button className='btn bg-slate-100 border-blue-800 rounded-3xl py-0 px-8 text-blue-800 font-bold hover:bg-[#ddddff] hover:border-blue-800 ' onClick={signIn}>Sign in</button>
            {/*  Open the modal box */ }
             {openModal} 
            </div>
            
        </header>
        <main className= {matches ? 'grid grid-cols-2 h-screen overflow-hidden relative' : 'flex flex-col'}>
            <div className='flex flex-col'>
                 <h1 className= {matches ? 'text-5xl text-blue-600 leading-12 p-4 pl-14' : 'text-center text-blue-600 p-4 text-xl'}>Welcome to your professional community</h1>
                 {matches && <button className='btn w-80 self-start ml-16 mx-12 mt-20 rounded-3xl bg-white text-gray-700 border-gray-700 hover:bg-gray-300' onClick={login}>
                <img src = {GoogleIcon} alt = 'google-icon'/>
                <span className='ml-1'>Sign in with Google</span>
                </button>}
            </div>
            <img src = {LoginHero} alt = 'login-hero-img' className= {matches?'absolute w-1/2 -right-10 overflow-hidden': ''}/>
            {!matches && <button className='btn m-4 rounded-3xl bg-white text-gray-700 border-gray-700 hover:bg-gray-300'>
                <img src = {GoogleIcon} alt = 'google-icon'/>
                <span className='ml-1'>Sign in with Google</span>
                </button>}
        </main>
    </div>

//     {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}

  )
}

export default Login