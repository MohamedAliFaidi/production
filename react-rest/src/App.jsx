
import './App.css'

import { Routes , Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Private from './components/Private'
import Public from './components/Public'


function App() {

  return (
   <>
   <Navbar />
   This the Home
     <Routes>
      <Route path='/login' element={<Public><Login/> </Public>} />
      <Route path='/register' element={<Public><Register/> </Public>} />
      <Route path='/private' element={<Auth><Private/></Auth>} />


     </Routes>
   </>
  )
}

export default App
