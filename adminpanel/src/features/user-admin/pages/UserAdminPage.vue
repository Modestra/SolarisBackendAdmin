<template>
  <div class="flex flex-column gap-2">
    <div class="flex flex-row justify-between">
      <SelectButton v-model="value" :options="options" optionLabel="label" />
      <InputGroup class="max-w-xs">
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Найти пользователя..." />
      </InputGroup>
    </div>
    <DataTable
      paginator
      :rows="10"
      showGridlines
      :value="usersList"
      tableStyle="width: 80vw;"
    >
      <Column field="username" header="Логин"></Column>
      <Column field="email" header="E-mail"></Column>
      <Column field="category" header="Категория"></Column>
      <Column style="width: 80px">
        <template #body="{ data }">
          <div class="flex flex-row justify-center gap-2">
            <Button
              icon="pi pi-pencil"
              @click="updateSelectedItem(data)"
              severity="warn"
            ></Button>
            <Button
              icon="pi pi-times"
              @click="deleteSelectedItem(data)"
              severity="danger"
            ></Button>
          </div>
        </template>
      </Column>
    </DataTable>
    <Dialog
      v-model:visible="visibleEdit"
      modal
      header="Edit Profile"
      :style="{ width: '25rem' }"
    >
      <FormComponent :title="'Изменение'" :form-group="[]"></FormComponent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
enum DataTableType {
  Users,
  Teachers,
  Students,
}
import { ref, onMounted, inject, watch, onUpdated } from 'vue';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import FormComponent from '../../../core/components/FormComponent.vue';
import { FormModel } from '../../../core/interfaces/formtypes';

const userService = inject('UserService') as any;
const usersList = ref();
const visibleEdit = ref(false);

const value = ref(DataTableType.Users);
const options = ref([
  { label: 'Пользователи', value: DataTableType.Users },
  { label: 'Учителя', value: DataTableType.Teachers },
  { label: 'Ученики', value: DataTableType.Students },
]);
watch(value, (oldTable, newTable) => {
  switch (oldTable.value) {
    case DataTableType.Users:
      //router.push({ path: '', query: { table: 'users' } });

      return;
    case DataTableType.Teachers:
      //router.push({ path: '', query: { table: 'teachers' } });
      return;
    case DataTableType.Students:
      //router.push({ path: '', query: { table: 'students' } });
      return;
    default:
      //router.push({ path: '', query: { table: 'users' } });
      return;
  }
});
onUpdated(() => {});
onMounted(() => {
  userService.getListUsers().then((res: any[]) => {
    usersList.value = res.data;
  });
});

function deleteSelectedItem(data: any) {}

function updateSelectedItem(data: any) {
  visibleEdit.value = true;
}
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
