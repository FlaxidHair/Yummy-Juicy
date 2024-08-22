import { defineStore } from "pinia";
// import axios from "axios";
export const useStoreRecipies = defineStore("storeRecipies", {
  state: () => ({
    recipies: [],
    notes: null,
    lastRecipies: [],
    lastNotes: [],
    randomCount: 0,
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
      let hook = this.randomCount;
      return {
        meat: this.randomDish(0, this.getterCategory.meat.length - 1),
        garnish: this.randomDish(0, this.getterCategory.garnish.length - 1),
        salad: this.randomDish(0, this.getterCategory.salad.length - 1),
      };
    },
    getMeatName() {
      return {
        name: this.getterCategory.meat[this.GetterRandom.meat].Name,
        image: this.getterCategory.meat[this.GetterRandom.meat].Image,
      };
    },
    getGarnishName() {
      return {
        name: this.getterCategory.garnish[this.GetterRandom.garnish].Name,
        image: this.getterCategory.garnish[this.GetterRandom.garnish].Image,
      };
    },
    getSaladName() {
      return {
        name: this.getterCategory.salad[this.GetterRandom.salad].Name,
        image: this.getterCategory.salad[this.GetterRandom.salad].Image,
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
      this.randomCount++;
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
        "https://script.google.com/macros/s/AKfycbz_xGJL8mZi6Zt14wZe-d8mIBKaysXwNb7nr0WWSPb6Qh3blZL5KABXY5yRlMM6xDVE/exec"
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
      console.log(this.getterCategory);
    },
  },
});
