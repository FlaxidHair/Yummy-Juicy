<template>
    <div class="main">
<h1>Dishes</h1>
{{ store.amogus }}
    </div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>

<style>

</style>