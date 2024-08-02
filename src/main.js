import { createApp } from "vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("./pages/MainPage.vue"),
    },
    {
      path: "/Dishes",
      name: "dishes",
      component: () => import("./pages/Dishes.vue"),
    },
    {
      path: "/Notes",
      name: "notes",
      component: () => import("./pages/Notes.vue"),
    },
    {
      path: "/Recipies",
      name: "recipe",
      component: () => import("./pages/Recipies.vue"),
    },
    {
      path: "/Template-Recipe",
      name: "template-recipe",
      component: () => import("./pages/TemplateRecipe.vue"),
    },
  ],
});
const app = createApp(App);
app.use(vuetify);
app.use(createPinia());
app.use(router);
app.mount("#app");
