import axiosInstance from "./axiosInstance";

export const registerUser = async (userData) => {
  const res = await axiosInstance.post("/user/register", userData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },});
  return res.data;
};

export const loginUser = async (loginData) => {
  const res = await axiosInstance.post("/user/login", loginData);
  return res.data;
};

export const getUserInfo = async()=>{
    const res = await axiosInstance.get("/user/getUserInfo")
    return res.data
}



export const getAllUsers = async () => {
  const res = await axiosInstance.get("/user/getAllUsers");
  return res.data;
};

