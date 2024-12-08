<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form
      @submit.prevent="handleSumbitTeacher"
      class="bg-white shadow-md rounded-lg p-4 w-full max-w-md space-y-6"
    >
      <h1 class="text-2xl font-bold text-center text-gray-700">
        Создать учителя
      </h1>
      <div class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Имя
          </label>
          <InputText
            v-model="teacherData.name"
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
            v-model="teacherData.surname"
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
            v-model="teacherData.fathername"
            id="fathername"
            type="text"
            placeholder="Отчество учителя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>
        <div>
          <label
            for="profeccion"
            class="block text-sm font-medium text-gray-700"
          >
            Профессия
          </label>
          <InputText
            v-model="teacherData.profeccion"
            id="profeccion"
            type="text"
            placeholder="Профессия учителя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>
        <div>
          <label
            for="competition-activities"
            class="block text-sm font-medium text-gray-700"
          >
            Активности
          </label>
          <InputText
            v-model="teacherData.competition_activities"
            id="competition-activities"
            type="text"
            placeholder="Активности учителя"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">
            {{ errors.email }}
          </p>
        </div>

        <div class="my-4">
          <Button type="submit" class="w-full">Создать учителя</Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import { errors, teacherData, userData } from "../../composables/useValidate";
import {
  handleSubmit,
  handleSumbitTeacher,
} from "../../composables/useCreateUser";
</script>
