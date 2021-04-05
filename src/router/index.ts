import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/transfers",
    name: "Transfers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Transfers.vue"),
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Accounts.vue"),
  },
  {
    path: "/payments",
    name: "Payments",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Payments.vue"),
  },
  {
    path: "/support",
    name: "Support",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Support.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
