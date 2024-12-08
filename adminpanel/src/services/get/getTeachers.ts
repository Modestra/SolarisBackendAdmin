import axiosR from "../../api/http";

export async function getTeachersService() {
  const res = await axiosR.get("/teacher", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
