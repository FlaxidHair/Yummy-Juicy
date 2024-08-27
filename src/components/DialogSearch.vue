<template>
  <template>
    <v-dialog v-model="store.isActive" max-width="800">
      <v-card class="d-flex flex-column">
        <div class="d-flex mt-1">
          <v-card-title class="d-flex">
            <h4 class="border-thin pa-2">{{ store.selectRecipe.Name }}</h4>
            <v-btn width="150px" class="ml-5 mt-3 bg-red" text="Удалить" @click="store.dialog = true"></v-btn>
          </v-card-title>
          <v-card-actions class="ml-auto mr-2">
            <v-spacer></v-spacer>
            <v-btn text="Закрыть" @click="store.isActive = false"></v-btn>
          </v-card-actions>
        </div>
        <div class="d-flex">
          <div class="d-flex mt-5">
            <h4 class="ml-5 align-self-center">Категория:</h4>
            <v-card-text class="border-thin py-2 px-1 ml-1">
              {{ store.selectRecipe.Category }}</v-card-text>
          </div>
          <div class="ml-auto d-flex border-thin py-1 px-1 mr-5">
            <h4 class="align-self-center mr-1">Время:</h4>
            <v-card-subtitle class="ma-0 pa-0 align-self-center">
              {{ store.selectRecipe.Time }}</v-card-subtitle>
          </div>
        </div>
        <h4 class="ml-5 mt-5">Ингридиенты</h4>
        <v-card-text>{{ store.selectRecipe.Ingridients }}</v-card-text>
        <h4 class="ml-5">Описание</h4>
        <v-card-text>{{ store.selectRecipe.Description }}</v-card-text>
        <img :src="store.selectRecipe.Image" alt="Изображение блюда" />
      </v-card>
    </v-dialog>
  </template>
</template>

<script setup>
import { useStoreRecipies } from "../stores/storeRecipies";
const store = useStoreRecipies();
</script>
