import { useState, useEffect, Suspense } from "react";
import LoadingFallback from "../components/layouts/Loading";


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
  const [setUser] = useUser((state) => [state.setUser]);

  useEffect(() => {
    checkAuth("isadmin")
      .then((res) => {
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
      <Suspense fallback={<LoadingFallback />}>
        {isAdmin == null || isAdmin == false ? (
          <Navigate to="/home" />
        ) : (
           children 
        )}
      </Suspense>
    );
  }
}

export function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [setUser] = useUser((state) => [state.setUser]);

  useEffect(() => {
    checkAuth("check")
      .then((res) => {
        setIsAuth(res);
        if (res == false) setUser({});
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
  } else
    return (
      <Suspense fallback={<LoadingFallback />}>
        {isAuth ? children : <Navigate to="/login" />}
      </Suspense>
    );
}

export function Public({ children }) {
  const [user] = useUser((state) => [state.user]);
  return (
    <Suspense fallback={<LoadingFallback />}>
      {user.email ? <Navigate to="/" /> : children }
    </Suspense>
  );
}
