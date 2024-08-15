<template>
    <div class="main d-flex flex-column align-center mt-5 mb-5">
        <h2 class="mb-5 mt-5">
            Рецепты
        </h2> 
        <div class="w-75 border-thin">
        </div>
        <div>
            <FilterStart></FilterStart>
        </div>
        <div>
            <FilterMeet></FilterMeet>

        </div>
        <div>
            <FilterFish></FilterFish>

        </div>
    </div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
import FilterMeet from '../components/FilterMeet.vue';
import FilterStart from '../components/FilterStart.vue';
import FilterFish from '../components/FilterFish.vue';

const store = useStoreRecipies();
</script>
<style>
</style>