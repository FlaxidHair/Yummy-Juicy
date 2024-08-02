<template>
  <v-app>
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
import {onMounted,ref} from 'vue'
const store = useStoreRecipies();

 onMounted(()=>{
  store.getRecipies()
})
</script>