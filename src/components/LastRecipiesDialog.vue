<template>
    <div>
        <v-dialog  max-width="500" >
        <template v-slot:activator="{ props: activatorProps }">
            <div class="d-flex ga-5">
            <div v-for="recipe in store.getterLastRecipies" :item="recipe" :key="recipe" class="d-flex w-25 ga-5 mb-7">
                <v-hover  v-slot="{ isHovering, props }" open-delay="50">
                    <div  class="w-100 cursor-pointer d-flex" v-bind="activatorProps">
                        <v-card class="d-flex flex-column align-center" height="600" :class="isHovering, props"
                            v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title class="mr-auto ml-auto">{{recipe.Name }}</v-card-title>
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.Category }}</div>
                                <v-card-subtitle
                                    class="w-50 pa-1 align-self-center">{{recipe.Ingridients }}</v-card-subtitle>
                                <div  class="border-thin mr-1 pa-1 align-self-center">
                                    {{ store.getTime(recipe.Time) }}</div>
                            </div>
                                <v-card-text class="h-25 text-caption">{{ recipe.Description }}</v-card-text>
                            <img :src="recipe.Image" class="w-100 h-50" alt="Тут могло быть изображения еды">
                        </v-card>
                    </div> 
                </v-hover>
            </div>
            </div>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card >
            <v-card-title>
                {{model}}
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();

</script>
