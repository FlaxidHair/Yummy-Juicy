<template>
   <header class="header">
      <router-link to="/">
      <div class="header__logotype">
            <img class="header__logotype-img" src="../assets/images/logo.png" alt="Logo">
            <h1 class="header__logotype-text">RecipeBook</h1>
      </div>
   </router-link>
      <ul clas="list-item">
         <li class="header__list-item"><router-link to="/">Главная</router-link></li>
         <li class="header__list-item"><router-link to="/recipe">Рецепты</router-link></li>
         <li class="header__list-item"><router-link to="/dishes">Блюда</router-link></li>
         <li class="header__list-item"><router-link to="/templaterecipe">Создать рецепт</router-link></li>
         <li class="header__list-item"><router-link to="/notes">Заметки</router-link></li>
      </ul>
      <button class="header__auth-modal" @click="$store.commit('showModal')">
         Войти
      </button>
      <Modal></Modal>
   </header>
</template>

<script>
import Modal from './modal.vue';

export default {
   components:{Modal}
}
</script>

<style>

</style>