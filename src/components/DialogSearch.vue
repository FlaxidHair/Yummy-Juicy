<template>
  <template>
    <v-dialog v-model="store.isActive" max-width="800">
      <v-card v-show="store.dialog" class="d-flex flex-column">
                <div class="d-flex mt-1">
                    <v-card-title class="d-flex ">
                        <div class="d-flex border-thin pa-2">
                            <h4 class="">{{ store.selectRecipe.Name }}</h4>
                        </div>
                        <v-btn width="150px" class="ml-5 mt-3 bg-red" text="Удалить"
                            @click="store.dialog = true" :disabled="!userStore.isLogin ? true : false"></v-btn>
                        <v-btn
                        :disabled="!userStore.isLogin ? true : false"
                            @click="() => { store.patchFavoriteStatus(); store.selectRecipe.Favorite = !store.selectRecipe.Favorite }"
                            class="ml-5 align-self-end elevation-0 border-thin" width="40px" height="40px"
                            icon=""><v-icon
                                color="yellow-darken-1">{{ store.showFavoriteStatus(store.selectRecipe.Favorite)
                                }}</v-icon></v-btn>
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
    <v-dialog v-model="store.dialog" max-width="300">
        <v-card title="Удалить рецепт?">
            <v-card-actions>
                <v-btn text="Да" class="bg-red" variant="text" @click="() => {
                    store.deleteRecipe(store.selectRecipe.ID);
                }
                    "></v-btn>
                <v-spacer></v-spacer>
                <v-btn text="Нет" variant="text" @click="store.dialog = false"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    </v-dialog>
  </template>
</template>

<script setup>
import { useStoreRecipies } from "../stores/storeRecipies";
const store = useStoreRecipies();
import { useUser } from "../stores/user";
const userStore = useUser();
</script>
