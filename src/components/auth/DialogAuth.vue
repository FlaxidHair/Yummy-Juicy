<template>
        <div class="text-center ml-5 mr-10">
            <v-btn
            color="surface-variant"
            text="Войти"
            @click="userStore.dialog=true"
            class="elevation-2 bg-white"
            icon="mdi-login-variant"
          ><v-icon color='red-accent-1'>mdi-account</v-icon></v-btn>
                <component :is="userStore.component"></component>
    <v-dialog v-model="userStore.dialog2" max-width="400">
      <v-card class="d-flex align-center justify-center">
        <template v-slot:text>
            <h3 class="w-100">{{ userStore.message }}</h3>
        </template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Закрыть" class="bg-red" variant="text" @click="()=>userStore.dialog2 = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useStoreRecipies } from "../../stores/storeRecipies";
import { useUser } from "../../stores/user";
import { onMounted,ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const store = useStoreRecipies();
const userStore = useUser();
onMounted(()=>{
userStore.auth = getAuth();
onAuthStateChanged(userStore.auth,(user)=>{
  if(user){
    userStore.isLogin = true
  }else {
    userStore.isLogin = false 
  }
})
})
</script>