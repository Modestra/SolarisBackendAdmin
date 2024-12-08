<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form
      @submit.prevent="handleSumbitStudent"
      class="bg-white shadow-md rounded-lg p-4 w-full max-w-md space-y-6"
    >
      <h1 class="text-2xl font-bold text-center text-gray-700">
        Создать ученика
      </h1>
      <div class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Имя
          </label>
          <InputText
            v-model="studentData.name"
            id="name"
            type="text"
            placeholder="Имя учителя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>
        <div>
          <label for="surname" class="block text-sm font-medium text-gray-700">
            Фамилия
          </label>
          <InputText
            v-model="studentData.surname"
            id="name"
            type="text"
            placeholder="Фамилия учителя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>
        <div>
          <label
            for="fathername"
            class="block text-sm font-medium text-gray-700"
          >
            Отчество
          </label>
          <InputText
            v-model="studentData.fathername"
            id="fathername"
            type="text"
            placeholder="Отчество учителя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>
        <div class="my-4">
          <Button type="submit" class="w-full">Создать ученика</Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import { errors, studentData, teacherData, userData } from "../../composables/useValidate";
import { handleSumbitStudent } from "../../composables/useCreateUser";
</script>
