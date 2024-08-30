<template>
  <v-app class="app">
    <Header></Header>
    <v-progress-circular class="main ml-auto mt-auto  mr-auto" indeterminate :size="40" color=""
      v-show="store.loading"></v-progress-circular>
    <RouterView v-show="!store.loading" />
    <Footer></Footer>
  </v-app>
</template>

<style></style>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useStoreRecipies } from './stores/storeRecipies';
import { onMounted } from 'vue'
const store = useStoreRecipies();

const a = async function() {
  const data = await fetch('https://console.firebase.google.com/project/recipe-cie/database/recipe-cie-default-rtdb/data/~2F')
  const meta = await data.json()
  console.log(meta)
} 
onMounted(() => {
  store.getRecipies()
  store.getNotes()
  a()

})
</script>