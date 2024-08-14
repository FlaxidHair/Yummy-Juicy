<template>
    <div>
        <v-text-field label="Введите заголовок"></v-text-field>
    </div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>
