<template>
<v-container class="w-100 d-flex bg-white bg-white mt-15 flex-column align-center elevation-3">
            <h2 class="align-self-center">Что поесть?</h2>
            <v-btn class="bg-red-accent-1 w-33 mb-15 mt-10 text-white" @click="store.getRandom()">Выбрать что поесть!</v-btn>
            
            <div v-if="store.randomState==1" class="d-flex w-75 mb-7 ga-10">
                <v-card height="350" :elevation="4" class="w-33 d-flex flex-column align-center">
                    <v-card-subtitle class="mt-2">Мясное</v-card-subtitle>
                    <v-card-title>{{ store.getMeatName.name }}</v-card-title>
                    <img :src="store.getMeatName.image" alt="Image of dish" class="w-100 h-100">
                </v-card>
                <v-card height="350" :elevation="4" class="w-33 d-flex flex-column align-center">
                    <v-card-subtitle class="mt-2">{{store.getGarnishName.name}}</v-card-subtitle>
                    <v-card-title>Макароны</v-card-title>
                    <img :src="store.getGarnishName.image" alt="Image of dish" class="w-100 h-100">
                </v-card>
                <v-card height="350" :elevation="4" class="w-33 d-flex flex-column align-center">
                    <v-card-subtitle class="mt-2">Салат</v-card-subtitle>
                    <v-card-title>{{ store.getSaladName.name }}</v-card-title>
                    <img :src="store.getSaladName.image" class="w-100 h-100" alt="Image of dish">
                </v-card>
            </div>
        </v-container>
</template>

<style>
</style>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>