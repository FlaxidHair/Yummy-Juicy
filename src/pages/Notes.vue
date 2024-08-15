<template>
    <div class="main d-flex flex-column align-center">
        <h2 class="mt-10 mb-5">Добавить заметку</h2>
    <v-container class="">
        <div class="w-50 mr-auto ml-auto border-thin mb-5">
            <div class="d-flex">
        <v-text-field  label="Введите заголовок" tile variant="solo"  hide-details class=""></v-text-field>
                <v-btn class="elevation-2" width="120px" tile height="56px" flat>Добавить</v-btn>
    </div>
        <v-textarea label="Введите заметку" no-resize max-rows="10" tile variant="filled" hide-details class=""></v-textarea>
        </div>
        <v-divider></v-divider>
    </v-container>
    <v-container class="d-flex" v-for="note in store.notes" :key="note">
        <v-card class="d-flex flex-column pa-5">
            <v-card-title>{{ note.Title }}</v-card-title>
        </v-card>
    </v-container>
</div>

</template>

<script>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>

<style>

</style>