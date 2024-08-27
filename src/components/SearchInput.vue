<template>
  <div class="ml-auto mr-5">
    <v-text-field width="20vw" :loading="store.loadingSearch" append-inner-icon="mdi-magnify" density="compact"
      label="Найти рецепт" variant="solo" hide-details v-model="store.inputText" single-line
      @click:append-inner="store.onClickSearch" @focus="store.onFocus" @blur="store.onBlur"></v-text-field>
    <v-expand-transition>
      <v-card ref="textSearch" v-show="store.searchShow" class="mt-1 position-fixed overflow-auto" width="20vw"
        height="50vh">
        <div>
          <div v-for="item in store.getterShow">
            <v-card link class="my-2 mx-2 px-2 py-2" @click="() => { store.selectRecipe = item; store.showSearchRequest() }">
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
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>
