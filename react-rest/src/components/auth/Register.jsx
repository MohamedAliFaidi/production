import { useEffect, useState } from "react"
import { validateEmail, validatePasword } from "../../utils/validator"
import { Link } from "react-router-dom";
import { register } from "../../service/auth.service"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = useState("false")
    const [passwordError, setpasswordError] = useState(false)
    const [passwordErrorMsg, setpasswordErrorMsg] = useState("false")


    const verifyAndSetEmail = (e) => {
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
        return await register(email,password)
    }

    return (
        // <div className="div" >

        // <div className="container" >
          
        //     <input onChange={verifyAndSetEmail} type="email" placeholder="email" />
        //     {emailErrorMsg}
        //     <input onChange={verifyAndSetPassword} type="password" placeholder="password" />
        //        {passwordErrorMsg}
        //     <button onClick={handleRegister} >Join</button>

        // </div></div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
        <Card color="transparent" shadow={false}>
         <Typography variant="h4" color="blue-gray">
           Register
         </Typography>
         <Typography color="gray" className="mt-1 font-normal">
           Welcome! Enter your details to Register.
         </Typography>
         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
           <div className="mb-1 flex flex-col gap-6">
             {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
               Your Name
             </Typography>
             <Input
               size="lg"
               placeholder="name@mail.com"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             /> */}
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Your Email
             </Typography>
             <Input
             onChange={(e) => {
               verifyAndSetEmail(e);
             }}
             name="email"
               size="lg"
               placeholder="name@mail.com"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
               required
             />
             <Typography variant="h6" color="blue-gray" className="-mb-3">
               Password
             </Typography>
             <Input
              onChange={(e) => {
                 verifyAndSetPassword(e);
               }} 
               name="password"
               required
               type="password"
               size="lg"
               placeholder="********"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
           </div>
           {/* <Checkbox
             label={
               <Typography
                 variant="small"
                 color="gray"
                 className="flex items-center font-normal"
               >
                 I agree the
                 <a
                   href="#"
                   className="font-medium transition-colors hover:text-gray-900"
                 >
                   &nbsp;Terms and Conditions
                 </a>
               </Typography>
             }
             containerProps={{ className: "-ml-2.5" }}
           /> */}
           <Button name="register" onClick={handleRegister} className="mt-6" variant="gradient" fullWidth>
             Register
           </Button>
           <Typography color="gray" className="mt-4 text-center font-normal">
             Already have an account?{" "}
             <Link name="login" to="/login" className="font-medium text-gray-900">
               Login
             </Link>
           </Typography>
         </form>
       </Card>
       </div>
    )
}

export default Register