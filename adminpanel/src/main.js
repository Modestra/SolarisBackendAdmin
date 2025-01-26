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

const pinia = createPinia();
const app = createApp(App);
const CustomPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
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
          hoverColor: '{orange.900}',
          activeColor: '{orange.800}',
        },
      },
    },
    components: {
      button: {},
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
app.use(UserService); //Самописные плагины
app.mount('#app');
