<template>
    <div class="main d-flex mt-15  align-center flex-column" v-show="!store.loading">
     <p>В разработке</p>
    </div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>

<style>

</style>