<template>
    <main class="main">
        <LastRecipe></LastRecipe>
    </main>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
import LastRecipe from '../components/LastRecipe.vue'
const store = useStoreRecipies();
</script>

<style>

</style>