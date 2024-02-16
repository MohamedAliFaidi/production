import { Auth, AdminAuth, Public } from "../../service/Auth";
import Admin from "../admin/Admin";

import { Routes, Route, Navigate } from "react-router-dom";
import  {  lazy } from 'react';

// Lazy load the Login component
const Login = lazy(() => import('../auth/Login'));

// Lazy load the Register component
const Register = lazy(() => import('../auth/Register'));

// Lazy load the Profile component
const Profile = lazy(() => import('../user/Profile'));

// Lazy load the Home component
const Home = lazy(() => import('../home/Home'));

// Define a fallback component to show while the lazy-loaded component is loading

function Body() {
  return (
    
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <Public>
              <Login />{" "}
            </Public>
          }
        />
        <Route
          path="/register"
          element={
            <Public>
              <Register />{" "}
            </Public>
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
            <Home />
          }
        />
        <Route
          path="*"
          element={

            <Navigate to="/" />

          }
        />
   
      </Routes>


    </div>

  );
}

export default Body;
