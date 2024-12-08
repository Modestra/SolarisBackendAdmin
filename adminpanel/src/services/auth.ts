import axiosR from "../api/http";
import { User } from "../interfaces/user/userInterfaces";

export async function fetchUserService(): Promise<User> {
  const { data } = await axiosR.get("/user");
  return data;
}

export async function loginService(data: User) {
  const res = await axiosR.post("/auth/login", data);
  return res.data;
}

export async function autoLoginService(token: string | true) {
  const res = await axiosR.post("/auth", { token });
  return res.data;
}
