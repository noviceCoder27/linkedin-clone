import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAya8rvoYuz_FlQ-TcErBEu462BgkPPNn0",
    authDomain: "linkedin-clone-34659.firebaseapp.com",
    projectId: "linkedin-clone-34659",
    storageBucket: "linkedin-clone-34659.appspot.com",
    messagingSenderId: "1044621161746",
    appId: "1:1044621161746:web:f61bd1ae749135c55aefcb",
    measurementId: "G-Y4YBBVYSS6"
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app)

  const provider = new GoogleAuthProvider()




  export {db, auth, provider}