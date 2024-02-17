import { useUser } from "../../stores/userStore";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../service/auth.service";
import { useFormik } from "formik";

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [setUser] = useUser((state) => [state.setUser]);
  const [constants] =useState({
    PASSWORD_REGEX : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    EMAIL_REGEX:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  })
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {
        email: "",
        password: "",
      };
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !constants.EMAIL_REGEX.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (
        !constants.PASSWORD_REGEX.test(values.password)
      ) {
        errors.password = "alphanumerics and specials characters are required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const handleLogin = async () => {
    const res = await login(email, password);
    if (res.data.user) {
      setUser(res.data.user);
      navigate("/profile");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Welcome back! Enter your details to login.
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
              required={true}
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

              <Typography variant="h6" color="red" className="">
                {formik.submitCount > 0  ? formik.errors.email :""}
              </Typography>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              required={true}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Typography variant="h6" color="red" className="">
                {formik.submitCount > 0  ? formik.errors.password :""}
              </Typography>

          <Button
            type="submit"
            name="login"
            className="mt-6"
            variant="gradient"
            fullWidth
          >
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            dont have an account yet?{" "}
            <Link
              name="register"
              to="/register"
              className="font-medium text-gray-900"
            >
              Register
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Login;
