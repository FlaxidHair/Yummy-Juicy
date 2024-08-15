import { defineStore } from "pinia";
// import axios from "axios";
export const useStoreRecipies = defineStore("storeRecipies", {
  state: () => ({
    recipies: null,
    notes: null,
    category: {
      meat: [],
      fish: [],
      salad: [],
      soup: [],
      garnish: [],
      dessert: [],
    },
  }),
  getters: {
    getterRecipe() {
      return this.recipies;
    },
    getterNotes() {
      return this.notes;
    },
  },
  actions: {
    getTime(time) {
      const hours = new Date(time).getHours();
      const minutes = new Date(time).getMinutes();
      if (hours == 0) {
        return minutes + " м.";
      } else if (hours > 0) {
        return hours + "." + minutes + " ч.";
      } else {
        return "----";
      }
    },
    async getRecipies() {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwYNA8D-po1XiLlgRFE3G1TZPi5nl09hmVQARnr0TdENmAwiZhDHWT4KZzu1Pl1hVCqgA/exec"
      );
      const data = await res.json();
      this.recipies = data;
    },
    async getNotes() {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwn9VGFkrEJWUpIR73XgknPNKpRsRlTdA4ZsRJ32SPsBYsPQ86mv564us55E6lgedoJ6Q/exec"
      );
      const data = await res.json();
      this.notes = data;
      console.log(data);
    },
  },
});
