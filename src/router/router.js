import { createRouter, createWebHashHistory } from "vue-router";
import { getAuth } from "firebase/auth";
import { useUser } from "../stores/user";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../pages/MainPage.vue"),
    },
    {
      path: "/Favorite",
      name: "favorite",
      component: () => import("../pages/Favorite.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Notes",
      name: "notes",
      component: () => import("../pages/Notes.vue"),
    },
    {
      path: "/Recipies",
      name: "recipe",
      component: () => import("../pages/Recipies.vue"),
    },
    {
      path: "/Template-Recipe",
      name: "template-recipe",
      component: () => import("../pages/TemplateRecipe.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUser();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      let isLog = confirm("Необходимо авторизоваться!");
      if (isLog) {
        userStore.dialog = true;
      } else {
        userStore.tooltipShow = true;
      }
    }
  } else {
    next();
  }
});

export default router;
