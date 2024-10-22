<template>
  <form @submit.prevent @click.enter action="#" class="form">
    <div class="form__wrapper">
      <p class="form__text">Авторизация</p>
      <div class="form__fields">
        <div class="form__group">
          <label for="name">Логин</label>
          <InputText id="name" v-model:model-value="name" />
        </div>
        <div class="form__group">
          <label for="age">Пароль</label>
          <InputText id="age" v-model:model-value="age" />
        </div>
        <Button @click="$router.push('/')">Войти</Button>
      </div>
    </div>
  </form>
</template>

<script setup>
import InputText from "primevue/inputtext";
import { reactive, ref } from "vue";

const name = ref("");
const age = ref("");
const classroom = ref("");

const payload = reactive({
  name: name.value,
  age: age.value,
  classroom: classroom.value,
});
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
