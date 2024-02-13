import "./App.css";


import Navbar from "./components/layouts/Navbar";

import Body from "./components/layouts/Body";
import { useUser } from "./stores/userStore";
import { getSession } from "./service/auth.service";
import { useEffect } from "react";
import './App.css'
import Footer from "./components/layouts/Footer";
import toast from "react-hot-toast";


function App() {
  
  const [user,setUser] = useUser((state) => [state.user ,state.setUser])
  useEffect(()=>{
    getSession().then(res=>{ 
    }).catch(err=>setUser({}))
  },[])

  return ( 
  
  <div>
    <Navbar />
    <Body/>
    <Footer/>
    <button onClick={()=>{
      toast.success("ok")
    }}>success</button>

      <button onClick={()=>{
        toast.error("not ok")
      }}>error</button>

<button onClick={()=>{
        toast('Good job!' , {
          icon:"<3"
        })
      }}>promise</button>
    </div>
  );
}

export default App;
