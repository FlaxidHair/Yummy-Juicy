import { createRouter, createWebHashHistory } from "vue-router";
import Recipe from "./pages/Recipe.vue";
import MainPage from "./pages/MainPage.vue";
import Dishes from "./pages/Dishes.vue";
import TemplateRecipe from "./pages/TemplateRecipe.vue";
import Notes from "./pages/Notes.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/recipe", component: Recipe },
    { path: "/dishes", component: Dishes },
    { path: "/templaterecipe", component: TemplateRecipe },
    { path: "/notes", component: Notes },
  ],
});
