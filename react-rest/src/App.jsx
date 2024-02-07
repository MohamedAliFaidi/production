import "./App.css";


import Navbar from "./components/Navbar";

import Body from "./components/Body";
import { useUser } from "./stores/userStore";
import { getSession } from "./service/auth.service";
import { useEffect } from "react";


function App() {
  const [user,setUser] = useUser((state) => [state.user ,state.setUser])
  useEffect(()=>{
    getSession().then(res=>{
        
    }).catch(err=>setUser({}))
  },[])

  return (
    <>
      <Navbar />
      this is the home page
         <Body/>   
    </>
  );
}

export default App;
