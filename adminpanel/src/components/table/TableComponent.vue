<template>
  <DataTable :value="data"> <Column></Column> </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';
const data = ref([]);
</script>

<style lang="sass"></style>
