<template>
  <div class="mt-10 d-flex">
    <v-footer class="bg-red-accent-1 d-flex flex-column justify-center w-100">
        <ul class="d-flex justify-center ga-xl-5 ga-lg-5 ga-md-5 ga-sm-2 ga-2 mt-xl-16 mt-lg-16 mt-md-16 mt-sm- mt-2 mb-xl-16 mb-lg-16 mb-md-16 mb-sm-10 mb-5 flex-wrap w-75">
          <RouterLink to="/">
            <li><v-btn class="bg-transparent elevation-0 text-white">Главная</v-btn></li>
          </RouterLink>
          <RouterLink to="/favorite">
            <li><v-btn class="bg-transparent elevation-0 text-white">Избранное</v-btn></li>
          </RouterLink>
          <RouterLink to="/recipies">
            <li><v-btn class="bg-transparent elevation-0 text-white">Рецепты</v-btn></li>
          </RouterLink>
          <RouterLink to="/template-recipe">
            <li><v-btn class="bg-transparent elevation-0 text-white">Создать рецепт</v-btn></li>
          </RouterLink>
          <RouterLink to="notes">
            <li><v-btn class="bg-transparent elevation-0 text-white">Заметки</v-btn></li>
          </RouterLink>
        </ul>
        <div>
          <span class="text-white">{{ new Date().getFullYear() }} —</span>  <strong class="text-white">Yummy&Juice</strong>
        </div>
    </v-footer>
  </div>
</template>

<script>
</script>
