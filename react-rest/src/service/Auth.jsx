import { useState, useEffect, Suspense } from "react";
import { Spinner } from "@material-tailwind/react";


 const LoadingFallback = () => {

  return   <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Spinner className="h-16 w-16 text-gray-900/50" /></div>
}

import { useUser } from "../stores/userStore";
import { axiosClient } from "./auth.service";
import { Navigate } from "react-router-dom";
async function checkAuth(path) {
  try {
    await axiosClient.get(
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
  const [setUser] = useUser((state) => [state.setUser])


  useEffect(() => {
    checkAuth("isadmin")
      .then((res) => {
        console.log(res, "res");
        if (res == true) setIsAdmin(true);

        setLoading(false);
      })
      .catch((err) => {
        setIsAdmin(false);
        setLoading(false);
      });

  }, []);

  if (loading) {
    // You might want to render a loading state here
    return null;
  } else {
    return (
      <>
        {isAdmin == null || isAdmin == false ? (
          <Navigate to="/home" />
        ) : (
          <Suspense fallback={<LoadingFallback />}>
            {children}</Suspense>
        )}
      </>
    );
  }
}

export function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [setUser] = useUser((state) => [state.setUser])


  useEffect(() => {
    checkAuth("check")
      .then((res) => {
        setIsAuth(res);
        if (res == false)
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
  } else return <>{isAuth ?    <Suspense fallback={<LoadingFallback />}>{children}</Suspense> : <Navigate to="/login" />}</>;
}

export function Public({ children }) {
  const [user] = useUser((state) => [state.user])
  return (
    <>
      {user.email ? (
        <Navigate to="/" />
      ) : (
        <Suspense fallback={<LoadingFallback />}>

        {children}</Suspense>
      )}
    </>
  );
}
