<template>
  <Header></Header>
  <RouterView/>
  <Footer></Footer>
</template>

<style>
.slider {
  display:flex;
}
.clon {
  border:1px solid;
  background-color: red;
}
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