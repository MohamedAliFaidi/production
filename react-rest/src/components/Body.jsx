import { Auth, AdminAuth } from "../components/Auth";
import Private from "../components/Private";
import Public from "../components/Public";
import Admin from "../components/Admin";

import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
function Body() {
  return (
    <div>   <Routes>
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
      path="/private"
      element={
        <Auth>
          <Private />
        </Auth>
      }
    />
  </Routes></div>
  )
}

export default Body