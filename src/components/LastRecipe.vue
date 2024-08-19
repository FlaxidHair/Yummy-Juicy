<template>
    <div>
        <v-container class="mt-15 w-100 d-flex bg-white elevation-3 flex-column">
            <h2 class="mb-10 align-self-center">Последние рецепты</h2>
<!-- <div class="d-flex w-100 ga-5">
            <div v-for="recipe in store.getterLastRecipies" Ж :key="item" class="d-flex w-25 ga-5 mb-7">
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <div class="w-100 cursor-pointer  d-flex" v-bind="activatorProps">
                        <v-card  class="d-flex flex-column align-center" height="600" :class="isHovering, props"
                            v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title class="mr-auto ml-auto">{{recipe.Name }}</v-card-title>
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.Category }}</div>
                                <v-card-subtitle
                                    class="w-50 pa-1 align-self-center">{{recipe.Ingridients }}</v-card-subtitle>
                                <div class="border-thin mr-1 pa-1 align-self-center">
                                    {{ store.getTime(recipe.Time) }}</div>
                            </div>
                                <v-card-text class="h-25 text-caption">{{ recipe.Description }}</v-card-text>
                            <img :src="recipe.Image" class="w-100 h-50" alt="Тут могло быть изображения еды">
                        </v-card>
                    </div> -->
                <!-- </v-hover> -->
                <Hover></Hover>
                <!-- <v-dialog max-width="1000">
        <template v-slot:activator="{ props: activatorProps }">
            <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <div class="w-25 cursor-pointer" v-bind="activatorProps">
                        <v-card  class="d-flex flex-column align-center" height="600" :class="isHovering, props"
                            v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title class="mr-auto ml-auto">{{ recipe.at(-1).Name }}</v-card-title>
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.at(-1).Category }}</div>
                                <v-card-subtitle
                                    class="w-50 pa-1 align-self-center">{{ recipe.at(-1).Ingridients }}</v-card-subtitle>
                                <div class="border-thin mr-1 pa-1 align-self-center">
                                    {{ store.getTime(recipe.at(-1).Time) }}</div>
                            </div>
                                <v-card-text class="h-25 text-caption">{{ recipe.at(-1).Description }}</v-card-text>
                            <img :src="recipe.at(-1).Image" class="w-100 h-50" alt="Тут могло быть изображения еды">
                        </v-card>
                    </div>
                </v-hover>
        </template>


        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-title>{{ recipe.at(-1).Name }}</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog> -->

<!--
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="600" :class="isHovering, props"
                            v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title class="mr-auto  ml-auto">{{ recipe.at(-2).Name }}</v-card-title>
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.at(-2).Category }}</div>
                                <v-card-subtitle
                                    class="w-50 pa-1 align-self-center">{{ recipe.at(-2).Ingridients }}</v-card-subtitle>
                                <div class="border-thin mr-1 pa-1 align-self-center">
                                    {{ store.getTime(recipe.at(-2).Time) }}</div>
                            </div>
                            <v-card-text class=" h-50 text-caption">{{ recipe.at(-2).Description }}</v-card-text>
                            <img :src="recipe.at(-2).Image" class="w-100 h-50" alt="Тут могло быть изображения еды">
                        </v-card>
                    </RouterLink>
                </v-hover>
                 <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="600" :class="isHovering, props"
                            v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title class="mr-auto ml-auto">{{ recipe.at(-3).Name }}</v-card-title>
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.at(-3).Category }}</div>
                                <v-card-subtitle
                                    class="w-50 pa-1 align-self-center">{{ recipe.at(-3).Ingridients }}</v-card-subtitle>
                                <div class="border-thin mr-1 pa-1 align-self-center">
                                    {{ store.getTime(recipe.at(-3).Time) }}
                                </div>
                            </div>
                            <v-card-text class="text-caption">{{ recipe.at(-3).Description }}</v-card-text>
                            <img :src="recipe.at(-3).Image" class="w-100 h-50" alt="Тут могло быть изображения еды">
                        </v-card>
                    </RouterLink>
                </v-hover>
                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                    <RouterLink class="w-25 cursor-pointer" to="">
                        <v-card class="d-flex flex-column align-center" height="600" :class="isHovering, props"
                            v-bind="props" :elevation="isHovering ? 8 : 2">
                            <v-card-title class="mr-auto ml-auto">{{ recipe.at(-4).Name }}</v-card-title>
                            <div class="d-flex w-100 justify-center">
                                <div class="border-thin ml-1 pa-1 align-self-center">{{ recipe.at(-4).Category }}</div>
                                <v-card-subtitle
                                    class="w-50 pa-1 align-self-center">{{ recipe.at(-4).Ingridients }}</v-card-subtitle>
                                <div class="border-thin mr-1 align-self-center">{{ store.getTime(recipe.at(-4).Time) }}
                                </div>
                            </div>
                            <v-card-text class="text-caption">{{ recipe.at(-4).Description }}</v-card-text>
                            <img :src="recipe.at(-4).Image" class="w-100 h-50" alt=" Тут могло быть изображения еды">
                        </v-card>
                    </RouterLink>
                </v-hover> --> 
            <!-- </div> -->
        <!-- </div> -->
        </v-container>
    </div>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();
import Hover from '../components/LastRecipiesDialog.vue'
</script>
