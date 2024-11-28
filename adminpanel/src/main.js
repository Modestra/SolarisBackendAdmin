import { createApp } from "vue";
import "./assets/style.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Aura from "@primevue/themes/aura";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router).use(pinia).use(ToastService);

app.mount("#app");
