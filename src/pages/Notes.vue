<template>
    <div class="main d-flex flex-column align-center">
        <h2 class="mt-10 mb-5">Добавить заметку</h2>
    <v-container class="">

        <div class="w-50 mr-auto ml-auto border-thin mb-5">
            <form ref="forma">
            <div class="d-flex">
        <v-text-field name="Title"  v-model="title" label="Введите заголовок" tile variant="solo"  hide-details class=""></v-text-field>
                <v-btn @click="postNote()" class="elevation-2" width="120px" tile height="56px" flat>Добавить</v-btn>
        </div>
        <v-textarea v-model="subTitle" name="Subtitle" label="Введите заметку" no-resize max-rows="10" tile variant="filled" hide-details class=""></v-textarea>
    </form>    
    </div>

        <v-divider></v-divider>
    </v-container>
    <div class="d-flex ga-5 flex-wrap">
   <v-card class="" v-for="note in store.getterNotes.notes" :key="note">
        <v-card-title >{{ note.Title }}</v-card-title>
        <v-card-text >{{ note.Subtitle }}</v-card-text>
   </v-card>
</div>
</div>
</template>

<script setup>
import {useStoreRecipies} from '../stores/storeRecipies'
import {ref} from 'vue'
const store = useStoreRecipies();
const forma = ref(null)
const title = ref("")
const subTitle = ref("")
function postNote(){
          fetch('https://script.google.com/macros/s/AKfycbwn9VGFkrEJWUpIR73XgknPNKpRsRlTdA4ZsRJ32SPsBYsPQ86mv564us55E6lgedoJ6Q/exec',{
            method:"POST",
            body:new FormData(forma.value),
          }).then((response)=>{
            if(response.status==200) {
              title.value = ""
              subTitle.value=""
              store.getNotes()    
              alert("Заметка добавлена")
            }
          })   
        }
</script>