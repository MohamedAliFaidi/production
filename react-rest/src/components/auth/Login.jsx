import { useUser } from "../../stores/userStore";
import { Link } from "react-router-dom";
import { login } from "../../service/auth.service";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Card,  Button, Typography } from "@material-tailwind/react";

function Login() {
  const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Please enter a password")
      // check minimum characters
      .min(8, "Password must have at least 8 characters")
      // different error messages for different requirements
      .matches(/[0-9]/, getCharacterValidationError("digit"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  });
  const [setUser] = useUser((state) => [state.setUser]);

  const handleLogin = async (email, password) => {
    const res = await login(email, password);
    console.log(res);
    if (res.data.user) {
      setUser(res.data.user);
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
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            await handleLogin(values.email, values.password);
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Field
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="password"
                />
              </div>
              <Button
                type="submit"
                name="submit"
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
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default Login;
