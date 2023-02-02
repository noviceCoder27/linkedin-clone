import React from 'react'
import Linkedin from '../../assets/home-logo.svg'
import SearchIcon from '../../assets/search-icon.svg'
import HomePage from '../../assets/nav-home.svg'
import Jobs from '../../assets/nav-jobs.svg'
import Messaging from '../../assets/nav-messaging.svg'
import Network from '../../assets/nav-network.svg'
import Notifications from '../../assets/nav-notifications.svg'
import User from '../../assets/user.svg'
import UserContext from '../../utils/createContext'
import { useContext } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Navbar = () => {

  const matches = useMediaQuery('(min-width:700px)')

  let accountClicked = true
  const {logout} = useContext(UserContext)
  const logoutTopUp = () => {
      accountClicked = !accountClicked
      let logoutDiv = document.getElementById('logout')
      if(accountClicked) {
          logoutDiv.style.display = 'none'
      } else {
          logoutDiv.style.display = 'block'
      }
      
  }

  const userLogout = () => {
      logout()
  }

  return (
    <header className='px-2 h-fit flex sticky top-0 gap-4 items-center bg-white z-50 max-[800px]:justify-center max-[800px]:flex-wrap '>
        <img src = {Linkedin} alt = 'linedin-icon' className='w-10 min-[700px]:ml-auto '/>
        <div className='relative mr-auto'>
          <img src = {SearchIcon} alt = 'search-icon' className='absolute p-2'></img>
          <input type = 'text' className=' bg-slate-200 w-80 px-7 py-1 outline-blue-400'/>
        </div>
        {matches && 
        <div className='h-fit flex justify-evenly w-1/2 gap-2 flex-shrink'>
          <div className='flex flex-col  justify-end items-center border-b-4 border-white hover:border-black pt-4 flex-shrink opacity-60 hover:opacity-100 hover:cursor-pointer'>
          <img src={HomePage} alt="homepage icon"/>
            <p className = ' text-center text-gray-600 hover:text-black text-sm'>Home</p>
          </div>
       
          <div className='flex flex-col  justify-end items-center border-b-4 border-white hover:border-black flex-shrink opacity-60 hover:opacity-100 hover:cursor-pointer'>
          <img src={Jobs} alt="homepage icon"/>
            <p className = ' text-center text-gray-600 hover:text-black text-sm'>Jobs</p>
          </div>
          <div className='flex flex-col  justify-end items-center border-b-4 border-white hover:border-black flex-shrink opacity-60 hover:opacity-100 hover:cursor-pointer'>
          <img src={Messaging} alt="homepage icon" />
            <p className = ' text-center text-sm text-gray-600 hover:text-black'>My Messages</p>
          </div>
          <div className='flex flex-col  justify-end items-center border-b-4 border-white hover:border-black flex-shrink opacity-60 hover:opacity-100 hover:cursor-pointer'>
          <img src={Network} alt="homepage icon"/>
            <p className = ' text-center text-sm  hover:text-black'>My Network</p>
          </div>
          <div className='flex flex-col  justify-end items-center border-b-4 border-white hover:border-black flex-shrink opacity-60 hover:opacity-100 hover:cursor-pointer'>
          <img src={Notifications} alt="homepage icon"/>
            <p className = ' text-center text-gray-600 hover:text-black text-sm'>Notifications</p>
          </div>
         <div className='relative mt-4'>
         <div id = 'logout' className='absolute top-7 right-3 bg-slate-600 rounded-xl p-2 hidden '>
           <a className='text-red-300 cursor-pointer' onClick={userLogout}>Logout</a>
           </div>
         <img src={User} alt="user icon" className='cursor-pointer min-h-8 mb-1  rounded-full ' onClick={logoutTopUp} />
         </div>
         </div>
        }
    </header>
  )
}

export default Navbar