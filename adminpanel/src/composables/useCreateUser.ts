import { useCreateUserStore } from "../stores/createUserStore";
import { toggleShowForm } from "./useShowUsers";
import {
  errors,
  studentData,
  teacherData,
  userData,
  validateForm,
} from "./useValidate";

export const createUser = useCreateUserStore();

export async function handleSubmit() {
  if (validateForm()) {
    try {
      await createUser.createUser({ ...userData });
      toggleShowForm();
      userData.email = "";
      userData.username = "";
      userData.password = "";
      userData.category = "";
    } catch (error) {
      console.log("Ошибка при добавлении пользователя:", error);
    }
  } else {
    console.log("Форма содержит ошибки:", errors);
  }
}

export async function handleSumbitTeacher() {
  if (validateForm()) {
    try {
      teacherData.userId = createUser.userId;
      await createUser.addTeacher({ ...teacherData });
    } catch (err) {
      console.log(err);
    }
  }
}

export async function handleSumbitStudent() {
  if (validateForm()) {
    try {
      studentData.user_id = createUser.userId;
      await createUser.addStudent({ ...studentData });
      console.log("ученик создан", { ...studentData });
    } catch (err) {
      console.log(err);
    }
  }
}
