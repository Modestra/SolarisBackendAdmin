import axiosR from "../../api/http";
import { CreatedUser } from "../../interfaces/create/createUser";

export async function changeTeacherService(user: CreatedUser) {
  const res = await axiosR.put(
    `/teacher/update_teacher/${user.teacherId}`,
    user,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
}
