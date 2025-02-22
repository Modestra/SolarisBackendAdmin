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
import UserService from './core/services/UserService';
import { definePreset } from '@primevue/themes';
import TableService from './core/services/TableService';

const pinia = createPinia();
const app = createApp(App);
const CustomPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: '{orange.500}',
          inverseColor: '#ffffff',
          hoverColor: '{orange.900}',
          activeColor: '{orange.800}',
        },
      },
      dark: {
        primary: {
          color: '{orange.500}',
          inverseColor: '#ffffff',
          hoverColor: '{orange.600}',
          activeColor: '{orange.800}',
        },
        surface: {},
      },
    },
  },
});
app.use(PrimeVue, {
  theme: {
    preset: CustomPreset,
  },
});

app.use(router).use(pinia);
app.use(ToastService).use(ConfirmationService);
app.use(UserService).use(TableService); //Самописные плагины
app.mount('#app');
