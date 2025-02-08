<template>
  <Dialog
    v-model:visible="props.visible"
    modal
    :header="`Удалить ${type}`"
    :style="{ width: '25rem' }"
    close-icon="none"
  >
    <div v-if="user">
      <p>
        Вы действительно хотите удалить пользователя {{ user.name }}
        {{ user.surname }} {{ user.fathername }}?
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
        @click="handleDelete"
      ></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  user: Object,
  competition: Object,
  visible: Boolean,
  type: String,
});

const type = computed(() => {
  if (props.type === "teacher") return "учителя";
  if (props.type === "student") return "ученика";
  if (props.type === "competition") return "конкурс";
});

const emit = defineEmits(["update:visible", "delete"]);

function closeDialog() {
  emit("update:visible", false);
}

function handleDelete() {
  emit("delete");
  emit("update:visible", false);
}
</script>
