<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white shadow-md rounded-lg p-4 w-full max-w-md space-y-6"
    >
      <h1 class="text-2xl font-bold text-center text-gray-700">
        Регистрация пользователя
      </h1>
      <div class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <InputText
            v-model="userData.email"
            id="email"
            type="email"
            placeholder="Введите email пользователя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Имя
          </label>
          <InputText
            v-model="userData.username"
            id="name"
            type="text"
            placeholder="Введите имя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.username" class="text-red-500 text-xs mt-1">
            {{ errors.username }}
          </p>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Пароль
          </label>
          <InputText
            v-model="userData.password"
            id="password"
            type="password"
            placeholder="Введите пароль пользователя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.password" class="text-red-500 text-xs mt-1">
            {{ errors.password }}
          </p>
        </div>
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">
            Категория
          </label>
          <select
            v-model="userData.category"
            id="category"
            class="cursor-pointer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled selected>Выберите категорию</option>
            <option value="Учитель">Учитель</option>
            <option value="Ученик">Ученик</option>
          </select>
          <p v-if="errors.category" class="text-red-500 text-xs mt-1">
            {{ errors.category }}
          </p>
        </div>
        <div>
          <label
            for="class-name"
            class="block text-sm font-medium text-gray-700"
          >
            Класс
          </label>
          <InputText
            v-model="userData.class_name"
            id="class-name"
            type="text"
            placeholder="Введите класс"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.class_name" class="text-red-500 text-xs mt-1">
            {{ errors.class_name }}
          </p>
        </div>

        <div class="my-4">
          <Button type="submit" class="w-full">Зарегистрировать</Button>
        </div>
      </div>
    </form>
    <Toast position="bottom-right" />
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import Button from "primevue/button";
import { CreatedUser } from "../interfaces/createUser";
import { computed, onMounted, reactive, watch } from "vue";
import { useCreateUserStore } from "../stores/createUserStore";
import { useUserStore } from "../stores/userStore";

const createUserStore = useCreateUserStore();
const toast = useToast();

const error = computed(() => createUserStore.getUserError);
console.log(error);

const userData = reactive<CreatedUser>({
  email: "",
  username: "",
  password: "",
  category: "",
  class_name: "",
});

const errors = reactive({
  email: "",
  username: "",
  password: "",
  category: "",
  class_name: "",
});

function validateForm() {
  let isValid = true;
  let errorMessages = [];

  if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors.email = "Введите корректный email.";
    errorMessages.push(errors.email);
    isValid = false;
  } else {
    errors.email = "";
  }

  if (!userData.username) {
    errors.username = "Введите имя пользователя.";
    errorMessages.push(errors.username);
    isValid = false;
  } else {
    errors.username = "";
  }

  if (!userData.password || userData.password.length < 6) {
    errors.password = "Пароль должен содержать не менее 6 символов.";
    errorMessages.push(errors.password);
    isValid = false;
  } else {
    errors.password = "";
  }

  if (!userData.category) {
    errors.category = "Выберите категорию.";
    errorMessages.push(errors.category);
    isValid = false;
  } else {
    errors.category = "";
  }

  if (!userData.class_name) {
    errors.class_name = "Введите класс.";
    errorMessages.push(errors.class_name);
    isValid = false;
  } else {
    errors.class_name = "";
  }

  return isValid;
}

watch(error, () => {
  if (error.value) {
    toast.add({
      severity: "error",
      summary: "Ошибки формы",
      detail: error.value,
      life: 5000,
    });
  }
});

async function handleSubmit() {
  if (validateForm()) {
    try {
      await createUserStore.addUser({ ...userData });
      userData.email = "";
      userData.username = "";
      userData.category = "";
      userData.class_name = "";
      userData.password = "";
    } catch (error) {
      console.log("Ошибка при добавлении пользователя:", error);
    }
  } else {
    console.log("Форма содержит ошибки:", errors);
  }
}
</script>
