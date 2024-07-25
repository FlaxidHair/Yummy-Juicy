<template>
   <header class="header">
      <router-link to="/">
      <div class="header__logotype">
            <img class="header__logotype-img" src="../assets/images/logo.png" alt="Logo">
            <h1 class="header__logotype-text">RecipeBook</h1>
      </div>
   </router-link>
      <ul class="header__list">
         <li class="header__list-item"><router-link to="/">Главная</router-link></li>
         <li class="header__list-item"><router-link to="/recipe">Рецепты</router-link></li>
         <li class="header__list-item"><router-link to="/dishes">Блюда</router-link></li>
         <li class="header__list-item"><router-link to="/templaterecipe">Создать рецепт</router-link></li>
         <li class="header__list-item"><router-link to="/notes">Заметки</router-link></li>
      </ul>
      <button class="header__auth-modal button" @click="$store.commit('showModal')">
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
.header {
   display:flex;
   height:150px;
   align-items: center;
   justify-content: space-between;
   padding-inline: 30px;
   padding-inline-end: 100px;
}
.header__logotype {
   display:flex;
   align-items: center;
   column-gap:10px;
}
.header__list {
   display:flex;
   column-gap:25px;
}
.header__auth-modal {
   width:150px;
}
</style>