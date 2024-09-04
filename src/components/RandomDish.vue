<template>
    <!-- <v-container class="d-flex w-100 bg-white mt-15 flex-column align-center elevation-3">
        <h2 class="align-self-center">Что поесть?</h2>
        <v-btn class="bg-red-accent-1  w-xl-33 w-lg-33 w-md-33 w-sm-50 w-100 mb-15 mt-10 text-white"
            @click="store.getRandom()">Выбрать что
            поесть!</v-btn>
        <div v-if="store.randomState == 1"
            class="d-flex flex-xl-row flex-lg-row flex-column flex-md-row flex-sm-column w-xl-75 w-lg-75 w-md-100 w-sm-100 w-100 mb-7 ga-10 justify-center">
            <v-card height="350" :elevation="4"
                class="w-xl-33 w-lg-33 w-md-25 w-sm-100 w-100 d-flex flex-column align-center">
                <v-card-subtitle class="mt-2">Первое</v-card-subtitle>
                <v-card-title class="text-wrap text-center">{{ store.getMeatName.name }}</v-card-title>
                <img :src="store.getMeatName.image" alt="Image of dish" class="w-100 h-100">
            </v-card>
            <v-card height="350" :elevation="4"
                class="w-xl-33 w-lg-33 w-md-25 w-sm-100 w-100 d-flex flex-column align-center">
                <v-card-subtitle class="mt-2">Второе</v-card-subtitle>
                <v-card-title class="text-wrap text-center">{{ store.getGarnishName.name }}</v-card-title>
                <img :src="store.getGarnishName.image" alt="Image of dish" class="w-100 h-100">
            </v-card>
            <v-card height="350" :elevation="4"
                class="w-xl-33 w-lg-33 w-md-25 w-sm-100 w-100 d-flex flex-column align-center">
                <v-card-subtitle class="mt-2">Салат</v-card-subtitle>
                <v-card-title class="text-wrap text-center">{{ store.getSaladName.name }}</v-card-title>
                <img :src="store.getSaladName.image" class="w-100 h-100" alt="Image of dish">
            </v-card>
        </div>
    </v-container> -->


    <v-dialog max-width="800">
        <template v-slot:activator="{ props: activatorProps }">
            <v-container class="d-flex w-100 bg-white mt-15 flex-column align-center elevation-3">
                <h2 class="align-self-center">Что поесть?</h2>
                <v-btn class="bg-red-accent-1  w-xl-33 w-lg-33 w-md-33 w-sm-50 w-100 mb-15 mt-10 text-white"
                    @click="store.getRandom()">Выбрать что
                    поесть!</v-btn>
                <div v-if="store.randomState == 1"
                    class="d-flex flex-xl-row flex-lg-row flex-column flex-md-row flex-sm-column w-xl-75 w-lg-75 w-md-75 w-sm-100 w-100 mb-7 ga-10 align-center justify-center">
                    <v-hover v-slot="{ isHovering, props }" open-delay="50" class="w-100">
                        <div @click="() => {
                            store.selectRecipe = store.getMeatName;
                            store.dialogRecipe = true;
                        }
                            " :item="recipe" v-bind="activatorProps" class="w-xl-33 w-lg-33 w-md-50 w-sm-75 w-100">
                            <v-card height="350" :class="(isHovering, props)" v-bind="props"
                                :elevation="isHovering ? 8 : 2" class="cursor-pointer w-100 d-flex flex-column align-center">
                                <v-card-subtitle class="mt-2">Первое</v-card-subtitle>
                                <v-card-title class="text-wrap text-center">{{ store.getMeatName.Name }}</v-card-title>
                                <img :src="store.getMeatName.Image" alt="Image of dish" class="w-100 h-100">
                            </v-card>
                        </div>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }" open-delay="50" class="w-100">
                        <div @click="() => {
                            store.selectRecipe = store.getGarnishName;
                            store.dialogRecipe = true;
                        }
                            " :item="recipe" v-bind="activatorProps" class="w-xl-33 w-lg-33 w-md-50 w-sm-75 w-100">
                            <v-card height="350" :class="(isHovering, props)" v-bind="props"
                                :elevation="isHovering ? 8 : 2" class="cursor-pointer w-100 d-flex flex-column align-center">
                                <v-card-subtitle class="mt-2">Первое</v-card-subtitle>
                                <v-card-title class="text-wrap text-center">{{ store.getGarnishName.Name
                                    }}</v-card-title>
                                <img :src="store.getGarnishName.Image" alt="Image of dish" class="w-100 h-100">
                            </v-card>
                        </div>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }" open-delay="50" class="w-100">
                        <div @click="() => {
                            store.selectRecipe = store.getSaladName;
                            store.dialogRecipe = true;
                        }
                            " :item="recipe" v-bind="activatorProps" class="w-xl-33 w-lg-33 w-md-50 w-sm-75 w-100">
                            <v-card height="350" :class="(isHovering, props)" v-bind="props"
                                :elevation="isHovering ? 8 : 2" class="cursor-pointer w-100 d-flex flex-column align-center">
                                <v-card-subtitle class="mt-2">Первое</v-card-subtitle>
                                <v-card-title class="text-wrap text-center">{{ store.getSaladName.Name }}</v-card-title>
                                <img :src="store.getSaladName.Image" alt="Image of dish" class="w-100 h-100">
                            </v-card>
                        </div>
                    </v-hover>
                </div>
            </v-container>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card v-show="store.dialog" class="d-flex flex-column">
                <div class="d-flex mt-1 flex-wrap">
                    <v-card-title>
                        {{ store.selectRecipe.Name }}
                    </v-card-title>
                    <v-card-actions
                        class="ml-auto order-sm-2 order-first order-md-2 order-lg-2 order-xl-2 align-end mr-2">
                        <v-spacer></v-spacer>
                        <v-btn text="Закрыть" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </div>
                <div class="d-flex ">
                    <div>
                        <v-card-text class="border-thin py-2 px-1 ml-5 mr"> {{ store.selectRecipe.Category
                            }}</v-card-text>
                    </div>
                    <v-card-subtitle class="ml-auto border-thin py-2 px-1 mr-5">{{ store.selectRecipe.Time
                        }}</v-card-subtitle>
                </div>
                <v-card-text>{{ store.selectRecipe.Ingridients }}</v-card-text>
                <v-card-text>{{ store.selectRecipe.Description }}</v-card-text>
                <img :src="store.selectRecipe.Image" alt="Изображение блюда">
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();
</script>