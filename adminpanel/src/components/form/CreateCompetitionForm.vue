<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form
      @submit.prevent="() => createCompetition(competitionFields)"
      class="bg-white shadow-md rounded-lg p-4 w-full max-w-md space-y-6"
    >
      <h1 class="text-2xl font-bold text-center text-gray-700">
        Создание конкурса
      </h1>
      <div class="space-y-4">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">
            Название
          </label>
          <InputText
            v-model="competitionFields.title"
            id="title"
            type="text"
            placeholder="Введите название конкурса"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
          >
            Описание конкурса
          </label>
          <Textarea
            v-model="competitionFields.description"
            id="description"
            rows="5"
            cols="30"
            placeholder="Введите описание конкурса"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label for="task" class="block text-sm font-medium text-gray-700">
            Задача конкурса
          </label>
          <InputText
            v-model="competitionFields.task_competitions"
            id="task"
            type="text"
            placeholder="Введите задачу конкурса"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div class="my-4">
          <Button type="submit" class="w-full">Создать</Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import {
  competitionFields,
  createCompetition,
} from "../../composables/useCompetition";
</script>
