<template>
  <div class="auth-block">
    <div class="modal-block flex flex-col justify-items-center form__wrapper">
      <FormComponent :title="'Авторизация'" v-model:formGroup="AuthGroup" />
      <Button @click="toRegister" type="submit">Войти</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormComponent from '../../../core/components/FormComponent.vue';
import Button from 'primevue/button';
import { FormModel } from '../../../core/interfaces/formtypes';
import { inject, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../../core/stores/userStore';

const userService: any = inject('UserService');
const router = useRouter();
const user = useUserStore();

const AuthGroup: Ref<FormModel[]> = ref([
  { label: 'Логин', key: 'username', value: '', type: 'text', required: true },
  {
    label: 'Пароль',
    key: 'password',
    value: '',
    type: 'password',
    required: true,
  },
]);

function toRegister() {
  const authFields = {
    username: AuthGroup.value[0].value,
    password: AuthGroup.value[1].value,
  };
  console.log(authFields);
  userService
    .loginAdmin(authFields)
    .then((resp: any) => {
      localStorage.setItem('token', resp.data.token);
      user.setUser(resp);
      router.push('/');
    })
    .catch((err: any) => {
      console.log(err);
    });
}
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
  background-color: #1f2a3e;
  color: white;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>
