<template>
  <div class="p-4 flex flex-col gap-4">
    <h1 class="text-5xl text-center">Страница не найдена</h1>
    <div class="mx-auto flex items-center justify-center">
      <Button @click="$router.go(-1)">Вернуться назад</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
</script>

<style lang="scss" scoped>
.page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
}
</style>
