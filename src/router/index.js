import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/IndexView.vue";
import MesInfo from "../views/MesInfoView.vue";
import Combat from "../views/CombatView.vue";
const routes = [
  {
    path: "/",
    name: "Inici",
    component: Index,
  },
  {
    path: "/combat",
    name: "combat",
    component: Combat,
  },
  {
    path: "/mesinfo/:id",
    name: "MesInfo",
    props: true,
    component: MesInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
