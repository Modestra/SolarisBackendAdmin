import { defineStore } from 'pinia';
import { CreatedUser } from '../interfaces/create/createUser';
import { CreatedTeacher } from '../interfaces/create/createTeacher';
import { CreatedStudent } from '../interfaces/create/createStudent';
import {
  changeStudentService,
  changeTeacherService,
  changeUserService,
  deleteStudentService,
  deleteTeacherService,
  deleteUserService,
  getStudentsService,
  getTeachersService,
  getUsersService,
} from '../features/user-admin/services/userAdminService';

export const useGetUserStore = defineStore('getUser', {
  state: () => ({
    users: [] as CreatedUser[],
    teachers: [] as CreatedTeacher[],
    students: [] as CreatedStudent[],
    cachedUsers: null as CreatedUser[] | null,
    cachedTeachers: null as CreatedTeacher[] | null,
    cachedStudents: null as CreatedStudent[] | null,
  }),

  getters: {
    getUsers(state) {
      return state.users;
    },
    getTeachers(state) {
      return state.teachers;
    },
    getStudents(state) {
      return state.students;
    },
  },

  actions: {
    async fetchUsers() {
      if (this.cachedUsers) {
        this.users = this.cachedUsers;
        return;
      }
      try {
        const res = await getUsersService();
        this.users = res.data;
        this.cachedUsers = res.data;
        console.log('пользователи', res.data);
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
      }
    },

    async fetchStudents() {
      if (this.cachedStudents) {
        this.students = this.cachedStudents;
        return;
      }
      try {
        const res = await getStudentsService();
        this.students = res.data;
        this.cachedStudents = res.data;
        console.log(res.data);
      } catch (error) {
        console.error('Ошибка при загрузке студентов:', error);
      }
    },

    async fetchTeachers() {
      if (this.cachedTeachers) {
        this.teachers = this.cachedTeachers;
        return;
      }
      try {
        const res = await getTeachersService();
        this.teachers = res.data;
        this.cachedTeachers = res.data;
        console.log(res.data);
      } catch (error) {
        console.error('Ошибка при загрузке учителей:', error);
      }
    },

    async deleteUser(user_id: string) {
      try {
        if (!user_id) {
          console.error('Ошибка: user_id не передан');
          return;
        }
        const res = await deleteUserService(user_id);
        this.cachedUsers = null;
        this.cachedTeachers = null;
        this.cachedStudents = null;
      } catch (err) {
        console.error('Ошибка при удалении пользователя:', err);
      }
    },

    async deleteTeacher(user_id: string) {
      try {
        if (!user_id) {
          console.error('Ошибка: user_id не передан');
          return;
        }
        const res = await deleteTeacherService(user_id);
        // Очищаем кэш учителей
        this.cachedTeachers = null;
      } catch (err) {
        console.error('Ошибка при удалении учителя:', err);
      }
    },

    async deleteStudent(user_id: string) {
      try {
        if (!user_id) {
          console.error('Ошибка: user_id не передан');
          return;
        }
        const res = await deleteStudentService(user_id);
        // Очищаем кэш студентов
        this.cachedStudents = null;
      } catch (err) {
        console.error('Ошибка при удалении студента:', err);
      }
    },

    async changeTeacher(teacher_id: string, user: CreatedUser) {
      try {
        const res = await changeTeacherService(teacher_id, user);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },

    async changeStudent(user_id: string, user: CreatedUser) {
      try {
        const res = await changeStudentService(user_id, user);
      } catch (err) {
        console.log(err);
      }
    },

    async changeUser(user_id: string, user: CreatedUser) {
      try {
        const res = await changeUserService(user_id, user);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
