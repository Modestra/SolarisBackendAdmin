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
        <div
          v-for="(field, index) in formFields"
          :key="index"
          class="space-y-2"
        >
          <label
            :for="field.id"
            class="block text-sm font-medium text-gray-700"
          >
            {{ field.label }}
          </label>
          <component
            :is="field.component"
            v-model="competitionFields[field.model]"
            :id="field.id"
            :rows="field.rows"
            :cols="field.cols"
            :placeholder="field.placeholder"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            :style="field.style"
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
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {
  competitionFields,
  createCompetition,
} from '../../features/competitions/services/useCompetitions';
import { CreateFormField } from '../../features/competitions/types';

const formFields: CreateFormField[] = [
  {
    label: 'Название',
    id: 'title',
    model: 'title',
    component: InputText,
    placeholder: 'Введите название конкурса',
  },
  {
    label: 'Описание конкурса',
    id: 'description',
    model: 'description',
    component: Textarea,
    rows: 5,
    cols: 30,
    placeholder: 'Введите описание конкурса',
    style: 'resize: none',
  },
  {
    label: 'Задача конкурса',
    id: 'task',
    model: 'task_competitions',
    component: InputText,
    placeholder: 'Введите задачу конкурса',
  },
];
</script>
