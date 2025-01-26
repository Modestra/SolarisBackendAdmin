<template>
  <Toolbar>
    <template #start>
      <Drawer v-model:visible="visible">
        <template #header>
          <div class="flex items-center gap-2">
            <span>Modestra</span>
          </div>
        </template>
        <div class="nav-routers">
          <RouterLink to="/users">Пользователи</RouterLink>
          <RouterLink to="/competitions">Конкурсы</RouterLink>
          <RouterLink to="/certificates">Сертификаты</RouterLink>
          <RouterLink to="/mail">Почта</RouterLink>
          <RouterLink to="/shop">Сертификаты</RouterLink>
        </div>
        <template #footer>
          <Button
            label="Выйти из аккаунта"
            icon="pi pi-user"
            class="flex-auto"
            @click="outFromAccount"
            outlined
          ></Button>
        </template>
      </Drawer>
      <Button icon="pi pi-bars" @click="visible = true" />
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import { ref } from 'vue';
const visible = ref(false);

const outFromAccount = () => {
  localStorage.setItem('token', '');
};
</script>

<style scoped lang="scss">
.p-toolbar {
  background: #1f2a3e;
  border-radius: 0px;
}
.p-drawer {
  background: #1f2a3e;
  color: black;
}
.nav-routers {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
