<template>
  <div class="d-md-flex mr-3 d-lg-none">
    <v-dialog max-width="350">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps" color="white" variant="flat" width="35px" height="35px" icon="mdi-menu"><v-icon
            color="red-accent-1">mdi-menu</v-icon></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card class="d-flex align-center justify-center">
          <v-card-actions class="align-self-end">
            <v-btn icon="mdi-close" @click="isActive.value = false"></v-btn>
          </v-card-actions>
          <div class="d-flex flex-column mb-5">
            <ul class=" d-flex flex-column ga-4">
              <RouterLink to="/Favorite">
                <li><v-btn class="px-lg-1 bg-red-accent-1 text-white elevation-0 px-xl-4">Избранное</v-btn></li>
              </RouterLink>
              <RouterLink to="/recipies">
                <li><v-btn class="px-lg-1 elevation-0 bg-red-accent-1 text-white px-xl-4">Рецепты</v-btn></li>
              </RouterLink>
              <RouterLink to="/template-recipe">
                <li><v-btn class="px-lg-1 elevation-0 bg-red-accent-1 text-white px-xl-4">Создать рецепт</v-btn></li>
              </RouterLink>
              <RouterLink to="/notes">
                <li><v-btn class="px-lg-1 elevation-0 bg-red-accent-1 text-white px-xl-4">Заметки</v-btn></li>
              </RouterLink>
            </ul>
            <div class="d-flex align-center">
              <span class="text-button mr-2 mt-5 text-blue">Войти <v-icon>mdi-subdirectory-arrow-right</v-icon></span>
              <Auth v-if="!userStore.isLogin" class="mt-5"></Auth>
              <Logout v-else-if="userStore.isLogin"></Logout>
            </div>
          </div>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script setup>
import { useUser } from "../../stores/user";
import { useStoreRecipies } from '../../stores/storeRecipies'
import Auth from '../auth/DialogAuth.vue'
import Logout from '../auth/buttonLogout.vue'
const userStore = useUser();
const store = useStoreRecipies();
</script>
