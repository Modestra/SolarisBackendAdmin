<template>
  <div class="overflow-x-auto bg-white shadow-md rounded-lg p-4">
    <table class="min-w-full table-auto border-collapse border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th
            class="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300"
          >
            №
          </th>
          <th
            class="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300"
          >
            Название конкурса
          </th>
          <th
            class="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300"
          >
            Задача конкурса
          </th>
          <th
            class="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300"
          >
            Описание конкурса
          </th>
          <th
            class="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300"
          >
            Действия
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(competition, index) in competitions"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td
            class="px-6 py-4 text-sm text-center text-gray-800 border border-gray-300"
          >
            {{ index + 1 }}
          </td>
          <td class="px-6 py-4 text-sm text-gray-800 border border-gray-300">
            {{ competition.title }}
          </td>
          <td class="px-6 py-4 text-sm text-gray-800 border border-gray-300">
            {{ competition.task_competitions }}
          </td>
          <td class="px-6 py-4 text-sm text-gray-800 border border-gray-300">
            {{ competition.description }}
          </td>
          <td
            class="px-6 py-4 text-sm text-center text-gray-800 border border-gray-300"
          >
            <div class="flex gap-2">
              <Button label="Редактировать" severity="info" />
              <Button label="удалить" severity="danger" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCompetitionStore } from "../../stores/competitionStore";
import Button from "primevue/button";

const competitionStore = useCompetitionStore();
const competitions = computed(() => {
  return competitionStore.getCompetition;
});

onMounted(() => {
  competitionStore.fetchCompetitions();
});

// Функция редактирования конкурса
const editCompetition = (index: number) => {
  const competition = competitions.value[index];
  console.log("Редактирование конкурса:", competition);
  // Логика редактирования (например, открытие модального окна)
};

// Функция удаления конкурса
const deleteCompetition = (index: number) => {
  console.log("Удаление конкурса с номером:", index + 1);
  competitionStore.deleteCompetition(index);
};
</script>
