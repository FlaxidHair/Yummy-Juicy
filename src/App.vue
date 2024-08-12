<template>
  <v-app class="app">
  <Header></Header>
  <RouterView/>
  <Footer></Footer>
</v-app>
</template>

<style>
</style>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import {useStoreRecipies} from './stores/storeRecipies'
import {onBeforeMount, onMounted} from 'vue'
const store = useStoreRecipies();

 onBeforeMount(()=>{
  store.getRecipies()
})
</script>