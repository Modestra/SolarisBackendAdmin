import { useCreateUserStore } from "../stores/createUserStore";
import { errors, userData, validateForm } from "./useValidate";

export const createUser = useCreateUserStore();

export async function handleSubmit() {
  if (!validateForm()) {
    console.log("Форма содержит ошибки:", errors);
    return;
  }

  const actionMap: { [key: string]: (data: typeof userData) => Promise<void> } =
    {
      Ученик: createUser.addStudent,
      Учитель: createUser.addTeacher,
    };

  const action = actionMap[userData.category];
  if (action) {
    try {
      await action({ ...userData });
      // Сброс данных формы
      Object.assign(userData, {
        email: "",
        username: "",
        category: "",
        class_name: "",
        password: "",
      });
    } catch (error) {
      console.log("Ошибка при добавлении пользователя:", error);
    }
  } else {
    console.log("Неизвестная категория пользователя:", userData.category);
  }
}
