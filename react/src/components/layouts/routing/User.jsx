import { useState, Suspense, useEffect } from "react";
import { useUser } from "../../../stores/userStore";
import { checkAuth } from "../../../services/auth.service";
import { Navigate } from "react-router-dom";

export function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [setUser] = useUser((state) => [state.setUser]);

  useEffect(() => {
    checkAuth("user/check")
      .then((res) => {
        setIsAuth(res);
        if (res == false) setUser({});
        setLoading(false);
      })
      .catch(() => {
        setUser({});
        setIsAuth(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null
  } else return <>{isAuth ? children : <Navigate to="/login" />}</>;
}
