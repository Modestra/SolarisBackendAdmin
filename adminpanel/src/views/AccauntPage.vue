<script setup lang="ts">
import { inject } from 'vue';
import { showStudentForm, showTeacherForm } from '../composables/useShowUsers';
import CreateUserForm from '../components/form/CreateUserForm.vue';
import CreateTeacherForm from '../components/form/CreateTeacherForm.vue';
import CreateStudentForm from '../components/form/CreateStudentForm.vue';

const userService: any = inject('userService');

userService.getCurrentUser();
</script>

<template>
  <CreateUserForm v-if="!showTeacherForm && !showStudentForm" />
  <CreateTeacherForm v-if="showTeacherForm" />
  <CreateStudentForm v-if="showStudentForm" />
</template>
