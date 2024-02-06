import axios from "axios";
import { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";
async function checkAuth(path) {
  try {
    const res = await axios.get(
      "http://localhost:3000/"+path,
     
      {
        withCredentials: true,
      }
    );

    return res.data.isAuth;
  } catch (error) {
    return false;
  }
}


export function AdminAuth ({ children }) {
   const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth("isadmin")
      .then((res) => {
        console.log(res)
        setIsAdmin(true);
        setLoading(false);
      })
      .catch(() => {
        setIsAdmin(false);
        setLoading(false);
      });

      console.log(isAdmin)
  }, []);

  if (loading) { // You might want to render a loading state here
    return null;
  } else return <>{!isAdmin ? children : <Navigate to="/home" />}</>;


} 


export function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth("check")
      .then((res) => {
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


