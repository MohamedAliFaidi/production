import { useState, useEffect, Suspense } from "react";
import { checkAuth } from "../../../services/auth.service";
import { Navigate } from "react-router-dom";
export function AdminAuth({ children }) {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth("admin/isadmin")
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
    return null;
  } else {
    return (
      <>
        {" "}
        {isAdmin == null || isAdmin == false ? (
          <Navigate to="/home" />
        ) : (
          children
        )}
      </>
    );
  }
}
