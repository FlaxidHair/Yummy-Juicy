<template>
 <div class="d-flex justify-center">
  <v-app-bar :elevation="3" rounded class="bg-red-accent-1 mt-3 position-relative w-100 d-flex justify-center">
  <div class="ml-8">
    <v-app-bar-title class="d-flex ga-3 text-no-wrap">
        <RouterLink class="text-red-lighten-5" to="/">
            Yummy&Juicy
        </RouterLink>

    </v-app-bar-title>    
</div>
<div class="ml-auto" >
    <ul class="d-flex">
        <RouterLink to="/Favorite"><li><v-btn class="text-white">Избранное</v-btn></li></RouterLink>
        <RouterLink to="/recipies"><li><v-btn class="text-white">Рецепты</v-btn></li></RouterLink>
        <RouterLink to="/template-recipe"><li><v-btn class="text-white">Создать рецепт</v-btn></li></RouterLink>
        <RouterLink to="notes"><li class="text-white"><v-btn>Заметки</v-btn></li></RouterLink>
    </ul>
</div>
<div class="ml-auto mr-5" >
      <v-text-field
        width="20vw"
        :loading="store.loadingSearch"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Найти рецепт"
        variant="solo"
        hide-details
        v-model="store.inputText"
        single-line
        @click:append-inner="store.onClickSearch"
      ></v-text-field>
      <v-card v-if="store.searchShow" class="mt-1 position-fixed" width="350px" height="400px">
        asd
      </v-card>
</div>
</v-app-bar>
</div>

</template>

<script setup>
    import { watch } from 'vue';
      import {useStoreRecipies} from '../stores/storeRecipies'
      const store = useStoreRecipies();
      watch(()=>store.inputText,(newVal)=>{
        if(newVal!=""){
          store.searchShow=true
        }else{
          store.searchShow=false
        }
      })
     
</script>

<style >

</style>