import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
// import About from "../views/About.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/view/About.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("@/view/Team.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("@/view/Project.vue"),
    },
  ],
});

export default router;
