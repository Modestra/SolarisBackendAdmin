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
            <option value="" disabled>Выберите категорию</option>
            <option value="Учитель">Учитель</option>
            <option value="Ученик">Ученик</option>
          </select>
          <p v-if="errors.category" class="text-red-500 text-xs mt-1">
            {{ errors.category }}
          </p>
        </div>

        <div class="my-4">
          <Button type="submit" class="w-full">Зарегистрировать</Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { handleSubmit } from "../../composables/useCreateUser";
</script>
