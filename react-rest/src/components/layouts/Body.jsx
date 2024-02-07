import { Auth, AdminAuth,Public } from "../../service/Auth";
import Admin from "../admin/Admin";

import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../user/Profile";
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
      </Routes>
    </div>
  );
}

export default Body;
