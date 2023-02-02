import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Homepage/Home';
import UserCredentials from './components/UserCredentials';
import SignUp from './components/SignUp';
import { UserContextProvider } from './utils/createContext';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {

  return (
    <UserContextProvider>
      <div className="App">
      <Router>
        <Routes>
          <Route element = {<ProtectedRoutes />}>
            <Route exact path='/' element = {<Home />}/>
          </Route>
          <Route exact path = "/login" element = {<Login />} />
          <Route exact path = "/login/userCredentials" element = {<UserCredentials />} />
          <Route exact path = "/login/signUp" element = {<SignUp />} />
        </Routes>
      </Router>
      </div>
    </UserContextProvider>
  )
}

export default App
