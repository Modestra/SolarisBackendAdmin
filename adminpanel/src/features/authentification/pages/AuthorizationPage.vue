<template>
  <div class="auth-block">
    <div class="modal-block flex flex-col justify-items-center form__wrapper">
      <FormComponent v-model:formGroup="AuthGroup" />
      <Button @click="toRegister" type="submit">Войти</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormComponent from '../../../core/components/FormComponent.vue';
import Button from 'primevue/button';
import { FormModel } from '../../../core/interfaces/formtypes';
import { ref, Ref } from 'vue';

const AuthGroup: Ref<FormModel[]> = ref([
  { label: 'Логин', value: '', type: 'text', required: true },
  { label: 'Пароль', value: '', type: 'password', required: true },
]);

function toRegister() {}
</script>

<style>
.auth-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.modal-block {
  width: 100%;
  max-width: 350px;
  gap: 8px;
}
.form__wrapper {
  padding: 25px;
  max-width: 350px;
  width: 100%;
  border-radius: 8px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>
