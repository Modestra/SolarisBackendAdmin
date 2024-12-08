import axiosR from "../../api/http";
import { CreatedUser } from "../../interfaces/create/createUser";

export async function changeStudentService(user: CreatedUser) {
  const res = await axiosR.put(`/pupil/update_pupil/${user.userId}`, user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
