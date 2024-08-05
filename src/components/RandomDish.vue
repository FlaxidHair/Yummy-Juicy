<template>
<v-container class="w-100 d-flex mt-15 flex-column align-center">
            <h2 class="align-self-center">Что поесть?</h2>
            <v-btn class="w-33 mb-15 mt-10" @click="stop">Выбрать что поесть!</v-btn>
            <div class="d-flex w-75 ga-10">
                <v-card height="400" :elevation="4" class="w-33 d-flex flex-column align-center">
                    <v-card-subtitle class="mt-2">Мясное</v-card-subtitle>
                    <v-card-title>Куриное филе в пармезане</v-card-title>
                    <img src="" alt="Image of dish" class="w-100 h-100">
                </v-card>
                <v-card height="400" :elevation="4" class="w-33 d-flex flex-column align-center">
                    <v-card-subtitle class="mt-2">Гарнир</v-card-subtitle>
                    <v-card-title>Макароны</v-card-title>
                    <img src="" alt="Image of dish" class="w-100 h-100">
                </v-card>
                <v-card height="400" :elevation="4" class="w-33 d-flex flex-column align-center">
                    <v-card-subtitle class="mt-2">Салат</v-card-subtitle>
                    <v-card-title>Салат с огурцов и помидор</v-card-title>
                    <img src="" class="w-100 h-100" alt="Image of dish">
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