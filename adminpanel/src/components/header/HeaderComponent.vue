<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li>
          <div class="flex justify-content-center">
            <Sidebar v-model:visible="visible">
              <template #container="{ closeCallback }">
                <div class="flex flex-column h-full">
                  <div
                    class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0"
                  >
                    <svg
                      width="35"
                      height="40"
                      viewBox="0 0 35 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                        fill="var(--primary-color)"
                      />
                    </svg>
                    <span class="font-semibold text-2xl text-primary"
                      >Админка</span
                    >
                    <span>
                      <Button
                        type="button"
                        @click="closeCallback"
                        icon="pi pi-times"
                        rounded
                        outlined
                        class="sidebar-btn h-2rem w-2rem"
                      ></Button>
                    </span>
                  </div>
                  <div class="overflow-y-auto">
                    <ul class="list-none p-3">
                      <li
                        v-for="link in links"
                        :key="link.name"
                        class="links-item flex flex-col"
                      >
                        <router-link
                          class="text-2xl font-semibold text-primary hover:opacity-70"
                          :to="link.path"
                          @click="handleLinkClick"
                        >
                          {{ link.name }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
            </Sidebar>
            <Button @click="visible = true">
              <i class="pi pi-bars"></i>
            </Button>
          </div>
        </li>
        <li v-if="exitVisible">
          <Button @click="logOut">Выйти</Button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import { useAuth } from "../../composables/useAuth";
import { useNavigationState } from "../../composables/useNavigationState";
import { useLinks } from "../../composables/useHeaderLinks";

const { visible, exitVisible, handleLinkClick } = useNavigationState();
const { links } = useLinks();
const { logOut } = useAuth();
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
