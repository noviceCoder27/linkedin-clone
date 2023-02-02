import React from 'react'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './createContext'
import Login from '../components/Login'

const useAuth = () => {
    const {isAuth} = useContext(UserContext)
    return isAuth
}

const ProtectedRoutes = () => {
    const isLoggedIn = useAuth() 
  return (
    isLoggedIn ? <Outlet /> : <Login />
  )
}

export default ProtectedRoutes
