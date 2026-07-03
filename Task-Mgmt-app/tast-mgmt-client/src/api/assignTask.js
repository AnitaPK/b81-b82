import axiosInstance from "./axiosInstance";


export const assignTaskToUserAPI = async (payload) => {
  const res = await axiosInstance.post("/assign/assign-task", payload);
  return res.data;
};


export const getTaskWithUsers = async (id) => {
  console.log(id,"IN API CALL")
  const res = await axiosInstance.get(`/assign/getTaskWithUsers/${id}`);
  return res.data;
};