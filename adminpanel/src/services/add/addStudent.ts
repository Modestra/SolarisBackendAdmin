import axiosR from "../../core/api/http";
import { CreatedUser } from "../../interfaces/create/createUser";

export async function addStudentService(user: CreatedUser) {
  const res = await axiosR.post("/pupil/create_pupil", user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
