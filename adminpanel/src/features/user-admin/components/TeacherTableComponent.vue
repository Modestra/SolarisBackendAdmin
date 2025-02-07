<template>
  <div class="flex flex-column gap-2">
    <DataTable
      paginator
      :rows="10"
      showGridlines
      :value="usersList"
      tableStyle="width: 80vw;"
    >
      <Column field="name" header="Имя"></Column>
      <Column field="surname" header="Фамилия"></Column>
      <Column field="fathername" header="Отчество"></Column>
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
    <Teleport to="body">
      <ChangeModal
        :user="selectedItem"
        :visible="changeDialogVisible"
        @update:visible="closeDialogs"
        @save="changeTeacher"
        type="teacher"
      />
      <DeleteModal
        :user="selectedItem"
        :visible="deleteDialogVisible"
        @update:visible="closeDialogs"
        @delete="deleteTeacher"
        type="teacher"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
enum DataTableType {
  Users,
  Teachers,
  Students,
}
import { onMounted, computed } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ChangeModal from '../../../components/modal/ChangeModal.vue';
import DeleteModal from '../../../components/modal/DeleteModal.vue';
import { useGetUserStore } from '../../../stores/getUsersStore';
import { useDialog } from '../../../composables/useShowDialogs';

const usersList = computed(() => userStore.getTeachers);
const userStore = useGetUserStore();

const {
  selectedItem,
  changeDialogVisible,
  deleteDialogVisible,
  openChangeDialog,
  openDeleteDialog,
  closeDialogs,
} = useDialog();

function deleteTeacher() {
  if (selectedItem.value?.user_id) {
    userStore
      .deleteTeacher(String(selectedItem.value?.user_id))
      .then(() => {
        userStore.fetchTeachers();
      })
      .catch((err) => {
        console.error('Ошибка при удалении пользователя:', err);
      });
  }
}

function changeTeacher() {
  if (selectedItem.value?.teacher_id) {
    userStore
      .changeTeacher(String(selectedItem.value.teacher_id), selectedItem.value)
      .then(() => {
        userStore.fetchTeachers();
        closeDialogs();
      })
      .catch((err) => {
        console.error('Ошибка при изменении учителя:', err);
      });
  }
}

function updateSelectedItem(data: any) {
  selectedItem.value = data;
  openChangeDialog(data);
}

function deleteSelectedItem(data: any) {
  selectedItem.value = data;
  openDeleteDialog(data);
}

onMounted(() => {
  userStore.fetchTeachers();
});
</script>
