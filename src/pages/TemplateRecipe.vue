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

          <v-responsive class="pa-2">
            <form ref="formTime">
              <v-text-field name="Time" v-model="time" variant="outlined" class="align-self-center shrink ml-auto mr-10"
                width="110px" type="time" label="Время готовки"></v-text-field>
            </form>
          </v-responsive>

        </div>
        <form ref="form">
          <div class="px-10 d-flex flex-column">
            <v-text-field required name="Name" variant="outlined" prepend-inner-icon="mdi-tag-outline"
              label="Введите название рецепта"></v-text-field>
            <v-text-field required name="Ingridients" variant="outlined" multiple label="Введите ингредиенты"
              prepend-inner-icon="mdi-nutrition"></v-text-field>
            <v-textarea required name="Description" label="Описание рецепта" prepend-inner-icon="mdi-pot-steam"
              variant="outlined"></v-textarea>
            <v-text-field required name="Image" variant="outlined" prepend-inner-icon="mdi-mushroom"
              label="Введите URL изображения"></v-text-field>
            <div class="d-flex">
              <v-switch color="blue" label="Добавить в любимые рецепты" class="d-flex text-blue" inset></v-switch>
              <v-btn @click="postRecipe()" type="button" class="w-25 my-5 ml-auto bg-red-accent-1 text-white"
                height="40px">Добавить</v-btn>
            </div>
          </div>
        </form>
      </v-container>
    </div>
  </div>
</template>

<script>
import { useStoreRecipies } from '../stores/storeRecipies'
const store = useStoreRecipies();

export default {
  data: () => ({
    amenities: [],
    ingridients: [],
    time: "",
  }),
  methods: {
    postRecipe() {
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
      formData.set("Time", this.time)
      fetch('https://script.google.com/macros/s/AKfycbw4BJY0TtaC1QaUnZtxhHXusYcNV-AL_pQn2iZKbInP5serwWDpfJm_S9Cn_R6x4S8r3g/exec', {
        method: "POST",
        body: formData
      }).then((response) => {
        if (response.status == 200) {
          store.getRecipies()
          alert("Рецепт добавлен")
        }
      })
    },
  }
}
</script>

<style></style>