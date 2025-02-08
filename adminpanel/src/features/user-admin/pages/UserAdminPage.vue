<template>
  <div class="flex flex-column gap-2">
    <SelectButton
      v-model="selectedOption"
      :options="options"
      optionLabel="label"
    />
    <div v-if="isSearchVisible" class="flex justify-end">
      <UserMenuComponent />
    </div>
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
    <TeacherTableComponent v-if="selectedOption.value === 'teachers'" />
    <StudentTableComponent v-if="selectedOption.value === 'students'" />
  </div>
</template>

<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import { onMounted, ref, watch } from 'vue';
import UserTableComponent from '../components/UserTableComponent.vue';
import CreateUserForm from '../../../components/form/CreateUserForm.vue';
import CreateStudentForm from '../../../components/form/CreateStudentForm.vue';
import CreateTeacherForm from '../../../components/form/CreateTeacherForm.vue';
import {
  showStudentForm,
  showTeacherForm,
} from '../../../composables/useShowUsers';
import StudentTableComponent from '../components/StudentTableComponent.vue';
import TeacherTableComponent from '../components/TeacherTableComponent.vue';
import UserMenuComponent from '../components/UserMenuComponent.vue';
import { useRoute } from 'vue-router';

const options = ref([
  { label: 'Создать пользователя', value: 'create' },
  { label: 'Все пользователи', value: 'all' },
  { label: 'Все ученики', value: 'students' },
  { label: 'Все учителя', value: 'teachers' },
]);

const isSearchVisible = ref(false);

const selectedOption = ref(options.value[0]);
watch(selectedOption, (newValue, oldValue) => {
  if (newValue.value === 'create') {
    isSearchVisible.value = false;
  } else {
    isSearchVisible.value = true;
  }
});
</script>
