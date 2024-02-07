import axios from "axios";


export const axiosClient= axios.create({
  baseURL:import.meta.env.VITE_BACKEND_URL
})



export const logout = async () => {
  await axiosClient.get(`/logout`, {
    withCredentials: true,
  });
};

export const getSession = async () => {
  const res = await axiosClient.get("/check", {
    withCredentials: true,
  });
  return res;
};

export const login = async (email, password) => {
  return await axiosClient.post(
    "/login",
    { email: email, password: password },
    {
      withCredentials: true,
    }
  );
};

export const register = async (email, password) => {
  return await axiosClient.post("/register", {
    email: email,
    password: password,
  });
};


export const testAdminRoute = async () => {
  const response = await axiosClient.get("/admin/admintest", {
    withCredentials: true,
  });
  console.log(response);
};
