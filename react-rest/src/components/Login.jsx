import axios from "axios"
import { useState } from "react"

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = async () => {
        const data = await axios.post("http://localhost:3000/login", { email: email, password: password }, {
            withCredentials: true,
          })
   console.log(data)

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