<template>
    <div class="main d-flex align-center align-self-center w-75 flex-column">
        <h2 class="mt-15 mb-15">Добавить рецепт</h2>
        <div class="w-66 ">
            <v-container class="elevation-2">
                <div class="d-flex">
            <v-card
    class="mx-auto mb-5 pl-10"
    max-width="600px"
    :elevation="0"
  >
    <v-card-text>
      <h2 class="text-h6 mb-2 d-flex justify-center">Выберите категорию рецепта</h2>

      <v-chip-group
        v-model="amenities"
        column

      >
        <v-chip
          text="Мясо"
          variant="outlined"
          filter
        ></v-chip>

        <v-chip
          text="Рыба"
          variant="outlined"
          filter
        ></v-chip>

        <v-chip
          text="Гарнир"
          variant="outlined"
          filter
        ></v-chip>

        <v-chip
          text="Салаты"
          variant="outlined"
          filter
        ></v-chip>

        <v-chip
          text="Десерт"
          variant="outlined"
          filter
        ></v-chip>

        <v-chip
          text="Супы"
          variant="outlined"
          filter
        ></v-chip>
      </v-chip-group>
    </v-card-text>  
  </v-card>
  <v-responsive class="pa-2"> 
  <v-text-field variant="outlined" class="align-self-center shrink ml-auto mr-10" width="110px" type="time" label="Время готовки"></v-text-field>
</v-responsive>
</div>
  <div class="px-10 d-flex flex-column">
    <v-text-field variant="outlined" prepend-inner-icon="mdi-tag-outline" label="Введите название рецепта"></v-text-field>
    <v-combobox variant="outlined" multiple chips label="Введите ингредиенты" prepend-inner-icon="mdi-nutrition" :items="ingridients"></v-combobox>
    <v-textarea label="Описание рецепта" prepend-inner-icon="mdi-pot-steam" variant="outlined"></v-textarea>
    <div class="d-flex"> 
        <v-switch color="blue" label="Добавить в любимые рецепты" class="d-flex text-blue" inset></v-switch>
        <v-btn class="w-25 my-5 ml-auto" height="40px">Добавить</v-btn>
    </div>
</div>
</v-container>
        </div>
    </div>
</template>

<script>
import {useStoreRecipies} from '../stores/storeRecipies'
const store = useStoreRecipies();

export default {
    data: () => ({
      amenities: [],
      ingridients:[],
    }),
  }
</script>

<style >

</style>