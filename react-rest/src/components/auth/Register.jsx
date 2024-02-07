import { useEffect, useState } from "react"
import { validateEmail, validatePasword } from "../../utils/validator"
import { register } from "../../service/auth.service"
function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = useState("false")
    const [passwordError, setpasswordError] = useState(false)
    const [passwordErrorMsg, setpasswordErrorMsg] = useState("false")


    const verifyAndSetEmail = (e) => {
        console.log(e.target.value)
        if (!validateEmail(e.target.value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        setEmail(e.target.value);
    }

    const verifyAndSetPassword = (e) => {
        if (!validatePasword(e.target.value)) {
            setpasswordError(true);
        } else if(validatePasword(e.target.value)){
            setPassword(false);
            setpasswordError("")
        }
        setPassword(e.target.value);
    }



    useEffect(() => {
        if (emailError) {
            setEmailErrorMsg("use valid email")
        }
        else {
            setEmailErrorMsg('')
        }
       
    }, [emailError])

    useEffect(() => {
      
        if (passwordError) {
            setpasswordErrorMsg("use strong password")
        }
        else {
            setpasswordErrorMsg('')
        }
    }, [passwordError])



    const handleRegister = async () => {
        const data = await register(email,password)
       

    }

    return (
        <div>
            <div>
                Regiter</div>
            <input onChange={verifyAndSetEmail} type="email" placeholder="email" />
            {emailErrorMsg}
            <input onChange={verifyAndSetPassword} type="password" placeholder="password" />
               {passwordErrorMsg}
            <button onClick={handleRegister} >Join</button>

        </div>
    )
}

export default Register