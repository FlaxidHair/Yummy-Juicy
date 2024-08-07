<template>
 <div class="d-flex justify-center">
  <v-app-bar :elevation="3" rounded class="bg-red-accent-1 mt-3 position-relative w-75 d-flex justify-center">
  <div class="ml-8">
    <v-app-bar-title class="d-flex ga-3 text-no-wrap">
        <RouterLink class="text-red-lighten-5" to="/">
            Yummy&Juicy
        </RouterLink>

    </v-app-bar-title>    
</div>
<div class="ml-auto" >
    <ul class="d-flex">
        <RouterLink to="/dishes"><li><v-btn class="text-white">Блюда</v-btn></li></RouterLink>
        <RouterLink to="/recipies"><li><v-btn class="text-white">Рецепты</v-btn></li></RouterLink>
        <RouterLink to="/template-recipe"><li><v-btn class="text-white">Создать рецепт</v-btn></li></RouterLink>
        <RouterLink to="notes"><li class="text-white"><v-btn>Заметки</v-btn></li></RouterLink>
    </ul>
</div>
<div class="ml-auto mr-5" >
      <v-text-field
        width="20vw"
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Найти рецепт"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="onClick"
      ></v-text-field>
</div>
</v-app-bar>
</div>

</template>

<script>
 export default {
    data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 1500)
      },
    },
  }
</script>

<style >

</style>