<template>
  <Toolbar>
    <template #start>
      <Drawer v-model:visible="visible">
        <template #header>
          <div class="flex items-center gap-2">
            <span>Modestra</span>
          </div>
        </template>
        <template #footer> </template>
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
</script>

<style scoped lang="scss">
.header {
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px;
  background-color: #1f2a3e;
  -webkit-box-shadow: 0px 10px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 10px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 10px 8px 0px rgba(34, 60, 80, 0.2);
}
.p-button:enabled {
  background-color: #1f2a3e;
  border: none;

  &:hover {
    background-color: #1f2a3e;
    border: none;
  }
}

.sidebar-btn.p-button {
  background-color: #fff !important;
}
.sidebar-btn-icon .p-button-icon {
  color: red;
}

.header__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
}
.header__list-item {
}
</style>
