import { defineStore } from 'pinia';
import { CreatedUser } from '../interfaces/create/createUser';
import {
  addStudentService,
  addTeacherService,
  addUserService,
} from '../features/user-admin/services/userAdminService';

export const useCreateUserStore = defineStore('createUserStore', {
  state: () => ({
    userData: [] as CreatedUser[],
    error: '',
    userId: '',
    teacherId: '',
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
      console.log(this.userData);
    },

    async addTeacher(teacher: any) {
      this.error = '';
      try {
        const res = await addTeacherService({ ...teacher });
        this.teacherId = res.data.teacher_id;
        this.userData = res.data;
        console.log('Учитель успешно создан:', res.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          this.error = err.message;
          console.error('Ошибка при создании учителя:', this.error);
        } else {
          this.error = 'Неизвестная ошибка при создании учителя';
          console.error(this.error);
        }
      }
    },

    async addStudent(student: any) {
      this.error = '';
      try {
        const res = await addStudentService({ ...student });
        this.teacherId = res.data.teacher_id;
        this.userData = res.data;
        console.log('Ученик успешно создан:', res.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          this.error = err.message;
          console.error('Ошибка при создании ученика:', this.error);
        } else {
          this.error = 'Неизвестная ошибка при создании ученика';
          console.error(this.error);
        }
      }
    },
  },
});
