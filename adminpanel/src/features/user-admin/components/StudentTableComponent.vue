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
        @save="changeStudent"
        type="student"
      />
      <DeleteModal
        :user="selectedItem"
        :visible="deleteDialogVisible"
        @update:visible="closeDialogs"
        @delete="deleteStudent"
        type="student"
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
import { ref, onMounted, inject, computed, watch } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ChangeModal from '../../../components/modal/ChangeModal.vue';
import DeleteModal from '../../../components/modal/DeleteModal.vue';
import { useGetUserStore } from '../../../stores/getUsersStore';
import { useDialog } from '../../../composables/useShowDialogs';
import { UserInfo } from '../../../interfaces/user/userInterfaces';

const userService = inject('UserService') as any;
const usersList = ref();
const value = ref<string | number>(DataTableType.Users);

const options = ref<{ label: string; value: string | number }[]>([
  { label: 'Пользователи', value: DataTableType.Users },
  { label: 'Учителя', value: DataTableType.Teachers },
  { label: 'Ученики', value: DataTableType.Students },
]);

const userStore = useGetUserStore();
const students = computed(() => userStore.getStudents);

const {
  selectedItem,
  changeDialogVisible,
  deleteDialogVisible,
  openChangeDialog,
  openDeleteDialog,
  closeDialogs,
} = useDialog();

watch(
  () => userStore.getStudents,
  (newData) => {
    usersList.value = newData;
  },
  { immediate: true },
);

function deleteStudent() {
  if (selectedItem.value?.user_id) {
    userStore
      .deleteStudent(String(selectedItem.value.user_id))
      .then(() => {
        userStore.fetchStudents();
      })
      .catch((err) => {
        console.error('Ошибка при удалении пользователя:', err);
      });
  }
}

function changeStudent() {
  if (selectedItem.value?.user_id) {
    userStore
      .changeStudent(String(selectedItem.value.user_id), selectedItem.value)
      .then(() => {
        userStore.fetchStudents();
        closeDialogs();
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

interface User {
  user_id: number;
  username: string;
  email: string;
  category: string;
}

interface ApiResponse<T> {
  data: T;
}

onMounted(() => {
  userService
    .getListStudents()
    .then((res: ApiResponse<User[]>) => {
      usersList.value = res.data;
      console.log(usersList.value);
    })
    .catch((err) => {
      console.error('Ошибка при загрузке пользователей:', err);
    });
});
</script>
