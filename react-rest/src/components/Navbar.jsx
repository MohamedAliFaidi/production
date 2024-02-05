import { Link } from "react-router-dom"
import { useUser } from "../stores/userStore"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const [user,setUser] = useUser((state)=>[state.user,state.setUser])
  const navigate = useNavigate()

  const logout = async ()=>{
    await  axios.get('http://localhost:3000/logout' ,{
      withCredentials:true
    }).then(()=>{
      setUser({})
      navigate("/")
    })
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
     {!user._id  && <Link to="/login">Login</Link>}
      {! user._id &&  <Link to="/register">Regiter</Link>}
      {user._id && <Link to="/private">Private</Link>}
      {user._id && <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default Navbar