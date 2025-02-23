<template>
  <div class="flex flex-column gap-2">
    <DataTable
      paginator
      :rows="10"
      showGridlines
      :value="usersList"
      tableStyle="width: 80vw;"
      selectionMode="single"
      :selection="selectedRow"
      @update:selection="onRowSelect"
    >
      <Column field="username" header="Логин" style="width: 34%"></Column>

      <Column field="email" header="E-mail" style="width: 34%"></Column>
      <Column field="category" header="Категория " style="width: 34%"></Column>
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
            <UploadFileComponent :userId="data.user_id" />
          </div>
          <div
            v-if="selectedRow && selectedRow.user_id === data.user_id"
            class="p-2 bg-gray-100"
          >
            Дополнительная информация для пользователя: {{ data.username }}
          </div>
        </template>
      </Column>
    </DataTable>
    <Teleport to="body">
      <ChangeModal
        :user="selectedItem"
        :visible="changeDialogVisible"
        @update:visible="closeDialogs"
        @save="handleChangeUser"
        type="user"
      />
      <DeleteModal
        :user="selectedItem"
        :visible="deleteDialogVisible"
        @update:visible="closeDialogs"
        @delete="handleDeleteUser"
        type="user"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ChangeModal from '../../../components/modal/ChangeModal.vue';
import DeleteModal from '../../../components/modal/DeleteModal.vue';
import { useGetUserStore } from '../../../stores/getUsersStore';
import { useDialog } from '../../../composables/useShowDialogs';
import UploadFileComponent from '../../upload-file/UploadFileComponent.vue';
import { useFileStore } from '../../../stores/fileStore';

const userService = inject('UserService') as any;
const usersList = ref();
const fileStore = useFileStore();

const userStore = useGetUserStore();

const selectedRow = ref(null);

const showInfo = ref(false);

function onRowSelect(newSelection) {
  console.log('Выбранная строка:', newSelection);
  selectedRow.value = newSelection;
  showInfo.value = true;
}

const {
  selectedItem,
  changeDialogVisible,
  deleteDialogVisible,
  openChangeDialog,
  openDeleteDialog,
  closeDialogs,
} = useDialog();

function handleDeleteUser() {
  if (selectedItem.value?.user_id) {
    console.log(selectedItem.value);
    userStore
      .deleteUser(String(selectedItem.value.user_id))
      .then(() => userStore.fetchUsers())
      .catch((err) => {
        console.error('Ошибка при удалении пользователя:', err);
      });
  }
}

function handleChangeUser() {
  if (selectedItem.value?.user_id) {
    userStore
      .changeUser(String(selectedItem.value.user_id), selectedItem.value)

      .then(() => {
        userStore.fetchUsers();
        closeDialogs();
      })
      .catch((err) => {
        console.error('Ошибка при изменении пользователя:', err);
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
  files: Array<{ name: string; url: string }>; // Add files field
}

interface ApiResponse<T> {
  data: T;
}

onMounted(() => {
  userService
    .getListUsers()
    .then((res: ApiResponse<User[]>) => {
      usersList.value = res.data;
    })
    .catch((err) => {
      console.error('Ошибка при загрузке пользователей:', err);
    });
});
</script>
