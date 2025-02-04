import axiosR from "../../core/api/http";

export async function getStudentsService() {
  const res = await axiosR.get("/pupil", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
