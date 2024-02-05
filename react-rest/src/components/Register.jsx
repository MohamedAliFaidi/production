import { useEffect, useState} from "react"
import axios from "axios"
import { validateEmail } from "../utils/validator"
function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = useState("false")

    
    const verifyAndSetEmail = (e) => {
        console.log(e.target.value)
          if (!validateEmail(e.target.value)) {
            setEmailError(true);
          } else {
            setEmailError(false);
          }
          setEmail(e.target.value);
        }
    
        useEffect(()=>{
            if(emailError) {
                setEmailErrorMsg("use valid email")
            }
            else {
                setEmailErrorMsg('')
            }
        }, [emailError])


    const handleRegister = async () => {
        const data = await axios.post("http://localhost:3000/register", { email: email, password: password })
        console.log(data)

    }

    return (
        <div>
            <div>
                Regiter</div>
            <input onChange={verifyAndSetEmail} type="email" placeholder="email" />
            {emailErrorMsg}
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} type="password" placeholder="password" />

            <button onClick={handleRegister} >Join</button>

        </div>
    )
}

export default Register