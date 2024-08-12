import { defineStore } from "pinia";
import axios from "axios";
export const useStoreRecipies = defineStore("storeRecipies", {
  state: () => ({
    recipies: null,
    lastItemRecipies: null,
  }),
  getters: {
    getterRecipe() {
      return this.recipies;
    },
  },
  actions: {
    getTime(time) {
      const hours = new Date(time).getHours();
      const minutes = new Date(time).getMinutes();
      if (hours == 0) {
        return minutes + " м.";
      } else {
        return hours + "." + minutes + " ч.";
      }
    },
    async getRecipies() {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwYNA8D-po1XiLlgRFE3G1TZPi5nl09hmVQARnr0TdENmAwiZhDHWT4KZzu1Pl1hVCqgA/exec"
      );
      const data = await res.json();
      this.recipies = data;
      this.lastItemRecipies = data;
    },
    async postRecipies() {
      axios.post(
        "https://v1.slashapi.com/asd-3/google-sheets/trHA1e60zZ/list1",
        { data }
      );
    },
  },
});
