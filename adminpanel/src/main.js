import { createApp } from "vue";
import "./style.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Aura from "@primevue/themes/aura";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router);
app.mount("#app");
