<template>

 <div class="main d-flex justify-center">
  <v-app-bar :elevation="2" rounded class="position-relative w-75 d-flex justify-center">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  <div>
    <v-app-bar-title class="d-flex ga-3 text-no-wrap">
        <RouterLink to="/">
            Yummy&Juicy
            <v-icon color="blue" class="ma-0" icon="mdi-chef-hat"></v-icon>
        </RouterLink>

    </v-app-bar-title>
</div>
    <v-btn class="d-flex justify-center"><v-icon icon="mdi-magnify"></v-icon></v-btn>
</v-app-bar>
</div>

</template>

<script setup>

</script>

<style >

</style>