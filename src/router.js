import { createRouter, createWebHashHistory } from "vue-router";
import Component2 from "./components/Component2.vue";
import Component3 from "./components/Component3.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/22", component: Component2 },
    { path: "/33", component: Component3 },
  ],
});
