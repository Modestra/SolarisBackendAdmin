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
              @click.stop="updateSelectedItem(data)"
              severity="warn"
            ></Button>
            <Button
              icon="pi pi-times"
              @click.stop="deleteSelectedItem(data)"
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
import { ref, onMounted, inject, watchEffect } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ChangeModal from '../../../components/modal/ChangeModal.vue';
import DeleteModal from '../../../components/modal/DeleteModal.vue';
import { useGetUserStore } from '../../../stores/getUsersStore';
import { useDialog } from '../../../composables/useShowDialogs';
import UploadFileComponent from '../../upload-file/UploadFileComponent.vue';
import { useFileStore } from '../../../stores/fileStore';
import type { SelectionData } from '../types';
import { useRouter } from 'vue-router';
import LoaderComponent from '../../../core/components/LoaderComponent.vue';

const router = useRouter();

const userService = inject('UserService') as any;
const usersList = ref();

const userStore = useGetUserStore();

const selectedRow = ref<SelectionData | null>(null);

const {
  selectedItem,
  changeDialogVisible,
  deleteDialogVisible,
  openChangeDialog,
  openDeleteDialog,
  closeDialogs,
} = useDialog();

function onRowSelect(newSelection: SelectionData) {
  selectedRow.value = newSelection;
  console.log('selected row', selectedRow.value);
  if (newSelection) {
    router.push(`/users/${selectedRow.value.user_id}`);
  }
}

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
