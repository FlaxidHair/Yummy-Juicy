<template>
    <div class="mt-10">
        <v-footer class="bg-grey-lighten-1" height="200px">
    <v-row justify="center" no-gutters>
        <ul class="d-flex ga-5">
        <RouterLink to="/"><li><v-btn>Главная</v-btn></li></RouterLink>
        <RouterLink to="/dishes"><li><v-btn>Блюда</v-btn></li></RouterLink>
        <RouterLink to="/recipies"><li><v-btn>Рецепты</v-btn></li></RouterLink>
        <RouterLink to="/template-recipe"><li><v-btn>Создать рецепт</v-btn></li></RouterLink>
        <RouterLink to="notes"><li><v-btn>Заметки</v-btn></li></RouterLink>
        </ul>
      <v-col class="text-center mt-15" cols="12">
        {{ new Date().getFullYear() }} — <strong>Yummy&Juice</strong>
      </v-col>
    </v-row>
  </v-footer>
    </div>
</template>

<script>
</script>

<style>

</style>