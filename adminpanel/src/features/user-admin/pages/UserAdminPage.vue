<template>
  <div class="flex flex-column gap-2">
    <SelectButton
      v-model="selectedOption"
      :options="options"
      optionLabel="label"
    />
    <CreateUserForm
      v-if="
        selectedOption.value === 'create' &&
        !showTeacherForm &&
        !showStudentForm
      "
    />
    <CreateStudentForm v-if="showStudentForm" />
    <CreateTeacherForm v-if="showTeacherForm" />
    <UserTableComponent v-if="selectedOption.value === 'all'" />
  </div>
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';
import UserTableComponent from '../components/UserTableComponent.vue';
import CreateUserForm from '../../../components/form/CreateUserForm.vue';
import CreateStudentForm from '../../../components/form/CreateStudentForm.vue';
import CreateTeacherForm from '../../../components/form/CreateTeacherForm.vue';
import {
  showStudentForm,
  showTeacherForm,
} from '../../../composables/useShowUsers';

const options = ref([
  { label: 'Создать пользователя', value: 'create' },
  { label: 'Все пользователи', value: 'all' },
]);

const selectedOption = ref(options.value[0]);
</script>
