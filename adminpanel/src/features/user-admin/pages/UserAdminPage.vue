<template>
  <div class="flex flex-column gap-2">
    <div class="flex flex-row justify-between">
      <SelectButton v-model="tableState" :options="options" />
      <Button
        icon="pi pi-plus"
        @click="createVisible = true"
        severity="success"
      ></Button>
    </div>
    <TableComponent
      :data="tableData"
      :config="tableService.getConfig()"
    ></TableComponent>
  </div>
  <Dialog
    v-model:visible="createVisible"
    header="Создать по форме "
    modal
    :style="{ width: '25rem' }"
  >
    <FormComponent :title="''" :form-group="[]"></FormComponent>
    <div class="flex justify-end gap-2">
      <Button
        label="Отменить"
        severity="danger"
        @click="disableOnForm"
      ></Button>
      <Button label="Создать" severity="success" @click="createOnForm"></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, watch } from 'vue';
import SelectButton from 'primevue/selectbutton';
import TableComponent from '../../../core/components/TableComponent.vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { TableService } from '../../../core/services/TableService';
import { UserService } from '../../../core/services/UserService';
import { AxiosResponse } from 'axios';
import FormComponent from '../../../core/components/FormComponent.vue';

const userService = inject('UserService') as UserService;
const tableService = inject('TableService') as TableService;

const createVisible = ref(false);
const tableData = ref();

const tableState = ref('Пользователи');
const options = ref(['Пользователи', 'Учителя', 'Ученики']);

const disableOnForm = () => {
  createVisible.value = false;
};

const createOnForm = () => {
  createVisible.value = false;
};

onMounted(() => {
  tableService.setConfig({
    columns: [
      { field: 'username', column: 'Login', columnType: 'string' },
      { field: 'email', column: 'E-mail', columnType: 'string' },
      { field: 'category', column: 'Категория', columnType: 'string' },
    ],
    isEdit: true,
  });
  userService.getListUsers().then((res: AxiosResponse<any>) => {
    tableData.value = res.data;
  });
});

watch(tableState, (newState) => {
  switch (newState) {
    case 'Пользователи':
      tableService.setConfig({
        columns: [
          { field: 'username', column: 'Login', columnType: 'string' },
          { field: 'email', column: 'E-mail', columnType: 'string' },
          { field: 'category', column: 'Категория', columnType: 'string' },
        ],
        isEdit: true,
      });
      userService.getListUsers().then((res: AxiosResponse<any>) => {
        tableData.value = res.data;
      });
      return;
    case 'Учителя':
      tableService.setConfig({
        columns: [
          { field: 'name', column: 'Имя' },
          { field: 'surname', column: 'Фамилия' },
          { field: 'fathername', column: 'Отчество' },
        ],
        isEdit: true,
      });
      userService.getTeacherList().then((res: AxiosResponse<any>) => {
        tableData.value = res.data;
      });
      return;
    case 'Ученики':
      tableService.setConfig({
        columns: [
          { field: 'name', column: 'Имя' },
          { field: 'surname', column: 'Фамилия' },
          { field: 'fathername', column: 'Отчество' },
          { field: 'profeccion', column: 'Профессия' },
        ],
        isEdit: true,
      });
      userService.getStudentList().then((res: AxiosResponse<any>) => {
        tableData.value = res.data;
      });
      return;
    default:
      return;
  }
});
</script>

<style scoped>
.p-inputgroupaddon {
  background-color: #1f2a3e;
}
.p-inputtext {
  background-color: #1f2a3e;
}
.p-togglebutton {
  background: #1f2a3e;
}
</style>
