<template>
    <div class="card">
        <DataTable :value="usersList" tableStyle="min-width: 50rem">
            <Column field="username" header="Логин"></Column>
            <Column field="email" header="E-mail"></Column>
            <Column field="category" header="Категория"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const userService = inject("UserService") as any
const usersList = ref()

onMounted(() => {
    userService.getListUsers().then((res: never)=> usersList.value = res)
});

</script>