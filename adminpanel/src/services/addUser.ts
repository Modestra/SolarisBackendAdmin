import axiosR from "../api/http";
import { CreatedUser } from "../interfaces/createUser";

export async function addUserService(user: CreatedUser) {
  const res = await axiosR.post("/user/create_user", user);
  return res;
}
