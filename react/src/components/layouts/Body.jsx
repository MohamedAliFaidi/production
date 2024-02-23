import LoadingFallback from "./Loading";

import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "../../contexts/auth.context";
import { AdminAuth } from "./routing/Admin";
import { Auth } from "./routing/User";

// Lazy load the Login component
const Login = lazy(() => import("../auth/Login"));

// Lazy load the Register component
const Register = lazy(() => import("../auth/Register"));

// Lazy load the Profile component
const Profile = lazy(() => import("../user/Profile"));

// Lazy load the Home component
const Home = lazy(() => import("../home/Home"));

const Admin = lazy(() => import("../admin/Admin"));

function Body() {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Suspense fallback={<LoadingFallback />}>
                <Login />{" "}
              </Suspense>
            </AuthProvider>
          }
        />
        <Route
          path="/register"
          element={
            <AuthProvider>
              <Suspense fallback={<LoadingFallback />}>
                <Register />{" "}
              </Suspense>
            </AuthProvider>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminAuth>
              <Admin />
            </AdminAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <Auth>
              <Profile />
            </Auth>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default Body;
