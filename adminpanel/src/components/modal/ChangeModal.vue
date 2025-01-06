<template>
  <Dialog
    v-model:visible="props.visible"
    modal
    :header="`Изменить ${type}`"
    :style="{ width: '25rem' }"
    close-icon="none"
  >
    <div v-if="user" class="flex flex-col gap-4">
      <div
        class="flex flex-col gap-4"
        v-if="props.type === 'teacher' || 'student'"
      >
        <div class="flex items-center gap-4">
          <label for="username" class="font-semibold w-24">Имя</label>
          <InputText
            id="username"
            class="flex-auto"
            v-model="user.name"
            autocomplete="off"
          />
        </div>
        <div class="flex items-center gap-4">
          <label for="surname" class="font-semibold w-24">Фамилия</label>
          <InputText
            id="surname"
            class="flex-auto"
            v-model="user.surname"
            autocomplete="off"
          />
        </div>
        <div class="flex items-center gap-4">
          <label for="fathername" class="font-semibold w-24">Отчество</label>
          <InputText
            id="fathername"
            class="flex-auto"
            v-model="user.fathername"
            autocomplete="off"
          />
        </div>
        <div v-if="props.type === 'teacher'" class="flex items-center gap-4">
          <label for="profeccion" class="font-semibold w-24">Профессия</label>
          <InputText
            id="profeccion"
            class="flex-auto"
            v-model="user.profeccion"
            autocomplete="off"
          />
        </div>
        <div v-if="props.type === 'teacher'" class="flex items-center gap-4">
          <label for="activities" class="font-semibold w-24">Активности</label>
          <InputText
            id="activities"
            class="flex-auto"
            v-model="user.competition_activities"
            autocomplete="off"
          />
        </div>
      </div>
      <div v-if="props.type === 'competition'">
        <div class="flex items-center gap-4">
          <label for="username" class="font-semibold w-24">Имя</label>
          <InputText
            id="competitionTitle"
            class="flex-auto"
            v-model="competitionFields.title"
            autocomplete="off"
          />
        </div>
        <div class="flex items-center gap-4">
          <label for="username" class="font-semibold w-24">Имя</label>
          <InputText
            id="competitionTitle"
            class="flex-auto"
            v-model="competitionFields.description"
            autocomplete="off"
          />
        </div>
        <div class="flex items-center gap-4">
          <label for="username" class="font-semibold w-24">Имя</label>
          <InputText
            id="competitionTitle"
            class="flex-auto"
            v-model="competitionFields.task_competitions"
            autocomplete="off"
          />
        </div>
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
import { defineProps, defineEmits, ref, computed } from "vue";
import { competitionFields } from "../../composables/useCompetition";

const props = defineProps({
  visible: Boolean,
  user: Object,
  competition: Object,
  type: String,
});

const type = computed(() => {
  if (props.type === "teacher") return "учителя";
  if (props.type === "student") return "ученика";
  if (props.type === "competition") return "конкурс";
});

const emit = defineEmits(["update:visible", "save"]);

function closeDialog() {
  emit("update:visible", false);
}

function saveTeacher() {
  emit("save");
}

</script>
