<template>
  <form @submit.prevent="validateForm" @keyup.enter class="form">
    <div class="form__wrapper">
      <p class="form__text">Авторизация</p>
      <div class="form__fields">
        <div class="form__group">
          <label for="login">Логин</label>
          <InputText id="login" v-model="login" />
        </div>
        <div class="form__group">
          <label for="password">Пароль</label>
          <InputText
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            v-model="password"
          />
          <p @click="passwordVisible = !passwordVisible">
            {{ passwordVisible ? "Скрыть" : "Показать" }}
          </p>
        </div>
        <Button type="submit">Войти</Button>
        <div v-if="useUser.getError" class="error-message">
          Неверный логин или пароль.
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import InputText from "primevue/inputtext";
import { computed, ref } from "vue";
import { useUserStore } from "../../stores/userStore";
import { useRouter } from "vue-router";

const router = useRouter();
const useUser = useUserStore();
const login = ref("");
const password = ref("");
const passwordVisible = ref(false);

const payload = computed(() => ({
  login: login.value,
  password: password.value,
}));

async function validateForm() {
  if (login.value.length && password.value.length) {
    const success = await useUser.login(payload.value);
    if (success) {
      router.push("/");
    }
  }
}
</script>

<style lang="scss" scoped>
.form__text {
  text-align: center;
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
