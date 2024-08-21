import { defineStore } from "pinia";
// import axios from "axios";
export const useStoreRecipies = defineStore("storeRecipies", {
  state: () => ({
    recipies: [],
    notes: null,
    lastRecipies: [],
    lastNotes: [],
    selectRecipe: null,
    selectNote: null,
    category: {
      meat: [],
      fish: [],
      salad: [],
      soup: [],
      garnish: [],
      dessert: [],
    },
    loading: false,
    randomState: 0,
    startShow: 0,
    amenities: [0],
  }),
  getters: {
    getterRecipe() {
      return this.recipies;
    },
    getterLastRecipies() {
      return this.lastRecipies;
    },
    getterNotes() {
      return this.lastNotes;
    },
    getterCategory() {
      if (this.loading == false) {
        this.recipies.recipies.forEach((el) => {
          if (el.Category == "Мясо") {
            this.category.meat.push(el);
          }
          if (el.Category == "Рыба") {
            this.category.fish.push(el);
          }
          if (el.Category == "Супы") {
            this.category.soup.push(el);
          }
          if (el.Category == "Гарнир") {
            this.category.garnish.push(el);
          }
          if (el.Category == "Десерт") {
            this.category.dessert.push(el);
          }
          if (el.Category == "Салаты") {
            this.category.salad.push(el);
          }
        });
      }

      return this.category;
    },
    GetterRandom() {
      return this.randomDish(0, this.getterCategory.meat.length - 1);
    },
    getMeatName() {
      return {
        name: this.getterCategory.meat[this.GetterRandom].Name,
        image: this.getterCategory.meat[this.GetterRandom].Image,
      };
    },
    getGarnishName() {
      return {
        name: this.getterCategory.garnish[this.GetterRandom].Name,
        image: this.getterCategory.garnish[this.GetterRandom].Image,
      };
    },
    getSaladName() {
      return {
        name: this.getterCategory.salad[this.GetterRandom].Name,
        image: this.getterCategory.salad[this.GetterRandom].Image,
      };
    },
  },
  actions: {
    randomDish(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
    getRandom() {
      this.randomState = 1;
      return this.getMeatName;
    },
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
      this.loading = true;
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwYNA8D-po1XiLlgRFE3G1TZPi5nl09hmVQARnr0TdENmAwiZhDHWT4KZzu1Pl1hVCqgA/exec"
      );
      const data = await res.json();
      this.recipies = data;
      this.lastRecipies = data.recipies.slice(-4).reverse();
      this.loading = false;
    },
    async getNotes() {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwn9VGFkrEJWUpIR73XgknPNKpRsRlTdA4ZsRJ32SPsBYsPQ86mv564us55E6lgedoJ6Q/exec"
      );
      const data = await res.json();
      this.notes = data;
      this.lastNotes = data.notes.slice(-4).reverse();
    },
  },
});
