import axiosR from "../../core/api/http";
import { CreatedUser } from "../../interfaces/create/createUser";

export async function addTeacherService(user: CreatedUser) {
  const res = await axiosR.post("/teacher/create_teacher", user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
