import React from 'react'
import HomePage from '../../assets/nav-home.svg'
import Jobs from '../../assets/nav-jobs.svg'
import Messaging from '../../assets/nav-messaging.svg'
import Network from '../../assets/nav-network.svg'
import Notifications from '../../assets/nav-notifications.svg'
import User from '../../assets/user.svg'
import UserContext from '../../utils/createContext'
import { useContext } from 'react'

const Footer = () => {

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
    <footer className='mt-auto sticky py-2 bottom-0 bg-white'>
        <nav className='flex items-center justify-evenly h-10'>
          <img src={HomePage} alt="homepage icon" className = 'opacity-60 hover:opacity-100 hover:cursor-pointer'/>
          <img src={Network} alt="network icon" className = 'opacity-60 hover:cursor-pointer hover:opacity-100'/>
          <img src={Jobs} alt="jobs icon" className = 'opacity-60 hover:cursor-pointer hover:opacity-100'/>
          <img src={Messaging} alt="messaging icon" className = 'opacity-60 hover:cursor-pointer hover:opacity-100'/>
          <img src={Notifications} alt="notifications icon" className = 'opacity-60 hover:cursor-pointer hover:opacity-100'/>
          <div className='relative'>
          <div id = 'logout' className='absolute -top-8 right-5 bg-slate-600 rounded-xl p-2 hidden'>
            <a className='text-red-300 cursor-pointer' onClick={userLogout}>Logout</a>
            </div>
          <img src={User} alt="user icon" className='cursor-pointer mb-1 w-8 rounded-full' onClick={logoutTopUp} />
          </div>
         
        </nav>
    </footer>
  )
}

export default Footer