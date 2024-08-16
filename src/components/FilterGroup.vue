<template>
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
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>

