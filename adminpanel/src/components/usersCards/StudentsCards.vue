<template>
  <div class="flex gap-4">
    <Card v-for="student in students">
      <template #title>
        <div class="flex gap-2">
          <span>{{ student.name }}</span>
          <span>{{ student.surname }}</span>
          <span>{{ student.fathername }}</span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import { computed, onMounted } from "vue";
import { useGetUserStore } from "../../stores/getUsersStore";

const userStore = useGetUserStore();
const students = computed(() => {
  return userStore.getStudents;
});

onMounted(() => {
  userStore.fetchStudents();
});
</script>
