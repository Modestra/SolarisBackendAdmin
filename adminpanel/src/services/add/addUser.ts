import axiosR from "../../core/api/http";
import { CreatedUser } from "../../interfaces/create/createUser";

export async function addUserService(user: CreatedUser) {
  const res = await axiosR.post("/user/create_user", user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
