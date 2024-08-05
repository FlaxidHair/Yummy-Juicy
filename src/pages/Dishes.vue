<template>
    <div class="main d-flex mt-10  align-center flex-column">
        <h2 class="mb-15">Рецепты</h2>
        <div class="d-flex flex-wrap w-75 ml-auto mr-auto ga-10">
        <div  class=" ml-auto mr-auto" style="border:1px solid;" v-for="item in store.raz" :key="item">
            <v-card class="d-flex flex-column align-center" height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                <v-card-title>{{item}}</v-card-title>
                <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
                <img src="" class="w-100 h-100" alt="1">
            </v-card>
        </div>
    </div>
    </div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>

<style>

</style>