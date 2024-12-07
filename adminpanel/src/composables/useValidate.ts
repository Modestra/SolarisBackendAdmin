import { computed, reactive, watch } from "vue";
import { CreatedUser } from "../interfaces/createUser";
import { useCreateUserStore } from "../stores/createUserStore";

const userCreateUser = useCreateUserStore();

export const userData = reactive<CreatedUser>({
  email: "",
  username: "",
  password: "",
  name: "",
  surname: "",
  fathername: "",
  category: "",
  class_name: "",
  profeccion: "",
  competition_activities: "",
});

export const errors = reactive({
  email: "",
  username: "",
  password: "",
  category: "",
  class_name: "",
});

export const error = computed(() => userCreateUser.getUserError);

// export function validateForm() {
//   let isValid = true;
//   let errorMessages = [];

//   if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
//     errors.email = "Введите корректный email.";
//     errorMessages.push(errors.email);
//     isValid = false;
//   } else {
//     errors.email = "";
//   }

//   if (!userData.username) {
//     errors.username = "Введите имя пользователя.";
//     errorMessages.push(errors.username);
//     isValid = false;
//   } else {
//     errors.username = "";
//   }

//   if (!userData.password || userData.password.length < 6) {
//     errors.password = "Пароль должен содержать не менее 6 символов.";
//     errorMessages.push(errors.password);
//     isValid = false;
//   } else {
//     errors.password = "";
//   }

//   if (!userData.category) {
//     errors.category = "Выберите категорию.";
//     errorMessages.push(errors.category);
//     isValid = false;
//   } else {
//     errors.category = "";
//   }

//   if (!userData.class_name) {
//     errors.class_name = "Введите класс.";
//     errorMessages.push(errors.class_name);
//     isValid = false;
//   } else {
//     errors.class_name = "";
//   }

//   return isValid;
// }
export function validateForm() {
  let isValid = true;
  let errorMessages = [];

  // Email validation
  if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors.email = "Введите корректный email.";
    errorMessages.push(errors.email);
    isValid = false;
  } else {
    errors.email = "";
  }

  // Username validation
  if (!userData.username) {
    errors.username = "Введите имя пользователя.";
    errorMessages.push(errors.username);
    isValid = false;
  } else {
    errors.username = "";
  }

  // Password validation
  if (!userData.password || userData.password.length < 6) {
    errors.password = "Пароль должен содержать не менее 6 символов.";
    errorMessages.push(errors.password);
    isValid = false;
  } else {
    errors.password = "";
  }

  // Category validation
  if (!userData.category) {
    errors.category = "Выберите категорию.";
    errorMessages.push(errors.category);
    isValid = false;
  } else {
    errors.category = "";
  }

  // Class name validation (if category is "Ученик")
  if (userData.category === "Ученик" && !userData.class_name) {
    errors.class_name = "Введите класс.";
    errorMessages.push(errors.class_name);
    isValid = false;
  } else {
    errors.class_name = "";
  }

  // Profession validation (if category is "Учитель")
  if (userData.category === "Учитель" && !userData.profeccion) {
    errors.profeccion = "Введите профессию.";
    errorMessages.push(errors.profeccion);
    isValid = false;
  } else {
    errors.profeccion = "";
  }

  // Competition activities validation (if category is "Учитель")
  if (userData.category === "Учитель" && !userData.competition_activities) {
    errors.competition_activities = "Введите активности.";
    errorMessages.push(errors.competition_activities);
    isValid = false;
  } else {
    errors.competition_activities = "";
  }

  // Surname validation
  if (!userData.surname) {
    errors.surname = "Введите фамилию.";
    errorMessages.push(errors.surname);
    isValid = false;
  } else {
    errors.surname = "";
  }

  // Fathername validation
  if (!userData.fathername) {
    errors.fathername = "Введите отчество.";
    errorMessages.push(errors.fathername);
    isValid = false;
  } else {
    errors.fathername = "";
  }

  return isValid;
}
