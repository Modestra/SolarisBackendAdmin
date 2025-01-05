<template>
  <div class="page">
    <div>
      <h1>Активность</h1>
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
    <CreateCompetitionForm v-if="selectedRole === 'createCompetition'" />
    <CompetitionsComponent v-if="selectedRole === 'checkCompetition'" />
  </div>
</template>

<script setup lang="ts">
import CompetitionsComponent from "../components/competitions/CompetitionsComponent.vue";
import CreateCompetitionForm from "../components/form/CreateCompetitionForm.vue";
import { ref } from "vue";

const roles = [
  { value: "createCompetition", label: "Создать конкурс" },
  { value: "checkCompetition", label: "Просмотреть конкурсы" },
];

const selectedRole = ref("createCompetition");
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
