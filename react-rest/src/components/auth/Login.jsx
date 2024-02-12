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
    <div className="div">

 

    <div className="w-full h-screen flex items-center justify-center">
    <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
        <label className="font-light text-4xl mb-4"><span className="font-bold">Welcome back !</span></label>
        <input  onChange={(e) => {
          setEmail(e.target.value);
        }}  type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Email"/>
        <input   onChange={(e) => {
          setPassword(e.target.value);
        }} type="password" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Password"/>
        <button  onClick={handleLogin} className="w-full h-12 rounded-lg bg-gray-500 text-gray-200 uppercase font-semibold hover:bg-black text-white-100   transition mb-4">Login</button>
        {/* <p class="text-right mb-4">Forgot password</p>
        <label class="text-gray-800 mb-4">or</label>
        <button class="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">Sign with Google</button>
        <button class="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Sign with Facebook</button>
        <button class="w-full h-12 rounded-lg bg-gray-800 text-gray-200 uppercase font-semibold hover:bg-gray-900 text-gray-100 transition mb-4">Sign with Github</button> */}
    </div>
</div>
    </div>
  );
}

export default Login;
