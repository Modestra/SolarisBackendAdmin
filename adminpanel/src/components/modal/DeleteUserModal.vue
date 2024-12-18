<template>
  <Dialog
    v-model:visible="props.visible"
    modal
    header="Удалить пользователя"
    :style="{ width: '25rem' }"
  >
    <div v-if="teacher">
      <p>
        Вы действительно хотите удалить пользователя {{ teacher.name }}
        {{ teacher.surname }} {{ teacher.fathername }}?
      </p>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <Button
        type="button"
        label="Отменить"
        severity="secondary"
        @click="closeDialog"
      ></Button>
      <Button
        type="button"
        label="Удалить"
        severity="danger"
        @click="deleteTeacher"
      ></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  teacher: Object,
  visible: Boolean,
});

const emit = defineEmits(["update:visible", "delete"]);

function closeDialog() {
  emit("update:visible", false);
}

function deleteTeacher() {
  emit("delete");
  emit("update:visible", false);
}
</script>
