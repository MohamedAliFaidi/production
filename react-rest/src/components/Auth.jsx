import axios from "axios";
import { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";
async function checkAuth() {
  try {
    const res = await axios.post(
      "http://localhost:3000/check",
      { token: document.cookie.split("=")[1] },
      {
        withCredentials: true,
      }
    );

    return res.data.isAuth;
  } catch (error) {
    return false;
  }
}

function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth()
      .then((res) => {
        console.log(res);
        setIsAuth(res);
        setLoading(false);
      })
      .catch(() => {
        setIsAuth(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    // You might want to render a loading state here
    return null;
  } else return <>{isAuth ? children : <Navigate to="/login" />}</>;
}

export default Auth;
