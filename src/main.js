import { createApp } from "vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import colors from "vuetify/util/colors";
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
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
        },
      },
    },
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
      path: "/Favorite",
      name: "favorite",
      component: () => import("./pages/Favorite.vue"),
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
