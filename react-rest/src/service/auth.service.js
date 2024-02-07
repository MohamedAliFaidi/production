import axios from "axios";

export const logout = async () => {
  await axios.get("http://localhost:3000/logout", {
    withCredentials: true,
  });
};

export const getSession = async () => {
  const res = await axios.get("http://localhost:3000/check", {
    withCredentials: true,
  });
  return res;
};

export const login = async (email, password) => {
  return await axios.post(
    "http://localhost:3000/login",
    { email: email, password: password },
    {
      withCredentials: true,
    }
  );
};

export const register = async (email, password) => {
  return await axios.post("http://localhost:3000/register", {
    email: email,
    password: password,
  });
};
