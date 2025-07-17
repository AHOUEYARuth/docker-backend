import { createRouter, createWebHistory } from "vue-router";
import Custom from "./layouts/custom.vue";
import Default from "./layouts/default.vue";
import Todo from "./views/Todo.vue";
import Dashboard from "./views/Dashboard.vue";

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "/",
        name: "todo",
        component: Todo,
      },
    ],
  },
  {
    path: "/dashboard",
    component: Custom,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: Dashboard,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
