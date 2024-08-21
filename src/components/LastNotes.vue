<template>
    <div class="d-flex flex-column align-center">
        <v-container class="bg-white elevation-3 mt-15 w-75 d-flex flex-column">
            <h2 class="mb-10 align-self-center">Последние заметки</h2>
            <div class="d-flex ga-5 w-100">
            <div class="d-flex ga-10 mb-7" v-for="note in store.getterNotes" :key="note">
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-100 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" min-height="200px" max-height="500" :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title>{{ note.Title }}</v-card-title>
                            <v-card-text>{{note.Subtitle}}</v-card-text>
                        </v-card>
                    </RouterLink>
                </v-hover>
            </div>
        </div>
        </v-container>
    </div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
import { onMounted } from 'vue';
onMounted(()=>{
    store.getNotes
})
</script>

