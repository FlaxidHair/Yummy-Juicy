<template>
    <div class="main w-100 d-flex flex-column align-center mt-5 mb-5">
        <h2 class="mb-5 mt-5">
            Рецепты
        </h2> 
        <FilterGroup></FilterGroup>
        <div v-show="store.startShow==0">
            <FilterStart></FilterStart>
        </div>
        <div v-show="store.startShow==1">
            <FilterMeat></FilterMeat>
        </div>
        <div v-show="store.startShow==2">
            <FilterFish></FilterFish>
        </div>
        <div v-show="store.startShow==3">
            <FilterSalad></FilterSalad>
        </div>
        <div v-show="store.startShow==4">
            <FilterSoup></FilterSoup>
        </div>
        <div v-show="store.startShow==5">
            <FilterDessert></FilterDessert>
        </div>
        <div v-show="store.startShow==6">
            <FilterGarnish></FilterGarnish>
        </div>
    </div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
import FilterStart from '../components/FilterStart.vue';
import FilterMeat from '../components/FilterMeat.vue';
import FilterFish from '../components/FilterFish.vue';
import FilterSalad from '../components/FilterSalad.vue';
import FilterSoup from '../components/FilterSoup.vue';
import FilterDessert from '../components/FilterDessert.vue';
import FilterGarnish from '../components/FilterGarnish.vue';
import FilterGroup from '../components/FilterGroup.vue';
</script>

