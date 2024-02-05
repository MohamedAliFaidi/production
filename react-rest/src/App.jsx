
import './App.css'

import { Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Private from './components/Private'


function App() {

  return (
   <>
   <Navbar />
     <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/private' element={<Auth><Private/></Auth>} />


     </Routes>
   </>
  )
}

export default App
