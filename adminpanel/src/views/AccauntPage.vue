<script setup lang="ts">
import CreateStudentForm from "../components/form/CreateStudentForm.vue";
import CreateTeacherForm from "../components/form/CreateTeacherForm.vue";
import CreateUserForm from "../components/form/CreateUserForm.vue";
import { showStudentForm, showTeacherForm } from "../composables/useShowUsers";
</script>

<template>
  <CreateUserForm v-if="!showTeacherForm && !showStudentForm" />
  <CreateTeacherForm v-if="showTeacherForm" />
  <CreateStudentForm v-if="showStudentForm" />
</template>
