import axios from "axios"
import { useState } from "react"
import { useUser } from "../stores/userStore"
import { useNavigate } from "react-router-dom"
function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const [user,setUser] = useUser((state)=>[state.user,state.setUser])

    const handleLogin = async () => {
        const res = await axios.post("http://localhost:3000/login", { email: email, password: password }, {
            withCredentials: true,
          })
          console.log(res)

          if(res.data.user){
            setUser(res.data.user)
            navigate("/private")
          }


          console.log(user)

    }

    return (
        <div>
            <div>
                Login</div>
            <input onChange={(e)=>{
                setEmail(e.target.value)
            }} type="email" placeholder="email" />
            <input onChange={(e)=>{
   setPassword(e.target.value)
            }} type="password" placeholder="password" />


<button onClick={handleLogin} >Login</button>

        </div>
    )
}

export default Login