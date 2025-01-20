import axiosR from "../../core/api/http";

export async function deleteTeacherService(user_id: string) {
  const res = await axiosR.delete(`/teacher/delete_teacher/${user_id}`);
  return res;
}
export async function deleteStudentService(user_id: string) {
  const res = await axiosR.delete(`/pupil/delete_pupil/${user_id}`);
  return res;
}
