<template>
      <div class="d-md-flex mr-5">
        <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            
            variant="flat"
            icon="mdi-menu"
          ></v-btn>
        </template>
      
        <template v-slot:default="{ isActive }">
          <v-card >
            <div class="d-flex">
        <ul class=" d-flex flex-column">
          <RouterLink to="/Favorite">
            <li><v-btn  class="px-lg-1 px-xl-4">Избранное</v-btn></li>
          </RouterLink>
          <RouterLink to="/recipies">
            <li><v-btn class="px-lg-1 px-xl-4">Рецепты</v-btn></li>
          </RouterLink>
          <RouterLink to="/template-recipe">
            <li><v-btn class="px-lg-1 px-xl-4">Создать рецепт</v-btn></li>
          </RouterLink>
          <RouterLink to="notes">
            <li><v-btn class="px-lg-1 px-xl-4">Заметки</v-btn></li>
          </RouterLink>
        </ul>
      </div>
      
            <v-card-actions>
              <v-spacer></v-spacer>
      
              <v-btn
                text="Close Dialog"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      </div>
</template>

<script setup>
import { useUser } from "../../stores/user";
import { useStoreRecipies } from '../../stores/storeRecipies'
const userStore = useUser();
const store = useStoreRecipies();
</script>
