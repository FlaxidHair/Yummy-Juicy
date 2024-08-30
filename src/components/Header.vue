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
      <div class="d-flex ml-auto">
        <ul class="d-flex">
          <RouterLink to="/Favorite">
            <li><v-btn class="text-white">Избранное</v-btn></li>
          </RouterLink>
          <RouterLink to="/recipies">
            <li><v-btn class="text-white">Рецепты</v-btn></li>
          </RouterLink>
          <RouterLink to="/template-recipe">
            <li><v-btn class="text-white">Создать рецепт</v-btn></li>
          </RouterLink>
          <RouterLink to="notes">
            <li class="text-white"><v-btn>Заметки</v-btn></li>
          </RouterLink>
        </ul>
      </div>
      <SearchInput></SearchInput>
      <Auth v-if="!userStore.isLogin"></Auth>
      <v-btn v-if="userStore.isLogin" @click="userStore.logout" icon="mdi-logout"></v-btn>
    </v-app-bar>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useStoreRecipies } from '../stores/storeRecipies'
import SearchInput from './SearchInput.vue';
import Auth from './auth/DialogAuth.vue'
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

<style></style>