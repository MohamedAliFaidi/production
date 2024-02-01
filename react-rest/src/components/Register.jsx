import { useState } from "react"
import axios from "axios"
function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleRegister = async () => {
        const data = await axios.post("http://localhost:3000/register", { email: email, password: password })
   console.log(data)

    }

    return (
        <div>
            <div>
                Regiter</div>
            <input onChange={(e) => {
                setEmail(e.target.value)
            }} type="email" placeholder="email" />
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" placeholder="password" />

              <button onClick={handleRegister} >Join</button>

        </div>
    )
}

export default Register