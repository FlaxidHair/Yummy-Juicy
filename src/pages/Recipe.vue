<template>
    <div class="main">
        <h2 class="recipe-title title">
            Рецепты
        </h2>
        <input type="text" v-model="$store.state.recipe.nameRecipe">
        <input type="text" v-model="$store.state.recipe.nameIng">
        <button @click="$store.commit('templateRecipe')">Добавить рецепт</button>
        <div v-for="recipe in $store.state.recipe.recipies" :key="recipe">
            {{ recipe.name}}
            {{ recipe.ing }}
            {{ }}
        </div>
        
    </div>
</template>

<script>
</script>
<style>
</style>