<template>
          <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn class="text-center ml-5 mr-10 bg-white" v-bind="activatorProps" icon="mdi-logout"><v-icon color='red-accent-1'>mdi-logout</v-icon></v-btn>
        </template>
      
        <template v-slot:default="{ isActive }">
          <v-card title="Вы уверены что хотите выйти?">      
            <v-card-actions>
              <v-btn
              class="bg-green"
                text="Да"
                 @click="userStore.logout"
              ></v-btn>
              <v-btn
              class="bg-red"
                text="Нет"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
</template>

<script setup>
import { useStoreRecipies } from "../../stores/storeRecipies";
import { useUser } from "../../stores/user"
const store = useStoreRecipies();
const userStore = useUser();
</script>
