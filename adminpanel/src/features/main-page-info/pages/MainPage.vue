<template>
  <MainLayout>
    <HeaderComponent />
    <main>
      <RouterView></RouterView>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from '../../../core/components/HeaderComponent.vue';
import { Catalog } from '../services/catalog';
const catalogs: Catalog[] = [
  {
    name: 'Создание пользователя',
    path: '',
  },
  {
    name: 'Конкурсы',
    path: '',
  },
];
</script>

<style scoped lang="scss">
main {
  // display: flex;
  // flex-direction: column;
  // justify-content: start;
  // align-items: center;
  // height: 100vh;
}
.catalog {
  display: flex;
  flex-direction: column;
  min-height: 75vh;
  padding: 16px;

  &__block {
    margin-top: 12px;
  }
  &__segment {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
  }
}

.p-datatable {
  background: white;
}
</style>
