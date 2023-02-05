import React, { useState, createContext, useEffect } from "react"
import { db,auth, provider } from "../firebase"
import { collection, addDoc,serverTimestamp } from "firebase/firestore"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    signInWithPopup,
    onAuthStateChanged,
 } from "firebase/auth"


const UserContext = createContext('')  //create 



export const UserContextProvider = ({children}) => {  //Provide 
    const [user, setUser] = useState({})
    const [isAuth,setIsAuth] = useState(localStorage.getItem('isAuth') || false)

    useEffect(() => {
        onAuthStateChanged(auth ,currentUser => {
            setUser(currentUser)
        })
    },[])
     

    const register = async (email,password,username) => {   
        try {
            const registerUser = await createUserWithEmailAndPassword(auth, email, password)
            const user = registerUser.user
            localStorage.setItem('username',username)
            setUser(user)
            setIsAuth(true)
            window.location.href = '/'
        } catch(error) {
            console.log(error.message)
        }
        
    }


    const login = async (email,password,username) => {
        try {
            const loginUser = await signInWithEmailAndPassword(auth, email, password)
            const user = loginUser.user
            localStorage.setItem('isAuth', true)
            localStorage.setItem('username', username)
            setUser(user)
            setIsAuth(true)
            window.location.href = '/'
        } catch(error) {
            console.log(error.message)
        }
           
        
       
    }

    const googleAuth = async () => {
        try {
            const loginUser = await signInWithPopup(auth, provider)
            const user = loginUser.user
            localStorage.setItem('isAuth', true)
            setUser(user)
            setIsAuth(true)
            window.location.href = '/'
        } catch(error) {
            console.log(error.message)
        }
            
    }
    
    const logout = () => {
        localStorage.clear()
        signOut(auth)
        setIsAuth(false)
        setUser({})
        window.location.href = '/login'
    }

    const addPost = async (userInput,videoURL) => {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
              content: userInput,
              videoURL,
              createdAt: serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const values = {
        user,
        setUser,
        isAuth,
        setIsAuth,
        register,
        login,
        logout,
        googleAuth,
        addPost,
    }

    return <UserContext.Provider value = {values}>{children}</UserContext.Provider>
}


export default UserContext 

// useContext hook to consume