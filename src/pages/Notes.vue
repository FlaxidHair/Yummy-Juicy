<template>
    <div class="main d-flex flex-column align-center">
        <div class="w-75 ">
        <v-text-field label="Введите заголовок"  class=""></v-text-field>
    </div>
    </div>
</template>

<script>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>

<style>

</style>