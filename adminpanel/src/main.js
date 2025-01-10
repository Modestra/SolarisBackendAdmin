import { createApp } from 'vue';
import './assets/style.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import { createPinia } from 'pinia';
import UserService from './services/userService';

const pinia = createPinia();
const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router).use(pinia);
app.use(ToastService).use(ConfirmationService);
app.use(UserService); //Самописные плагины
app.mount('#app');
