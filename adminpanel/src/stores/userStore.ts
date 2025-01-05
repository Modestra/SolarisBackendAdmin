import { defineStore } from "pinia";
import { User, ErrorType, State } from "../interfaces/user/userInterfaces";
import {
  autoLoginService,
  fetchUserService,
  loginService,
} from "../services/auth";
import { handleError } from "../utils/errorUtil";

export const useUserStore = defineStore("userStore", {
  state: (): State => ({
    user: null,
    token: "",
    error: null,
    successRes: false,
    isAuthenticated: false,
  }),

  getters: {
    getUser(state): User | null {
      return state.user;
    },
    getToken(state): string | null {
      return state.token;
    },
    getError(state): ErrorType | null {
      return state.error;
    },
    getRes(state): boolean {
      return state.successRes;
    },
    isAuthenticated(state): boolean {
      return !!state.token;
    },
  },

  actions: {
    async fetchUser() {
      if (this.isAuthenticated) {
        try {
          const data = await fetchUserService();
          this.user = data;
        } catch (err) {
          this.error = handleError(err, "Ошибка при получении пользователя");
        }
      }
    },

    async login(data: User) {
      try {
        const res = await loginService(data);
        this.token = res.token;
        localStorage.setItem("token", res.token);
        this.user = { ...res };
        await this.autoLogin()
        this.error = null;
      } catch (err) {
        this.error = handleError(err, "Ошибка при входе");
      }
    },

    async autoLogin() {
      try {
        const data = await autoLoginService();
        if (data) {
          this.user =data?.user_id;
        }
      } catch (err) {
        this.error = handleError(err, "Ошибка при автологине");
      }
    },
  },
});
