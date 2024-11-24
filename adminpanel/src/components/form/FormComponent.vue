<template>
  <form @submit.prevent="validateForm" @keyup.enter class="form">
    <div class="form__wrapper">
      <p class="form__text">Авторизация</p>
      <div class="form__fields">
        <div class="form__group">
          <label for="login">Логин</label>
          <InputText id="login" v-model="formValue.username" />
        </div>
        <div class="form__group">
          <label for="password">Пароль</label>
          <InputText
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            v-model="formValue.password"
          />
          <p @click="passwordVisible = !passwordVisible">
            {{ passwordVisible ? "Скрыть" : "Показать" }}
          </p>
        </div>
        <Button type="submit" @click="loginUser">Войти</Button>
      </div>
    </div>
  </form>
</template>

<script setup>
import InputText from "primevue/inputtext";
import { computed, onMounted, reactive, ref } from "vue";
import { useUserStore } from "../../stores/userStore";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const userStore = useUserStore();

const passwordVisible = ref(false);

const formValue = reactive({
  username: "",
  password: "",
});

async function loginUser() {
  try {
    await userStore.login({ ...formValue });
    if (localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  } catch (err) {
    console.error("Ошибка входа", err);
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
