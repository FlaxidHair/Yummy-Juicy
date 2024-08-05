<template>
    <div class="main d-flex mt-15  align-center flex-column">
        <h2 class="mb-15">Блюда</h2>
        <div class="d-flex flex-wrap w-75 ml-auto mr-auto ga-10">
        <div  class=" ml-auto mr-auto" style="border:1px solid;" v-for="item in store.raz" :key="item">
            <v-card class="d-flex flex-column align-center" height="300" :elevation="5">
                <v-card-title>{{item}}</v-card-title>
                <span class="align-self-end mr-5 border-sm pa-1">12min</span>
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