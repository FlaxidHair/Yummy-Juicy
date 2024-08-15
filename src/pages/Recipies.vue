<template>
    <div class="main d-flex flex-column align-center mt-5 mb-5">
        <h2 class="mb-5 mt-5">
            Рецепты
        </h2> 
        <div class="w-75 border-thin mb-10">
            <v-card-text>
      <h2 class="text-h6 mb-2">Фильтр</h2>

      <v-chip-group
        v-model="store.amenities"
        column
      >
        <v-chip
          text="Все"
          variant="outlined"
          filter
          @click="store.startShow=0"
        ></v-chip>

        <v-chip
          text="Мясо"
          variant="outlined"
          filter
          @click="store.startShow=1"
        ></v-chip>

        <v-chip
          text="Рыба"
          variant="outlined"
          filter
          @click="store.startShow=2"
        ></v-chip>

        <v-chip
          text="Салаты"
          variant="outlined"
          filter
          @click="store.startShow=3"
        ></v-chip>

        <v-chip
          text="Супы"
          variant="outlined"
          filter
          @click="store.startShow=4"
        ></v-chip>

        <v-chip
          text="Десерт"
          variant="outlined"
          filter
          @click="store.startShow=5"
        ></v-chip>

        <v-chip
          text="Гарнир"
          variant="outlined"
          filter
          @click="store.startShow=6"
        ></v-chip>
      </v-chip-group>
    </v-card-text>
        </div>
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
// import { onMounted} from 'vue';

    

</script>

