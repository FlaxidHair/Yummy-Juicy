<template>
    <div class="main">
        <h2 class="recipe-title title">
            Рецепты
        </h2>
        <input type="text" v-model="nameRecipe">
        <input type="text" v-model="nameIng">
        <button @click="addRecipe()">Добавить рецепт</button>
        <div v-for="(recipe,index) in recipies" :key="recipe">
            <h1 class="template-recipe__title">{{ recipe.name}}</h1>                    
            <p class="template-recipe__ingridients">{{ recipe.ing }}</p>
            <span @click="deleteRecipe(index)">Delete</span>
        </div>
        
    </div>
</template>

<script>

export default {
    data() {
    return {    
        nameIng:'',
        nameRecipe:'',  
        recipies:[],
    }
},
   mounted() {
        const data = JSON.parse(localStorage.getItem("recipies"))
        this.recipies = data
   },
   methods: {
    addRecipe() {
            this.recipies.push({
            name:this.nameRecipe,
            ing:this.nameIng ,
        })       
        localStorage.setItem('recipies',JSON.stringify(this.recipies))
    },
    deleteRecipe(index) {
        this.recipies.splice(index,1)
        localStorage.setItem('recipies',JSON.stringify(this.recipies))
    }
   }
}
</script>
<style>
</style>