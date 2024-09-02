<template>
  <div class="main d-flex align-center align-self-center w-75 mb-10 flex-column">
    <h2 class="mt-10 mb-5">Добавить рецепт</h2>
    <div class="w-66 bg-white">
      <v-container class="elevation-2">
        <div class="d-flex">
          <v-card class="mx-auto mb-5 pl-10" max-width="600px" :elevation="0">
            <v-card-text>
              <h2 class="text-h6 mb-2 d-flex justify-center">Выберите категорию рецепта</h2>
              <v-chip-group v-model="amenities" column tag="FORM" ref="formCat">
                <v-chip text="Мясо" variant="outlined" filter tag="CHECKBOX" name="Category"></v-chip>

                <v-chip text="Рыба" variant="outlined" filter tag="CHECKBOX"></v-chip>

                <v-chip text="Гарнир" variant="outlined" filter tag="CHECKBOX"></v-chip>

                <v-chip text="Салаты" variant="outlined" filter tag="CHECKBOX"></v-chip>

                <v-chip text="Десерт" variant="outlined" filter tag="CHECKBOX"></v-chip>

                <v-chip text="Супы" variant="outlined" filter tag="CHECKBOX"></v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
          <v-form ref="form">
          <v-responsive class="pa-2">
              <v-autocomplete v-model="this.time"  label="Время" :items="itemsTime" class=" auto-select-first align-self-center shrink ml-auto mr-10"
                variant="outlined" width="150px" name="Time"></v-autocomplete>
              </v-responsive>
            </v-form>
        </div>
        <v-form ref="vform" v-model="this.valid">
        <form ref="form" @submit.prevent>
          <div class="px-10 d-flex flex-column">
            <v-text-field required :rules="[rules.required]" name="Name" variant="outlined" v-model="this.inputName" prepend-inner-icon="mdi-tag-outline"
              label="Введите название рецепта"></v-text-field>
            <v-text-field required :rules="[rules.required]" name="Ingridients" v-model="this.inputIngridients" variant="outlined" multiple label="Введите ингредиенты"
              prepend-inner-icon="mdi-nutrition"></v-text-field>
            <v-textarea required :rules="[rules.required]" name="Description" label="Описание рецепта" v-model="this.inputDescription" prepend-inner-icon="mdi-pot-steam"
              variant="outlined"></v-textarea>
            <v-text-field required :rules="[rules.required]" name="Image" variant="outlined" v-model="this.inputImage" prepend-inner-icon="mdi-mushroom"
              label="Введите URL изображения"></v-text-field>
            <div class="d-flex">
              <v-switch color="blue" label="Добавить в любимые рецепты" v-model="this.chooseFavorite" class="d-flex text-blue" inset></v-switch>
              <v-btn @click="postRecipe()" type="submit" class="w-25 my-5 ml-auto bg-red-accent-1 text-white"
                height="40px">Добавить</v-btn>
            </div>
          </div>
        </form>
      </v-form>
      </v-container>
    </div>
  </div>
</template>

<script>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();

export default {
  data: () => ({
    valid:false,
    inputName:"",
    inputIngridients:"",
    inputDescription:"",
    inputImage:"",
    amenities: [],
    ingridients: [],
    time: "",
    rules: {
        required: value => !!value || 'Необходимо заполнить поле!',
      },
    chooseFavorite:false,
    itemsTime: [
      "0:00м",
      "0:05м",
      "0:10м.",
      "0:15м.",
      "0:20м.",
      "0:25м.",
      "0:30м.",
      "0:35м.",
      "0:40м.",
      "0:45м.",
      "0:50м.",
      "0:55м.",
      "1:00ч.",
      "1:05ч",
      "1:10м.",
      "1:15м.",
      "1:20м.",
      "1:25м.",
      "1:30м.",
      "1:35м.",
      "1:40м.",
      "1:45м.",
      "1:50м.",
      "1:55м.",
      "2:00ч.",
      ">2:00ч.",
    ],
  }),
  mounted(){
    this.time = this.itemsTime[0]
  },
  methods: {
    postRecipe() {
      if(this.amenities.length == 0) {
        alert('Выберите категорию!')
        return
      }
      const formData = new FormData(this.$refs.form)
      if (this.amenities == 0) {
        formData.set("Category", "Мясо")
      } else if (this.amenities == 1) {
        formData.set("Category", "Рыба")
      } else if (this.amenities == 2) {
        formData.set("Category", "Гарнир")
      } else if (this.amenities == 3) {
        formData.set("Category", "Салаты")
      } else if (this.amenities == 4) {
        formData.set("Category", "Десерт")
      } else if (this.amenities == 5) {
        formData.set("Category", "Супы")
      }
      formData.set("Favorite",this.chooseFavorite)
      formData.set("Time", this.time)
      if(this.valid) {
        fetch('https://script.google.com/macros/s/AKfycbw4BJY0TtaC1QaUnZtxhHXusYcNV-AL_pQn2iZKbInP5serwWDpfJm_S9Cn_R6x4S8r3g/exec', {
        method: "POST",
        body: formData
      }).then((response) => {
        if (response.status == 200) {
          this.$refs.vform.reset(); 
          store.getRecipiesNOLOAD()
          this.amenities = []
          this.itemsTime
          alert("Рецепт добавлен")
        }
      })
      }
    },
  }
}
</script>

<style></style>