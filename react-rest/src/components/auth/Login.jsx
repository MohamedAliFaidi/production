import { useState } from "react";
import { useUser } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/auth.service";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [setUser] = useUser((state) => [ state.setUser]);

  const handleLogin = async () => {
    const res = await login(email,password)
    if (res.data.user) {
      setUser(res.data.user);
      navigate("/private");
    }
  };

  return (
    <div>
      <div>Login</div>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
