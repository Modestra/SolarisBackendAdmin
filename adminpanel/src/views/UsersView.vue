<template>
  <div class="page">
    <div>
      <h1>Пользователи</h1>
      <form class="flex gap-3">
        <div v-for="role in roles" :key="role.value" class="flex gap-2">
          <input
            type="radio"
            :id="role.value"
            :value="role.value"
            v-model="selectedRole"
            name="userRole"
          />
          <label :for="role.value">{{ role.label }}</label>
        </div>
      </form>
    </div>
    <TeacherCards v-if="selectedRole === 'teacher'" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TeacherCards from "../components/usersCards/TeacherCards.vue";

const roles = [
  { value: "teacher", label: "Учитель" },
  { value: "student", label: "Ученик" },
];

const selectedRole = ref("teacher");
</script>

<style lang="scss">
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  @media (max-width: 760px) {
    padding: 40px;
  }
}
</style>
