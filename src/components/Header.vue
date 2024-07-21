<template>
   <header>
      <router-link to="/">Main-page</router-link>
      <router-link to="/recipe">Recipe</router-link>
   </header>
</template>

<script>
export default {
data() {
   
},
props:{

}
}
</script>

<style>
   header {
      display:flex;
      column-gap:20px;
   }
</style>