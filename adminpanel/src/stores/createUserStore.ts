import { defineStore } from "pinia";
import { CreatedUser } from "../interfaces/createUser";
import { addUserService } from "../services/addUser";

export const useCreateUserStore = defineStore("createUserStore", {
  state: () => ({
    userData: [] as CreatedUser[],
    error: "",
  }),

  getters: {
    getUserData(state) {
      return state.userData;
    },
    getUserError(state) {
      return state.error;
    },
  },

  actions: {
    async addUser(user: CreatedUser) {
      this.error = "";
      try {
        const res = await addUserService(user);
        this.userData.push(res.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          this.error = err.message;
          console.log(this.error);
        } else {
          this.error = "Неизвестная ошибка при создании пользователя";
        }
      }
    },
  },
});
