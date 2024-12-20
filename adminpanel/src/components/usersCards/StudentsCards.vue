<template>
  <div class="wrapper">
    <Card v-for="student in students" :key="student.userId" class="relative">
      <template #title>
        <div class="flex gap-2 relative p-4">
          <span>{{ student.name }}</span>
          <span>{{ student.surname }}</span>
          <span>{{ student.fathername }}</span>
        </div>
        <div class="absolute top-0 right-4">
          <button @click="openChangeDialog(student)">
            <span class="text-sm"><i class="pi pi-pen-to-square"></i></span>
          </button>
        </div>
        <div class="absolute top-0 left-4">
          <button @click="openDeleteDialog(student)">
            <span class="text-sm"><i class="pi pi-delete-left"></i></span>
          </button>
        </div>
      </template>
    </Card>
    <Teleport to="body">
      <ChangeUserModal
        :user="selectedItem"
        :visible="changeDialogVisible"
        @update:visible="closeDialogs"
        type="student"
        @save="changeStudent"
      />
      <DeleteUserModal
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
import Card from "primevue/card";
import { computed, onMounted } from "vue";
import { useGetUserStore } from "../../stores/getUsersStore";
import { useDialog } from "../../composables/useShowDialogs";
import DeleteUserModal from "../modal/DeleteUserModal.vue";
import ChangeUserModal from "../modal/ChangeUserModal.vue";

const userStore = useGetUserStore();
const students = computed(() => {
  return userStore.getStudents;
});
const userGetStore = useGetUserStore();
const user = students;
const {
  selectedItem,
  changeDialogVisible,
  deleteDialogVisible,
  openChangeDialog,
  openDeleteDialog,
  closeDialogs,
} = useDialog();

function deleteStudent() {
  if (selectedItem.value) {
    userGetStore
      .deleteStudent(selectedItem.value.user_id)
      .then(() => {
        userGetStore.fetchStudents();
      })
      .catch((err) => {
        console.error("Ошибка при удалении пользователя:", err);
      });
  }
}
function changeStudent() {
  userGetStore
    .changeStudent(selectedItem.value.user_id, selectedItem.value)
    .then(() => {
      userGetStore.fetchStudents();
      closeDialogs();
    });
}
onMounted(() => {
  userStore.fetchStudents();
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
}
</style>
