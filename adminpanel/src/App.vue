<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
  <Toast />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainLayout from './layouts/MainLayout.vue';
import { useUserStore } from './core/stores/userStore';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
const toast = useToast();
const userStore = useUserStore();
</script>
