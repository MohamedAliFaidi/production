import { Link } from "react-router-dom"
import { useUser } from "../stores/userStore"

import { logout } from "../service/auth.service"

function Navbar() {
  const [user, setUser] = useUser((state) => [state.user, state.setUser])







  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {!user._id && <Link to="/login">Login</Link>}
      {!user._id && <Link to="/register">Regiter</Link>}
      {user._id && <Link to="/private">Private</Link>}
     <Link to="/">Home</Link>

      {user._id && <button onClick={() => {
        logout(); setUser({})
      }}>Logout</button>}
    </div>
  )
}

export default Navbar