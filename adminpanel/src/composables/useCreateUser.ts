import { ref } from "vue";
import { useCreateUserStore } from "../core/stores/createUserStore";
import {
  showStudentForm,
  showTeacherForm,
  toggleShowForm,
} from "./useShowUsers";
import {
  errors,
  studentData,
  teacherData,
  userData,
  validateForm,
} from "./useValidate";
import { useRouter } from "vue-router";

const router = useRouter();

export const createUser = useCreateUserStore();
export const isCreated = ref(false);

export function clearAddedUserState() {
  isCreated.value = false;
  showTeacherForm.value = false;
  showStudentForm.value = false;

  router.push("/account");
}

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
      isCreated.value = true;
      teacherData.competition_activities = "";
      teacherData.fathername = "";
      teacherData.name = "";
      teacherData.profeccion = "";
      teacherData.surname = "";
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
      isCreated.value = true;
      studentData.fathername = "";
      studentData.name = "";
      studentData.surname = "";
    } catch (err) {
      console.log(err);
    }
  }
}
