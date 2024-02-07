import { useState, useEffect } from "react";
import { useUser } from "../stores/userStore";
import { axiosClient } from "./auth.service";

import { Navigate } from "react-router-dom";
async function checkAuth(path) {
  try {
    const res = await axiosClient.get(
      "/" + path,

      {
        withCredentials: true,
      }
    );
    return true;
  } catch (error) {
    return false;
  }
}

export function AdminAuth({ children }) {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [setUser]=useUser((state)=>[state.setUser])


  useEffect(() => {
    checkAuth("isadmin")
      .then((res) => {
        console.log(res, "res");
        if (res == true) setIsAdmin(true);
     
        setLoading(false);
        console.log(isAdmin);
      })
      .catch((err) => {
        console.log(err, "here");
        setIsAdmin(false);
        setLoading(false);
      });

    console.log(isAdmin, "here");
  }, []);

  if (loading) {
    // You might want to render a loading state here
    return null;
  } else {
    console.log(isAdmin, "ins cope");
    return (
      <>
        {isAdmin == null || isAdmin == false ? (
          <Navigate to="/home" />
        ) : (
          children
        )}
      </>
    );
  }
}

export function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [setUser]=useUser((state)=>[state.setUser])


  useEffect(() => {
    checkAuth("check")
      .then((res) => {
        setIsAuth(res);
        if(res == false)
        setUser({})
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

export function Public({ children }) {
  const [user]=useUser((state)=>[state.user])
  return (
    <>
      {user.email ? (
        <Navigate to="/" />
      ) : (
        children
      )}
    </>
  );
}
