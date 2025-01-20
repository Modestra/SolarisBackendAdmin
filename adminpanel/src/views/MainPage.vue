<template>
  <<<<<<< HEAD
  <div class="mx-auto max-w-[1440px] px-[10px]">
    <div class="flex flex-col gap-4">
      main
      <button @click="fetchData" class="w-5 mx-auto">Запрос</button>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import { ref } from 'vue';
import axiosR from '../core/api/http';

const visible = ref(false);

async function fetchData() {
  const { data } = await axiosR.get('/users');
}
</script>
=======
<!-- <main class="container main-page">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Обращение</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup></script> -->

<style lang="css" scoped>
.main-page {
  min-height: 100vh;
}
</style>
<!-- >>>>>>> 22ef670e57846066ee16dd531b5b91c94714c45a -->
