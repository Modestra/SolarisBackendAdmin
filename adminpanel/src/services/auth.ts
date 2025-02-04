import axiosR from "../core/api/http";
import { User } from "../interfaces/user/userInterfaces";

export async function fetchUserService(): Promise<User> {
  const { data } = await axiosR.get("/user");
  return data;
}

export async function loginService(data: User) {
  const res = await axiosR.post("/auth/login", data);
  return res.data;
}

export async function autoLoginService() {
  const res = await axiosR.get("/user/current_user");
  return res.data;
}
