<template>
  <div class="flex flex-column gap-2">
    <div class="flex flex-row justify-between">
      <SelectButton v-model="tableState" :options="options" />
      <InputGroup class="max-w-xs">
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Найти пользователя..." />
      </InputGroup>
    </div>
    <TableComponent
      :data="tableData"
      :config="tableService.getConfig()"
    ></TableComponent>
  </div>
</template>

<script setup lang="ts">
enum DataTableType {
  Users,
  Teachers,
  Students,
}
import { ref, onMounted, inject, watch } from 'vue';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import TableComponent from '../../../core/components/TableComponent.vue';
import { TableService } from '../../../core/services/TableService';
import { UserService } from '../../../core/services/UserService';

const userService = inject('UserService') as UserService;
const tableService = inject('TableService') as TableService;

const tableData = ref();

const tableState = ref('Пользователи');
const options = ref(['Пользователи', 'Учителя', 'Ученики']);

tableService.setConfig({
  columns: [
    { field: 'username', column: 'Login', columnType: 'string' },
    { field: 'email', column: 'E-mail', columnType: 'string' },
    { field: 'category', column: 'Категория', columnType: 'string' },
  ],
  isEdit: true,
});

watch(tableState, (newState, oldState) => {
  console.log(newState);
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
      userService.getListUsers().then((res: any[]) => {
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
      userService.getTeacherList().then((res: any[]) => {
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
      userService.getStudentList().then((res: any[]) => {
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
