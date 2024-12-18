import { reactive } from "vue";

export const userData = reactive({
  email: "",
  username: "",
  password: "",
  category: "",
});

export const teacherData = reactive({
  name: "",
  surname: "",
  fathername: "",
  profeccion: "",
  competition_activities: "",
  userId: "",
  teacherId: "",
});

export const studentData = reactive({
  name: "",
  surname: "",
  fathername: "",
  user_id: "",
  teacher_id: "",
});

export const errors = reactive({
  email: "",
  username: "",
  password: "",
  category: "",
});

export function validateForm() {
  let isValid = true;

  // Object.keys(errors).forEach((key) => (errors[key] = ""));

  // if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
  //   errors.email = "Введите корректный email.";
  //   isValid = false;
  // }

  // if (!userData.password || userData.password.length < 6) {
  //   errors.password = "Пароль должен содержать не менее 6 символов.";
  //   isValid = false;
  // }

  // if (!userData.name.trim()) {
  //   errors.name = "Введите имя.";
  //   isValid = false;
  // }

  // if (!userData.surname.trim()) {
  //   errors.surname = "Введите фамилию.";
  //   isValid = false;
  // }

  // if (!userData.fathername.trim()) {
  //   errors.fathername = "Введите отчество.";
  //   isValid = false;
  // }

  // if (!userData.category) {
  //   errors.category = "Выберите категорию.";
  //   isValid = false;
  // } else if (userData.category === "Ученик") {
  //   if (!userData.class_name.trim()) {
  //     errors.class_name = "Введите класс.";
  //     isValid = false;
  //   }
  // } else if (userData.category === "Учитель") {
  //   if (!userData.profeccion.trim()) {
  //     errors.profeccion = "Введите профессию.";
  //     isValid = false;
  //   }
  // }

  return isValid;
}
