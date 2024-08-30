<template>
        <div class="text-center">
            <v-btn
            color="surface-variant"
            text="Войти"
            @click="dialog=true"
            class="elevation-2 bg-white"
            icon="mdi-login-variant"
          ><v-icon color='red-accent-1'>mdi-login-variant</v-icon></v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <v-card title="Регистрация" class="d-flex flex-column align-center">
        <template v-slot:text>
            <v-responsive width="400px">
                <v-text-field  variant="solo" v-model="userEmail" label="Email" prepend-inner-icon="mdi-account mr-2"></v-text-field>
                <v-text-field  variant="solo" v-model="userPass" label="Пароль" prepend-inner-icon="mdi-lock mr-2"></v-text-field>
            </v-responsive>

            <v-card-actions class="d-flex ga-5 justify-center">
                <v-btn class="bg-green" @click="register" text="Зарегистрироваться"></v-btn>
              <v-btn
              class="bg-red"
                text="Закрыть"
                @click="dialog = false"
              ></v-btn>
            </v-card-actions>
            <v-hover v-slot="{isHovering,props}" open-delay="50" >
                    <v-card-subtitle v-bind="props" :class="isHovering ? 'text-decoration-underline': null" class="cursor-pointer text-blue mb-5 mt-2" >Уже есть аккаунт? Войти!</v-card-subtitle>                
                </v-hover>                
        </template>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" max-width="400">
      <v-card class="d-flex align-center justify-center">
        <template v-slot:text>
            <h3 class="w-100">{{ message }}</h3>
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Закрыть" class="bg-red" variant="text" @click="dialog2 = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useStoreRecipies } from "../../stores/storeRecipies";
import { useUser } from "../../stores/user";
import {ref} from 'vue'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
const store = useStoreRecipies();
const userStore = useUser();
const userEmail = ref("")
const userPass = ref("")
const dialog = ref(false)
const dialog2 = ref(false)
let message = ref('')
const register = () =>{
    createUserWithEmailAndPassword(getAuth(),userEmail.value,userPass.value).then((data)=>{
        message = 'Регистрация завершена!'
        dialog2.value=true
    }).catch((error)=>{
        console.log(error.message)
        if(error.message == 'Firebase: Error (auth/email-already-in-use).') {
            message = 'Пользователь уже существует!'
            dialog2.value=true
        }else {
            message = 'Ошибка регистрации!'
            dialog2.value=true
        }
    })
}
const sighIn = () =>{

}
</script>