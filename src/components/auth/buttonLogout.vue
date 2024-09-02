<template>
          <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" text="Закрыть" class="bg-red" variant="text" @click="()=>userStore.dialog2 = false"></v-btn>
        </template>
      
        <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              Вы уверены что хотите выйти?
            </v-card-text>
      
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
</template>

<script setup>

</script>
