import { defineStore } from 'pinia';
import { CreatedUser } from '../interfaces/create/createUser';
import { CreatedTeacher } from '../interfaces/create/createTeacher';
import { CreatedStudent } from '../interfaces/create/createStudent';
import {
  changeStudentService,
  changeTeacherService,
  deleteStudentService,
  deleteTeacherService,
  getStudentsService,
  getTeachersService,
  getUsersService,
} from '../features/user-admin/services/userAdminService';

export const useGetUserStore = defineStore('getUser', {
  state: () => ({
    users: [] as CreatedUser[],
    teachers: [] as CreatedTeacher[],
    students: [] as CreatedStudent[],
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
      try {
        const res = await getUsersService();
        this.users = res.data;
        console.log('пользователи', res.data);
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
      }
    },
    async fetchStudents() {
      try {
        const res = await getStudentsService();
        this.students = res.data;
        console.log(res.data);
      } catch (error) {
        console.error('Ошибка при загрузке студентов:', error);
      }
    },
    async fetchTeachers() {
      try {
        const res = await getTeachersService();
        this.teachers = res.data;
        console.log(res.data);
      } catch (error) {
        console.error('Ошибка при загрузке учителей:', error);
      }
    },

    async deleteTeacher(user_id: string) {
      try {
        if (!user_id) {
          console.error('Ошибка: user_id не передан');
          return;
        }
        const res = await deleteTeacherService(user_id);
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
      } catch (err) {
        console.error('Ошибка при удалении учителя:', err);
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
  },
});
