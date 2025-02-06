<template>
  <div class="page">
    <div>
      <h1>Активность</h1>
      <form class="flex gap-3">
        <SelectButton
          v-model="selectedRole"
          :options="roles"
          optionLabel="label"
          optionValue="value"
        />
      </form>
    </div>
    <CreateCompetitionForm v-if="selectedRole === 'createCompetition'" />
    <CompetitionsComponent v-if="selectedRole === 'checkCompetition'" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Roles } from '../types';
import CompetitionsComponent from '../components/CompetitionsComponent.vue';
import CreateCompetitionForm from '../../../components/form/CreateCompetitionForm.vue';
import SelectButton from 'primevue/selectbutton';

const roles: Roles[] = [
  { value: 'createCompetition', label: 'Создать конкурс' },
  { value: 'checkCompetition', label: 'Просмотреть конкурсы' },
];

const selectedRole = ref<string>('createCompetition');
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
