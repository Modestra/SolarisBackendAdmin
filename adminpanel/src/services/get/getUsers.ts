import axiosR from "../../core/api/http";

export async function getUsersService() {
  const res = await axiosR.get("/user", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
