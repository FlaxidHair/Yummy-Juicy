import { createRouter, createWebHashHistory } from "vue-router";
import Recipe from "./pages/Recipe.vue";
import MainPage from "./pages/MainPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/recipe", component: Recipe },
  ],
});
