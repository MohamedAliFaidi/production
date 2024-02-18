import { createContext, useState } from "react";
import * as Yup from "yup";
import { useUser } from "../stores/userStore";
import { login } from "../service/auth.service";
import toast from "react-hot-toast";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [setUser] = useUser((state) => [state.setUser]);
  const [constants] = useState({
    EMAIL_REGEX:
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD_REGEX:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
  });

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Required")
      .matches(constants.EMAIL_REGEX, "Invalid email"),
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Password must have at least 8 characters")
      .matches(
        constants.PASSWORD_REGEX,
        "Use upper and lower case characters, digits and special character"
      ),
  });
  const handleLogin = (email, password) => {
    login(email, password)
      .then((res) => {
        if (res && res.data?.user) {
          setUser(res.data.user);
          toast.success(`Welcome back ${res.data.user.email.split("@")[0]}`);
        }
      })
      .catch((error) => toast.error(error.response.data.message));
  };

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
