<template>
  <Dialog
    v-model:visible="props.visible"
    modal
    header="Изменить пользователя"
    :style="{ width: '25rem' }"
  >
    <div v-if="teacher" class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <label for="username" class="font-semibold w-24">Имя</label>
        <InputText
          id="username"
          class="flex-auto"
          v-model="teacher.name"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4">
        <label for="surname" class="font-semibold w-24">Фамилия</label>
        <InputText
          id="surname"
          class="flex-auto"
          v-model="teacher.surname"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4">
        <label for="fathername" class="font-semibold w-24">Отчество</label>
        <InputText
          id="fathername"
          class="flex-auto"
          v-model="teacher.fathername"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4">
        <label for="profeccion" class="font-semibold w-24">Профессия</label>
        <InputText
          id="profeccion"
          class="flex-auto"
          v-model="teacher.profeccion"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4">
        <label for="activities" class="font-semibold w-24">Активности</label>
        <InputText
          id="activities"
          class="flex-auto"
          v-model="teacher.competition_activities"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <Button
        type="button"
        label="Отменить"
        severity="secondary"
        @click="closeDialog"
      ></Button>
      <Button type="button" label="Сохранить" @click="saveTeacher"></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { defineProps, defineEmits, ref } from "vue";

// Получаем пропсы
const props = defineProps({
  visible: Boolean,
  teacher: Object,
});

// Эмитим события
const emit = defineEmits(["update:visible", "save"]);

function closeDialog() {
  emit("update:visible", false);
}

function saveTeacher() {
  emit("save", props.teacher);
  closeDialog();
}
</script>
