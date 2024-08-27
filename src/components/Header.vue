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
        @focus="store.onFocus"
        @blur="store.onBlur"
      ></v-text-field>
      <v-expand-transition>
      <v-card ref="textSearch" v-show="store.searchShow" class="mt-1 position-fixed overflow-auto" width="20vw" height="50vh">
        <div >
          <div v-for="item in store.getterShow" >
            <v-card link class="my-2 mx-2 px-2 py-2" @click="()=>{store.selectRecipe=item;store.showSearchRequest() }">
              <div class="d-flex mb-2">
              <h4 class="align-self-center">{{ item.Name }}</h4>
              <p class="ml-auto border-thin pa-1 align-center">{{ item.Category }}</p>
              <p class="border-thin py-1 ml-1 align-center">{{ item.Time }}</p>
            </div>
            <div class="d-flex flex-nowrap border-thin">
              <p class="text-caption d-flex h-25 pa-1">{{ item.Ingridients }}</p>
            </div>
            </v-card>
          </div>
        </div>
      </v-card>
    </v-expand-transition>
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
            store.searchShow=true ;
        }else{
          store.searchShow=false
        }
      },
)     
</script>

<style >

</style>