<template>
    <div>
        <v-container class="mt-15 w-100 d-flex bg-white elevation-3 flex-column">
            <h2 class="mb-10 align-self-center">Последние рецепты</h2>
            <div v-for="recipe in store.getterRecipe" :key="item" class="d-flex ga-5 mb-7">
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="500" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">

                            <v-card-title class="mr-auto ml-auto">{{recipe.at(-1).Name}}</v-card-title>
                         
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.at(-1).Category }}</div>
                            <v-card-subtitle class="w-50 pa-1 align-self-center">{{recipe.at(-1).Ingridients}}</v-card-subtitle>
                            <div class="border-thin mr-1 pa-1 align-self-center">{{store.getTime(recipe.at(-1).Time)}}</div>
                            </div>
                            <v-card-text>{{ recipe.at(-1).Description }}</v-card-text>
                            <img :src="recipe.at(-1).Image" class="w-100 h-50" alt="1">
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="500" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">

                            <v-card-title class="mr-auto  ml-auto">{{recipe.at(-2).Name}}</v-card-title>
                         
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.at(-2).Category }}</div>

                            <v-card-subtitle class="w-50 pa-1 align-self-center">{{recipe.at(-2).Ingridients}}</v-card-subtitle>
                            <div class="border-thin mr-1 pa-1 align-self-center">{{store.getTime(recipe.at(-2).Time)}}</div>

                            </div>
                            <v-card-text>{{ recipe.at(-2).Description }}</v-card-text>
                            <img :src="recipe.at(-2).Image" class="w-100 h-50" alt="1">
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="500" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">

                            <v-card-title class="mr-auto ml-auto">{{recipe.at(-3).Name}}</v-card-title>
                         
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.at(-3).Category }}</div>

                            <v-card-subtitle class="w-50 pa-1 align-self-center">{{recipe.at(-3).Ingridients}}</v-card-subtitle>
                            <div class="border-thin mr-1 pa-1 align-self-center">{{store.getTime(recipe.at(-3).Time)}}</div>

                            </div>
                            <v-card-text>{{ recipe.at(-3).Description }}</v-card-text>
                            <img :src="recipe.at(-3).Image" class="w-100 h-50" alt="1">
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="500" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">

                            <v-card-title class="mr-auto ml-auto">{{recipe.at(-4).Name}}</v-card-title>
                         
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.at(-4).Category }}</div>

                            <v-card-subtitle class="w-50 pa-1 align-self-center">{{recipe.at(-4).Ingridients}}</v-card-subtitle>
                            <div class="border-thin mr-1 align-self-center">{{store.getTime(recipe.at(-4).Time)}}</div>

                            </div>
                            <v-card-text>{{ recipe.at(-4).Description }}</v-card-text>
                            <img :src="recipe.at(-4).Image" class="w-100 h-50" alt="1">
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
