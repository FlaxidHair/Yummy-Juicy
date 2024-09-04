<template>
    <v-container class="d-flex w-100 bg-white mt-15 flex-column align-center elevation-3">
        <h2 class="align-self-center">Что поесть?</h2>
        <v-btn class="bg-red-accent-1  w-xl-33 w-lg-33 w-md-33 w-sm-50 w-100 mb-15 mt-10 text-white"
            @click="store.getRandom()">Выбрать что
            поесть!</v-btn>
        <div v-if="store.randomState == 1"
            class="d-flex flex-xl-row flex-lg-row flex-column flex-md-row flex-sm-column w-xl-75 w-lg-75 w-md-100 w-sm-100 w-100 mb-7 ga-10 justify-center">
            <v-card height="350" :elevation="4"
                class="w-xl-33 w-lg-33 w-md-25 w-sm-100 w-100 d-flex flex-column align-center">
                <v-card-subtitle class="mt-2">Первое</v-card-subtitle>
                <v-card-title class="text-wrap text-center">{{ store.getMeatName.name }}</v-card-title>
                <img :src="store.getMeatName.image" alt="Image of dish" class="w-100 h-100">
            </v-card>
            <v-card height="350" :elevation="4"
                class="w-xl-33 w-lg-33 w-md-25 w-sm-100 w-100 d-flex flex-column align-center">
                <v-card-subtitle class="mt-2">Второе</v-card-subtitle>
                <v-card-title class="text-wrap text-center">{{ store.getGarnishName.name }}</v-card-title>
                <img :src="store.getGarnishName.image" alt="Image of dish" class="w-100 h-100">
            </v-card>
            <v-card height="350" :elevation="4"
                class="w-xl-33 w-lg-33 w-md-25 w-sm-100 w-100 d-flex flex-column align-center">
                <v-card-subtitle class="mt-2">Салат</v-card-subtitle>
                <v-card-title class="text-wrap text-center">{{ store.getSaladName.name }}</v-card-title>
                <img :src="store.getSaladName.image" class="w-100 h-100" alt="Image of dish">
            </v-card>
        </div>
    </v-container>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>