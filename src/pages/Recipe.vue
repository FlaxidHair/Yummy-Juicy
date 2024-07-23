<template>
    <div class="main">
        <h2 class="recipe-title title">
            Рецепты
        </h2>
        <input type="text" v-model="$store.state.recipe.nameRecipe">
        <input type="text" v-model="$store.state.recipe.nameIng">
        <button @click="$store.commit('templateRecipe')">Добавить рецепт</button>
        <div v-for="recipe in $store.state.recipe.recipies2" :key="recipe">
            {{ recipe }}
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>
<style>
</style>