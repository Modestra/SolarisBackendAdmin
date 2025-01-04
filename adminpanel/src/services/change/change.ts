import axiosR from "../../api/http";
import { CreatedUser } from "../../interfaces/create/createUser";

export async function changeStudentService(user_id: string, user: CreatedUser) {
  const res = await axiosR.put(`/pupil/update_pupil/${user_id}`, user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
export async function changeTeacherService(teacher_id: string, user: CreatedUser) {
    const res = await axiosR.put(`/teacher/update_teacher/${teacher_id}`, user, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  }