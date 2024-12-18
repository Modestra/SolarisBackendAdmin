import axiosR from "../../api/http";

export async function deleteTeacherService(user_id: string) {
  const res = await axiosR.delete(`/teacher/delete_teacher/${user_id}`);
  return res;
}
