import { defineStore } from "pinia";
import { CreatedUser } from "../interfaces/create/createUser";
import { addTeacherService } from "../services/add/addTeacher";
import { addStudentService } from "../services/add/addStudent";
import { addUserService } from "../services/add/addUser";
import { CreatedTeacher } from "../interfaces/create/createTeacher";
import { CreatedStudent } from "../interfaces/create/createStudent";

export const useCreateUserStore = defineStore("createUserStore", {
  state: () => ({
    userData: [] as CreatedUser[],
    error: "",
    userId: "",
  }),

  getters: {
    getUserData(state) {
      return state.userData;
    },
    getUserError(state) {
      return state.error;
    },
    getUserId(state) {
      return state.userId;
    },
  },

  actions: {
    async createUser(user: CreatedUser) {
      let res = await addUserService(user);
      this.userData = res.data;
      this.userId = res.data.user_id;
      console.log(this.userId);
    },

    async addUser(
      user: CreatedTeacher | CreatedStudent,
      userType: "teacher" | "student"
    ) {
      this.error = "";
      try {
        let res;
        if (userType === "teacher") {
          res = await addTeacherService({ ...user, userId: this.userId });
        } else if (userType === "student") {
          res = await addStudentService({ ...user, userId: this.userId });
        }
        this.userData.push(res!.data);
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
