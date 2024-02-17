import "./App.css";


import Navbar from "./components/layouts/Navbar";

import Body from "./components/layouts/Body";
import { useUser } from "./stores/userStore";
import { getSession } from "./service/auth.service";
import { useEffect } from "react";
import './App.css'
import Footer from "./components/layouts/Footer";


function App() {
  
  const [user,setUser] = useUser((state) => [state.user ,state.setUser])
  useEffect(()=>{
   if(document.cookie.split("=").includes('Authorization')){
    getSession().then(res=>{ 
    }).catch(err=>setUser({}))}
  },[])

  return ( 
  
  <div>
    <Navbar />
    <div style={{height:"90%"}}>  <Body/></div>
    <Footer/>
    </div>
  );
}

export default App;
