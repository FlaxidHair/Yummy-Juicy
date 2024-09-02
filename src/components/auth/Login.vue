<template v-slot:text>
    <v-dialog v-model="userStore.dialog" max-width="500">
        <v-card class="d-flex flex-column align-center">
    <v-card-title>Авторизация</v-card-title>
    <v-responsive width="400px">
        <v-text-field variant="solo" v-model="userStore.userEmailLogin" label="Email" prepend-inner-icon="mdi-account mr-2"></v-text-field>
        <v-text-field variant="solo" type="password" v-model="userStore.userPassLogin" label="Пароль" prepend-inner-icon="mdi-lock mr-2"></v-text-field>
    </v-responsive>
    <v-card-actions class="d-flex ga-5 justify-center">
        <v-btn class="bg-green" @click="userStore.login" text="Войти"></v-btn>
      <v-btn
      class="bg-red"
        text="Закрыть"
        @click="userStore.dialog = false"
      ></v-btn>
    </v-card-actions>    
    <v-hover v-slot="{isHovering,props}" open-delay="50" >               
                    <v-card-subtitle @click="userStore.component=Registration" v-show="component==Login" v-bind="props" :class="isHovering ? 'text-decoration-underline': null" class="cursor-pointer text-blue mb-5 mt-2" >Нет аккаунта? Зарегистрироваться!</v-card-subtitle>                
                </v-hover> 
            </v-card>
            </v-dialog>          
</template>

<script setup>
import { useStoreRecipies } from "../../stores/storeRecipies";
import { useUser } from "../../stores/user";
import Registration from './Registration.vue'
const store = useStoreRecipies();
const userStore = useUser();

</script>

