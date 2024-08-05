<template>
    <div>
        <v-container class="mt-15 w-75">
            <h2 class="mb-5">Последние рецепты</h2>
            <div class="d-flex w-100 ga-10">

                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title>Курица</v-card-title>
                            <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                            <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title>Курица</v-card-title>
                            <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                            <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title>Курица</v-card-title>
                            <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                            <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card height="300" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title>Курица</v-card-title>
                            <v-card-subtitle>Курица,вода,соус,пармезан.</v-card-subtitle>
                            <v-card-text>Куриное филе запеченное в духовке в сыре пармезан</v-card-text>
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
