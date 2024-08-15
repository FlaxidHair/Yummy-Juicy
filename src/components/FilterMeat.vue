<template>
    <div  class="d-flex justify-center ga-5 mb-7 flex-wrap">
                <v-hover v-for="recipe in store.getterCategory.meat" :key="item" v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card  class="d-flex flex-column align-center" height="600" :class="isHovering, props"
                            v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title class="mr-auto ml-auto">{{ recipe.Name }}</v-card-title>
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.Category }}</div>
                                <v-card-subtitle
                                    class="w-50 pa-1 align-self-center">{{ recipe.Ingridients }}</v-card-subtitle>
                                <div class="border-thin mr-1 pa-1 align-self-center">
                                    {{ store.getTime(recipe.Time) }}</div>
                            </div>
                                <v-card-text class="h-25 text-caption">{{ recipe.Description }}</v-card-text>
                            <img :src="recipe.Image" class="w-100 h-50" alt="Тут могло быть изображения еды">
                        </v-card>
                    </RouterLink>
                </v-hover>
                </div>  
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'

const store = useStoreRecipies();
</script>

