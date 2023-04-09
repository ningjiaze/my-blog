import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Java",
    name: "Java",
    component: () => import("@/views/study/Java/index.vue"),
  },
  {
    path: "/frontdev",
    name: "frontdev",
    component: () => import("@/views/study/frontDev/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
