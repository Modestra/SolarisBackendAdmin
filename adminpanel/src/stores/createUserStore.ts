import { defineStore } from "pinia";
import { CreatedUser } from "../interfaces/createUser";

import axiosR from "../api/http";
export const useCreateUserStore = defineStore("createUserStore", {
  state: () => ({
    userData: [] as CreatedUser[],
    isFetching: false,
  }),

  getters: {
    getUserData(state) {
      return state.userData;
    },
  },

  actions: {
    addUser(user: CreatedUser) {
      axiosR.post("/user/create_user", user).then((res) => {
        this.userData.push(res.data);
      });
    },
  },
});
