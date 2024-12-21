<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
import { useUserStore } from "./stores/userStore";
const userStore = useUserStore()
userStore.autoLogin()
</script>

