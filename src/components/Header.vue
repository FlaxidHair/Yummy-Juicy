<template>
  <div class="d-flex justify-center">
    <v-app-bar :elevation="3" rounded class="bg-red-accent-1 mt-3 position-relative w-75 d-flex">
      <div class="ml-8">
        <v-app-bar-title class="d-flex ga-3 text-no-wrap">
          <RouterLink class="text-red-lighten-5" to="/">
            Yummy&Juicy
          </RouterLink>
        </v-app-bar-title>
      </div>
      <div class=" d-lg-flex d-xl-flex ml-auto d-md-none">
        <ul class=" d-flex ">
          <RouterLink to="/Favorite">
            <li><v-btn  class="text-white px-lg-1 px-xl-4">Избранное</v-btn></li>
          </RouterLink>
          <RouterLink to="/recipies">
            <li><v-btn class="text-white px-lg-1 px-xl-4">Рецепты</v-btn></li>
          </RouterLink>
          <RouterLink to="/template-recipe">
            <li><v-btn class="text-white px-lg-1 px-xl-4">Создать рецепт</v-btn></li>
          </RouterLink>
          <RouterLink to="notes">
            <li><v-btn class="text-white px-lg-1 px-xl-4">Заметки</v-btn></li>
          </RouterLink>
        </ul>
      </div>
      <SearchInput></SearchInput>
      <Auth v-if="!userStore.isLogin"></Auth>
      <Logout v-else-if="userStore.isLogin"></Logout>
      <Navigation></Navigation>
    </v-app-bar>
  </div>
</template>

<script setup>
import { watch,ref } from 'vue';
import { useStoreRecipies } from '../stores/storeRecipies'
import SearchInput from './SearchInput.vue';
import Auth from './auth/DialogAuth.vue'
import Logout from './auth/buttonLogout.vue'
import Navigation from './mobile/Navigation.vue'
const store = useStoreRecipies();
import { useUser } from "../stores/user";
const userStore = useUser();
watch(() => store.inputText, (newVal) => {
  if (newVal != "") {
    store.searchShow = true;
  } else {
    store.searchShow = false
  }
},
)     
</script>

