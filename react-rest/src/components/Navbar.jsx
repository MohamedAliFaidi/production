import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
  <Link to="/login">Login</Link>
  <Link to="/register">Regiter</Link>
  <Link to="/private">Private</Link>



    </div>
  )
}

export default Navbar