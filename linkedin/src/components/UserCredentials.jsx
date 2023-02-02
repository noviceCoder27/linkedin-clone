import React from 'react'
import LinkeDin from '../assets/linkedin.png'
import ToggleView from '../assets/visible.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../utils/createContext'
import { useState } from 'react';


const UserCredentials = () => {
    const [loginInfo, setLoginInfo] = useState({username: '', password: '', email: ''})
    const navigate = useNavigate()
    const coverPage = () => {
        navigate('/login')
    }

    const {login} = useContext(UserContext) 

    const showText = () => {
      let x = document.getElementById('password')
      let icon = document.getElementById('togglePassword')

      if(x.type === 'password') {
        x.type = 'text'
        icon.style.opacity = '1'
      } else {
        x.type = 'password'
        icon.style.opacity = '0.6'
      }
    }

    const userLogin = (e) => {
      e.preventDefault()
      login(loginInfo.email, loginInfo.password,loginInfo.username)
    }

  return (
    <>  
        <button className=' h-12 w-12 btn absolute rounded-full top-2 left-2 font-extrabold text-2xl text-blue-500 bg-slate-200 border-blue-500 shadow-[0_10px_100px_12px_rgba(0,0,100,0.8)] hover:bg-blue-300 hover:border-blue-500 hover:text-white' onClick={coverPage}>&#8592;</button>
        <form className="form-control h-screen flex justify-center bg-slate-100">
            <img src = {LinkeDin} alt = 'Linkedin Logo' className='w-1/2  max-w-sm self-center'/>
            <div className='self-center flex flex-col gap-3 mt-10 mb-4 w-2/3'>
                <label className="input-group">
                <span className='w-28'>Username</span>
                <input type="text" placeholder="enter your username" required className="input input-bordered flex-grow" onChange={(e) => setLoginInfo(prevInfo => ({...prevInfo,  username: e.target.value}))} />
                </label>
                <label className="input-group">
                <span className='w-28'>Email</span>
                <input type="email" placeholder="info@site.com" required className="input input-bordered flex-grow" onChange={(e) => setLoginInfo(prevInfo => ({...prevInfo,  email: e.target.value}))}/>
                </label>
                <label className="input-group relative">
                  <span className='w-28'>Password</span>
                  <input type="password" id = "password" placeholder="enter your password" required className="input input-bordered flex-grow " onChange={(e) => setLoginInfo(prevInfo => ({...prevInfo,  password: e.target.value}))}/>
                  <img src = {ToggleView} className = 'absolute w-7 top-3 right-4 cursor-pointer opacity-60' id = 'togglePassword'onClick={showText}/>
                </label>
                
            </div>
        
            <button className='btn ml-auto mr-auto my-2 bg-slate-100 border-blue-800 rounded-3xl py-0 px-8 text-blue-800 font-bold hover:bg-[#ddddff] hover:border-blue-800' onClick={(e) => {userLogin(e)}}>Sign in</button>
            <div className='text-center'>Not a member? <a href ='/login/signUp' className=' text-blue-600 hover:text-blue-800'>Register Now</a></div>
    </form>
</>
  )
}

export default UserCredentials