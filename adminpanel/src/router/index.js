import { createRouter, createWebHistory } from 'vue-router';
import AuthorizationPage from '../features/authentification/pages/AuthorizationPage.vue';
import { useUserStore } from '../stores/userStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../features/main-page-info/pages/MainPage.vue'),
      meta: { protected: true },
      children: [
        {
          path: '/',
          name: 'start-page',
          component: () =>
            import('../features/main-page-info/pages/CatalogPage.vue'),
          meta: { protected: true },
        },
        {
          path: '/account',
          name: 'account',
          component: () => import('../views/AccauntPage.vue'),
          meta: { protected: true },
        },
        {
          path: '/certificates',
          name: 'certificates',
          component: () =>
            import('../features/certificates/pages/CertificatesPage.vue'),
          meta: { protected: true },
        },
        {
          path: '/competitions',
          name: 'competitions',
          component: () =>
            import('../features/competitions/pages/CompetitionsPage.vue'),
          meta: { protected: true },
        },
        {
          path: '/mail',
          name: 'mail',
          component: () => import('../features/mail-info/pages/MailPage.vue'),
          meta: { protected: true },
        },
        {
          path: '/shop',
          name: 'shop',
          component: () => import('../features/shop/pages/ShopPage.vue'),
          meta: { protected: true },
        },
        {
          path: '/users',
          name: 'users',
          component: () =>
            import('../features/user-admin/pages/UserAdminPage.vue'),
          meta: { protected: true },
        },
        {
          path: '/:pathMatch(.*)*',
          name: '404',
          component: () => import('../views/NotFoundPage.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthorizationPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const user = useUserStore();

  if (to.matched.some((route) => route.meta.protected)) {
    if (token) {
      next();
    } else {
      next('/auth');
    }
  } else {
    next();
  }
});

export default router;
