import axiosR from '../../../core/api/http';
import { CreatedUser } from '../../../interfaces/create/createUser';

export async function addUserService(user: CreatedUser) {
  const res = await axiosR.post('/user/create_user', user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}

export async function addStudentService(user: CreatedUser) {
  const res = await axiosR.post('/pupil/create_pupil', user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}
export async function addTeacherService(user: CreatedUser) {
  const res = await axiosR.post('/teacher/create_teacher', user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}

export async function changeStudentService(user_id: string, user: CreatedUser) {
  const res = await axiosR.put(`/pupil/update_pupil/${user_id}`, user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}
export async function changeTeacherService(
  teacher_id: string,
  user: CreatedUser,
) {
  const res = await axiosR.put(`/teacher/update_teacher/${teacher_id}`, user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}

export async function deleteTeacherService(user_id: string) {
  const res = await axiosR.delete(`/teacher/delete_teacher/${user_id}`);
  return res;
}
export async function deleteStudentService(user_id: string) {
  const res = await axiosR.delete(`/pupil/delete_pupil/${user_id}`);
  return res;
}

export async function getUsersService() {
  const res = await axiosR.get('/user', {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}

export async function getTeachersService() {
  const res = await axiosR.get('/teacher', {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}
export async function getStudentsService() {
  const res = await axiosR.get('/pupil', {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
}
