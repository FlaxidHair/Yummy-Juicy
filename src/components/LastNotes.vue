<template>
    <div class="d-flex flex-column align-center">
        <v-container class="bg-white elevation-3 mt-15 w-xl-100 w-sm-75  w-100 w-lg-100 d-flex flex-column flex-wrap">
            <h2 class="mb-10 align-self-center">Последние заметки</h2>
            <v-dialog max-width="800">
                <template v-slot:activator="{ props: activatorProps }">
                    <div class="d-flex  w-lg-100 w-md-100 w-sm-100 border-thin flex-wrap w-100 justify-xl-center justify-lg-center justify-md-center justify-sm-center justify-center  gc-xl-0 gc-lg-0 gc-md-0 gc-sm-0">
                        <div v-for="note in store.getterLastNotes" :key="note" class="w-xl-25 w-lg-50 w-md-50 w-sm-50 w-100 border-thin mb-7">
                            <v-hover v-slot="{ isHovering, props }" open-delay="50">
                                <div @click="() => { store.selectNote = note }" :item="note"
                                    class="w-xl-100 w-lg-100 w-md-100 w-sm-100 w-100 justify-center d-flex cursor-pointer" v-bind="activatorProps">
                                    <v-card class="w-xl-75 w-lg-75 w-md-75 w-sm-75 flex-column align-center"  height="200px"
                                        :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                                        <v-card-title class="mr-auto ml-auto text-wrap">{{ note.Title }}</v-card-title>
                                        <v-card-text class="h-25 text-caption ">{{ note.Subtitle }}</v-card-text>
                                    </v-card>
                                </div>
                            </v-hover>
                        </div>
                    </div>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card class="d-flex flex-column">
                        <div class="d-flex mt-1">
                            <v-card-title>
                                {{ store.selectNote.Title }}
                            </v-card-title>
                            <v-card-actions class="ml-auto align-end mr-2">
                                <v-spacer></v-spacer>
                                <v-btn text="Закрыть" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </div>
                        <v-card-text>{{ store.selectNote.Subtitle }}</v-card-text>
                    </v-card>
                </template>
            </v-dialog>
        </v-container>
    </div>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();
import { onMounted } from 'vue';
onMounted(() => {
    store.getNotes
})
</script>
