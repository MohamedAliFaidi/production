import axios from "axios";


export const axiosClient= axios.create({
  baseURL:import.meta.env.VITE_BACKEND_URL
})



export const logout = async () => {
  return await axiosClient.get(`/logout`, {
    withCredentials: true,
  }).then(()=>{
    window.location.pathname = '/'
  })
};

export const getSession = async () => {
  return await axiosClient.get("/check", {
    withCredentials: true,
  });
  
};

export const login = async (email, password) => {
 
     return   await axiosClient.post(
      "/login",
      { email: email, password: password },
      {
        withCredentials: true,
      }
    )

};

export const register = async (email, password) => {
  return await axiosClient.post("/register", {
    email: email,
    password: password,
  });
};


export const testAdminRoute = async () => {
  return await axiosClient.get("/admin/admintest", {
    withCredentials: true,
  });
};
