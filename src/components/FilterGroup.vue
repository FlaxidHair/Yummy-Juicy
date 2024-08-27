<template>
  <div class="w-75 border-thin mb-10">
    <v-card-text>
      <h2 class="text-h6 mb-2">Фильтр</h2>
      <div class="d-flex">
      <v-chip-group v-model="store.amenities" column>
        <v-chip text="Все" variant="outlined" filter @click="changeAmenities(0)"></v-chip>

        <v-chip text="Мясо" variant="outlined" filter @click="changeAmenities(1)"></v-chip>

        <v-chip text="Рыба" variant="outlined" filter @click="changeAmenities(2)"></v-chip>

        <v-chip text="Салаты" variant="outlined" filter @click="changeAmenities(3)"></v-chip>

        <v-chip text="Супы" variant="outlined" filter @click="changeAmenities(4)"></v-chip>

        <v-chip text="Десерт" variant="outlined" filter @click="changeAmenities(5)"></v-chip>

        <v-chip text="Гарнир" variant="outlined" filter @click="changeAmenities(6)"></v-chip>
      </v-chip-group>
      <v-btn class="ml-5 bg-red-accent-1" icon="mdi-refresh" width="40px" height="40px" @click="()=>{store.getRecipies()}"><v-icon color="white">mdi-refresh</v-icon></v-btn>
    </div>
    </v-card-text>
  </div>
</template>

<script setup>
import { useStoreRecipies } from "../stores/storeRecipies";

const store = useStoreRecipies();

function changeAmenities(item) {
  store.startShow = item;
  store.showSearchResult = false;
}
</script>
