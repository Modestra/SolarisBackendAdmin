import { defineStore } from "pinia";
import axiosR from "../api/http";
import type { IUserData } from "../interfaces/userInterface";

export const useUserStore = defineStore("userStore", {
  state: (): IUserData => ({
    user: null,
    token: "",
    error: false,
    successRes: false,
  }),
  getters: {
    getUsers(state) {
      return state.user;
    },
    getToken(state) {
      return state.token;
    },
    getError(state) {
      return state.error;
    },
    getSuccessRes(state) {
      return state.successRes;
    },
  },
  actions: {
    async login(data: IUserData) {
      try {
        const res = await axiosR.post("/user", data);
        this.token = res.data.token;
        this.error = false;
        this.user = res.data.user;
        this.successRes = true;
        localStorage.setItem("token", res.data.token);
      } catch (error) {
        this.error = true;
        this.successRes = false;
        console.error("Login error:", error);
      }
    },
    autoLogin() {
      const token = localStorage.getItem("token");
      if (token) {
        axiosR
          .post(`/auth/auto-login`, { token: token })
          .then((res) => {
            this.user = res.data;
          })
          .catch(() => {
            localStorage.removeItem("token");
          });
      }
    },
    logout() {
      this.token = "";
      this.user = null;
      this.error = false;
      this.successRes = false;
      localStorage.removeItem("token");
    },
  },
});
