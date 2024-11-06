<template>
  <div class="mx-auto max-w-[1440px] px-[10px]">
    <div class="flex flex-col gap-4">
      main
      <button @click="fetchData" class="w-5 mx-auto">Запрос</button>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import { ref } from "vue";
import axiosR from "../api/http";

const visible = ref(false);

async function fetchData() {
  const { data } = await axiosR.get("/users");
  console.log(data);
}
</script>
