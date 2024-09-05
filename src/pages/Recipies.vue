<template>
    <div class="main w-100 d-flex flex-column align-center mt-5 mb-5">
        <h2 class="mb-5 mt-5" v-show="!store.loading">
            Рецепты
        </h2>
        <FilterGroup v-show="!store.loading"></FilterGroup>
        <div v-if="!store.loading">
        <div v-show="!store.showSearchResult">
                <FilterStart></FilterStart>
        </div>
        <div v-show="store.showSearchResult">
            <FilterSearch></FilterSearch>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();
import FilterStart from '../components/FilterStart.vue';
import FilterGroup from '../components/FilterGroup.vue';
import FilterSearch from '@/components/FilterSearch.vue';
import { watch } from 'vue';
watch(() => store.inputText, (newVal) => {
    if (newVal == "") {
        store.showSearchResult = false;
    }
},
)


</script>
