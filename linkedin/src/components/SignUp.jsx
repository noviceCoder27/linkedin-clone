import React from 'react'
import LinkeDin from '../assets/linkedin.png'
import ToggleView from '../assets/visible.png'
import { useState, useContext } from 'react'
import UserContext from '../utils/createContext'

const SignUp = () => {

    const [registerInfo, setRegisterInfo] = useState({username: '', password: '', verifyPassword: '', email: ''})

    const {register} = useContext(UserContext)
    
    const createUser = (e) => {
        e.preventDefault()
        if(registerInfo.password === registerInfo.verifyPassword) {
            register(registerInfo.email, registerInfo.password,registerInfo.username)   
        } else {
            alert('Password Mismatch')
        }
    }

    
    const showText = (id) => {
        let x_node = document.querySelectorAll('.password')
        let icon_node = document.querySelectorAll('.togglePassword')
        let x = Array.from(x_node)
        let icon = Array.from(icon_node)
        let [pass1, pass2] = x
        let [toggle1, toggle2] = icon
        
        if(id === 'pass1') {
            if(pass1.type === 'password') {
                pass1.type = 'text'
                toggle1.style.opacity = '1'
              } else {
                pass1.type = 'password'
                toggle1.style.opacity = '0.6'
              }
        } else if(id === 'pass2') {
            if(pass2.type === 'password') {
                pass2.type = 'text'
                toggle2.style.opacity = '1'
              } else {
                pass2.type = 'password'
                toggle2.style.opacity = '0.6'
              }
        }
        
      }

  return (
    <form className="form-control h-screen flex justify-center bg-slate-100">
        <img src = {LinkeDin} alt = 'Linkedin Logo' className='w-1/2 max-w-sm self-center'/>
        <div className="form-control w-full max-w-xs self-center my-3">
            <label className="label">
                <span className="label-text">Create username:</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={(e) => setRegisterInfo(prevInfo => ({...prevInfo,  username: e.target.value}))}/>
            <label className="label">
                <span className="label-text">Enter an email:</span>
            </label>
            <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setRegisterInfo(prevInfo => ({...prevInfo,  email: e.target.value}))}/>
            <label className="label relative">
                <span className="label-text">Create password:</span>
                <img src = {ToggleView} id = 'pass1' className = 'togglePassword absolute w-7 top-12 right-4 cursor-pointer opacity-60' onClick={(e) => showText(e.target.id)}/>
            </label>
            <input type="password" placeholder="Type here" className=" password input input-bordered w-full max-w-xs" onChange={(e) => setRegisterInfo(prevInfo => ({...prevInfo,  password: e.target.value}))}/>
            <label className="label relative">
                <span className="label-text">Verify password:</span>
                <img src = {ToggleView} id = 'pass2' className = 'togglePassword absolute w-7 top-12 right-4 cursor-pointer opacity-60' onClick={(e) => showText(e.target.id)}/>
            </label>
            <input type="password" placeholder="Type here" className=" password input input-bordered w-full max-w-xs" onChange={(e) => setRegisterInfo(prevInfo => ({...prevInfo,  verifyPassword: e.target.value}))}/>
            
        </div>
       
        <button className='btn ml-auto mr-auto my-2 bg-slate-100 border-blue-800 rounded-3xl py-0 px-8 text-blue-800 font-bold hover:bg-[#ddddff] hover:border-blue-800' onClick={(e) => createUser(e)}>Sign up</button>
        <div className='text-center mt-2'>Already have an account? <a href = '/login/userCredentials' className='text-blue-500 hover:text-blue-800'>Sign in</a></div>
</form>
  )
}

export default SignUp