import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/skill",
    name: "skill",
    component: () =>
      import(/* webpackChunkName: "skill" */ "../views/SkillView.vue"),
  },
  {
    path: "/production",
    name: "production",
    component: () =>
      import(
        /* webpackChunkName: "production" */ "../views/ProductionView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
