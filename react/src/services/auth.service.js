import { axiosClient } from "../utils/axiosClient";


export async function checkAuth(path) {
  try {
    await axiosClient.get(
      "/" + path,

      {
        withCredentials: true,
      }
    );
    return true;
  } catch (error) {
    return false;
  }
}


export const login = async (email, password) => {
  return await axiosClient.post(
    "/auth/login",
    { email: email, password: password },
    {
      withCredentials: true,
    }
  );
};

export const register = async (email, password) => {
  return await axiosClient.post("/auth/register", {
    email: email,
    password: password,
  });
};


export const logout = async () => {
  return await axiosClient
    .get(`/auth/logout`, {
      withCredentials: true,
    })
    .then(() => {
      window.location.pathname = "/";
    });
};

export const testAdminRoute = async () => {
  return await axiosClient.get("/admin/admintest", {
    withCredentials: true,
  });
};
