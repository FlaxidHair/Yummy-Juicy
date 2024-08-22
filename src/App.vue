<template>
  <v-app class="app">
  <Header></Header>
  <RouterView v-show="!store.loading"/>
  <v-progress-circular class="main ml-auto mr-auto" indeterminate :size="40" color="" v-show="store.loading"></v-progress-circular>
  <Footer></Footer>
</v-app>
</template>

<style>
</style>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import {useStoreRecipies} from './stores/storeRecipies';
import {onMounted} from 'vue'
const store = useStoreRecipies();

 onMounted(()=>{
  store.getRecipies()
  store.getNotes()
})
</script>