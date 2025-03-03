<template>
  <form @submit.prevent="onSubmit" @keyup.enter class="">
    <p class="form__text">{{ title }}</p>
    <div class="form__fields">
      <div v-for="field in formModel" class="form__group">
        <label :for="field.type">{{ field.label }}</label>
        <InputText :type="field.type" :id="field.type" v-model="field.value" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { FormModel } from '../interfaces/formtypes';
import { ModelRef } from 'vue';
const passwordVisible = false;

const emit = defineEmits(['onSubmit']);
const title: ModelRef<string> = defineModel<string>('title', {
  required: true,
});
const formModel: ModelRef<FormModel[]> = defineModel<FormModel[]>('formGroup', {
  required: true,
  default: {} as FormModel[],
});
function onSubmit() {
  emit('onSubmit', formModel.value);
}
</script>

<style lang="scss" scoped>
.form__text {
  text-align: center;
}
.form__wrapper {
  width: 100%;
}
.p-inputtext {
  background-color: white;
  color: black;
}
.p-inputtext {
  &:hover:enabled,
  &:focus:enabled {
    border: 1px solid orange;
  }
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form__fields {
  display: grid;
  gap: 16px;
}
.form__group {
  display: grid;
  gap: 8px;
}
</style>
