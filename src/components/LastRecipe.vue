<template>
    <div>
        <v-container class="mt-15 w-75 d-flex bg-white elevation-3 flex-column">
            <h2 class="mb-10 align-self-center">Последние рецепты</h2>
            <div v-for="recipe in store.getterRecipe" :key="item" class="d-flex ga-10 mb-7">
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <div class="d-flex w-100 justify-center">
                            <v-card-title class="mr-auto ml-auto">{{recipe[0].Name}}</v-card-title>
                                <div class="border-thin mr-1 align-self-center">{{store.getTime(recipe[0].Time)}}</div>
                            </div>
                            <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                            <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
                            <img src="" class="w-100 h-100" alt="1">
                        </v-card>
                    </RouterLink>
                </v-hover>
                 
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <div class="d-flex w-100 justify-center">
                            <v-card-title class="mr-auto ml-auto">Курица</v-card-title>
                                <div class="border-thin pa-1 mr-1 align-self-center">123</div>
                            </div>
                            <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                            <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
                            <img src="" class="w-100 h-100" alt="1">
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <div class="d-flex w-100 justify-center">
                            <v-card-title class="mr-auto ml-auto">Курица</v-card-title>
                                <div class="border-thin pa-1 mr-1 align-self-center">123</div>
                            </div>
                            <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                            <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
                            <img src="" class="w-100 h-100" alt="1">
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <div class="d-flex w-100 justify-center">
                            <v-card-title class="mr-auto ml-auto">Курица</v-card-title>
                                <div class="border-thin pa-1 mr-1 align-self-center">123</div>
                            </div>
                            <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                            <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
                            <img src="" class="w-100 h-100" alt="1">
                        </v-card>
                    </RouterLink>
                </v-hover>
            </div>
        </v-container>
    </div>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>
