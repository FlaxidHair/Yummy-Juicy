<template>
    <div>
        <v-container class="mt-15 w-100 d-flex bg-white elevation-3 flex-column">
            <h2 class="mb-10 align-self-center">Последние рецепты</h2>
            <div>
                <v-dialog max-width="800">
                    <template v-slot:activator="{ props: activatorProps }">
                        <div class="d-flex ga-5 w-7 justify-center">
                            <div v-for="recipe in store.getterLastRecipies" ref="recipe" :key="recipe"
                                class="d-flex mb-7">
                                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                                    <div @click="() => { store.selectRecipe = recipe }" :item="recipe"
                                        class="w-100 cursor-pointer d-flex" v-bind="activatorProps">
                                        <v-card class="d-flex flex-column align-center" width="400px" height="500"
                                            :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                                            <v-card-title class="mr-auto ml-auto">{{ recipe.Name }}</v-card-title>
                                            <div class="d-flex w-100 justify-center">
                                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.Category
                                                    }}</div>
                                                <v-card-subtitle class="w-50 pa-1 align-self-center">{{
                                                    recipe.Ingridients
                                                    }}</v-card-subtitle>
                                                <div class="border-thin mr-1 pa-1 align-self-center">
                                                    {{ recipe.Time }}</div>
                                            </div>
                                            <v-card-text class="h-25 text-caption border-thin overflow-hidden ma-2">{{ recipe.Description
                                                }}</v-card-text>
                                            <img :src="recipe.Image" width="500px" class="h-50"
                                                alt="Тут могло быть изображения еды">
                                        </v-card>
                                    </div>
                                </v-hover>
                            </div>
                        </div>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card class="d-flex flex-column">
                            <div class="d-flex mt-1">
                                <v-card-title>
                                    {{ store.selectRecipe.Name }}
                                </v-card-title>
                                <v-card-actions class="ml-auto align-end mr-2">
                                    <v-spacer></v-spacer>
                                    <v-btn text="Закрыть" @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </div>
                            <div class="d-flex ">
                                <div>
                                    <v-card-text class="border-thin py-2 px-1 ml-5 mr"> {{ store.selectRecipe.Category
                                        }}</v-card-text>
                                </div>
                                <v-card-subtitle class="ml-auto border-thin py-2 px-1 mr-5">{{ store.selectRecipe.Time
                                    }}</v-card-subtitle>
                            </div>
                            <v-card-text>{{ store.selectRecipe.Ingridients }}</v-card-text>
                            <v-card-text>{{ store.selectRecipe.Description }}</v-card-text>
                            <img :src="store.selectRecipe.Image" alt="Изображение блюда">
                        </v-card>
                    </template>
                </v-dialog>
            </div>
        </v-container>
    </div>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>
