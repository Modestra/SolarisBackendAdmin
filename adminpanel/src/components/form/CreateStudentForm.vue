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
            placeholder="Имя ученика"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label for="surname" class="block text-sm font-medium text-gray-700">
            Фамилия
          </label>
          <InputText
            v-model="studentData.surname"
            id="surname"
            type="text"
            placeholder="Фамилия ученика"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
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
            placeholder="Отчество ученика"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label for="teacher" class="block text-sm font-medium text-gray-700">
            Классный руководитель
          </label>
          <select
            v-model="studentData.teacherId"
            class="cursor-pointer mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Выберите классного руководителя</option>
            <option
              v-for="teacher in teachers"
              :key="teacher.teacherId"
              :value="teacher.teacherId"
            >
              {{ teacher.name }} {{ teacher.surname }} {{ teacher.fathername }}
            </option>
          </select>
          <p>Учитель {{ studentData.teacherId }}</p>
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

import { studentData } from "../../composables/useValidate";
import { handleSumbitStudent } from "../../composables/useCreateUser";
import { computed, onMounted } from "vue";
import { useGetUserStore } from "../../stores/getUsersStore";

const getUserStore = useGetUserStore();

const teachers = computed(() => {
  return getUserStore.getTeachers;
});

onMounted(async () => {
  await getUserStore.fetchTeachers();
});
</script>
