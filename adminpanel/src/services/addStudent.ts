import axiosR from "../api/http";
import { CreatedUser } from "../interfaces/createUser";

export async function addStudentService(user: CreatedUser) {
  const res = await axiosR.post("/pipul/create_pipul", user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
