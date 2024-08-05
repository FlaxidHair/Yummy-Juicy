<template>
    <main class="main">
        <LastRecipe></LastRecipe>
        <RandomDish></RandomDish>
    </main>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
import LastRecipe from '../components/LastRecipe.vue'
import RandomDish from '../components/RandomDish.vue'
const store = useStoreRecipies();
</script>

<style>

</style>