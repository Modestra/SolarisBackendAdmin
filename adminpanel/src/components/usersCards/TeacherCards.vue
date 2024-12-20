<template>
  <div class="wrapper">
    <Card
      v-for="teacher in teachers"
      :key="teacher.user_id"
      class="relative p-4 w-full"
    >
      <template #title>
        <div class="flex gap-2">
          <span>{{ teacher.name }}</span>
          <span>{{ teacher.surname }}</span>
          <span>{{ teacher.fathername }}</span>
        </div>
        <div class="absolute top-4 right-4">
          <button @click="openChangeDialog(teacher)">
            <span class="text-sm"><i class="pi pi-pen-to-square"></i></span>
          </button>
        </div>
        <div class="absolute top-4 left-4">
          <button @click="openDeleteDialog(teacher)">
            <span class="text-sm"><i class="pi pi-delete-left"></i></span>
          </button>
        </div>
      </template>
      <template #content>
        <div>
          <span>Активности:</span>
          <span>{{ teacher.competition_activities }}</span>
        </div>
        <div class="flex gap-2">
          <span>Профессия:</span>
          <span>{{ teacher.profeccion }}</span>
        </div>
      </template>
    </Card>
    <Teleport to="body">
      <ChangeUserModal
        :user="selectedItem"
        :visible="changeDialogVisible"
        @update:visible="closeDialogs"
        @save="changeTeacher"
        type="teacher"
      />
      <DeleteUserModal
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
import Card from "primevue/card";
import { computed, onMounted } from "vue";
import { useGetUserStore } from "../../stores/getUsersStore";
import ChangeUserModal from "../modal/ChangeUserModal.vue";
import DeleteUserModal from "../modal/DeleteUserModal.vue";
import { useDialog } from "../../composables/useShowDialogs";

const userGetStore = useGetUserStore();
const teachers = computed(() => userGetStore.getTeachers);
const user = teachers;

const {
  selectedItem,
  changeDialogVisible,
  deleteDialogVisible,
  openChangeDialog,
  openDeleteDialog,
  closeDialogs,
} = useDialog();

function deleteTeacher() {
  userGetStore.deleteTeacher(selectedItem.value.user_id).then(() => {
    userGetStore.fetchTeachers();
  });
}
function changeTeacher() {
  userGetStore
    .changeTeacher(selectedItem.value.teacher_id, selectedItem.value)
    .then(() => {
      userGetStore.fetchTeachers();
      closeDialogs();
    });
}

onMounted(() => {
  userGetStore.fetchTeachers();
});
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}
</style>
