import { createRouter, createWebHistory } from "vue-router";
import AuthorizationPage from "../views/AuthorizationPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/MainPage.vue"),
      meta: { protected: true },
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthorizationPage,
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/AccauntPage.vue"),
      meta: { protected: true },
    },
    {
      path: "/certificates",
      name: "certificates",
      component: () => import("../views/CertificatesPage.vue"),
      meta: { protected: true },
    },
    {
      path: "/competitions",
      name: "competitions",
      component: () => import("../views/CompetitionsPage.vue"),
      meta: { protected: true },
    },
    {
      path: "/mail",
      name: "mail",
      component: () => import("../views/MailPage.vue"),
      meta: { protected: true },
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ShopPage.vue"),
      meta: { protected: true },
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/UsersView.vue"),
      meta: { protected: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/NotFoundPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.matched.some((route) => route.meta.protected)) {
    if (token) {
      next();
    } else {
      next("/auth");
    }
  } else {
    next();
  }
});

export default router;
