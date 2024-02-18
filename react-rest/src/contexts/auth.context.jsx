import { createContext } from "react";
import * as Yup from "yup";
import { useUser } from "../stores/userStore";
import { login } from "../service/auth.service";
import toast from "react-hot-toast";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [setUser] = useUser((state) => [state.setUser]);
  const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Required").matches(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Invalid email"),
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  });
  const handleLogin =  (email, password) => {
 
      login(email, password).then(res=>{
          if (res && res.data?.user) {
            setUser(res.data.user);
            toast.success(`Welcome back ${res.data.user.email.split("@")[0]}`)
          }
          else {
            toast.error(res.response.data.message)
          }
        })
      
    
    
    }

  return (
    <AuthContext.Provider
      value={{
        LoginSchema,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
