import { defineStore } from "pinia";
// import axios from "axios";
export const useStoreRecipies = defineStore("storeRecipies", {
  state: () => ({
    recipies: [],
    notes: [],
    lastRecipies: [],
    lastNotes: [],
    randomCount: 0,
    dialog: false,
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
    dialogRecipe: true,
    showingItems: [],
    loaded: false,
    loading: false,
    searchShow: false,
    inputText: "",
    loadingSearch: false,
    randomState: 0,
    startShow: 0,
    amenities: [0],
    isActive: false,
    showSearchResult: false,
  }),
  getters: {
    getterShow() {
      if (this.inputText != "") {
        return this.recipies.recipies.filter((item) => {
          return item.Name.includes(this.inputText);
        });
      }
      return this.recipies.recipies;
    },
    getterRecipe() {
      return this.recipies;
    },
    getterLastRecipies() {
      return this.lastRecipies;
    },
    getterLastNotes() {
      return this.lastNotes;
    },
    getterNotes() {
      return this.notes.notes;
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
    onBlur() {
      this.searchShow = false;
    },
    onFocus() {
      if (this.inputText == "") {
        return;
      }
      this.searchShow = true;
    },
    showSearchRequest() {
      this.router.push("/Recipies");
      this.showSearchResult = true;
      if (this.selectRecipe.Category == "Мясо") {
        this.amenities = [1];
      }
      if (this.selectRecipe.Category == "Рыба") {
        this.amenities = [2];
      }
      if (this.selectRecipe.Category == "Салаты") {
        this.amenities = [3];
      }
      if (this.selectRecipe.Category == "Супы") {
        this.amenities = [4];
      }
      if (this.selectRecipe.Category == "Десерт") {
        this.amenities = [5];
      }
      if (this.selectRecipe.Category == "Гарнир") {
        this.amenities = [6];
      }
      this.isActive = true;
    },
    onClickSearch() {
      if (this.inputText == "") {
        this.loadingSearch = false;
      } else {
        this.loadingSearch = true;
        setTimeout(() => {
          this.loadingSearch = false;
          this.loaded = true;
          // this.inputText = "";
          if (this.inputText == "") {
            this.startShow = 0;
            this.amenities = [0];
          }
          if (this.getterShow[0].Category == "Мясо") {
            this.startShow = 1;
            this.amenities = [1];
          }
          if (this.getterShow[0].Category == "Рыба") {
            this.startShow = 2;
            this.amenities = [2];
          }
          if (this.getterShow[0].Category == "Салаты") {
            this.startShow = 3;
            this.amenities = [3];
          }
          if (this.getterShow[0].Category == "Супы") {
            this.startShow = 4;
            this.amenities = [4];
          }
          if (this.getterShow[0].Category == "Десерт") {
            this.startShow = 5;
            this.amenities = [5];
          }
          if (this.getterShow[0].Category == "Гарнир") {
            this.startShow = 6;
            this.amenities = [6];
          }
          this.showSearchResult = true;
          this.router.push("/Recipies");
        }, 1300);
      }
    },
    randomDish(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
    getRandom() {
      this.randomState = 1;
      this.randomCount++;
    },
    async getRecipies() {
      this.loading = true;
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw4BJY0TtaC1QaUnZtxhHXusYcNV-AL_pQn2iZKbInP5serwWDpfJm_S9Cn_R6x4S8r3g/exec"
      );
      const data = await res.json();
      this.recipies = data;
      this.lastRecipies = data.recipies.slice(-4).reverse();
      this.loading = false;
    },
    async getNotes() {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwf7Ty0tbwPJJbm3gb9FRW0wk0kMRoyqCNeK9xMB9n4a0pfWktu3eiWnbB2dzeLHrcO/exec"
      );
      const data = await res.json();
      this.notes = data;
      this.lastNotes = data.notes.slice(-4).reverse();
    },
    async deleteNote(noteId) {
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbyTVQlk2yGHUl3pbWIucfHH3Tox7ehlnVrQxPkqXgH2uU9UAEhLw5HxupHRwjc3AKU3/exec?value=${noteId}`
      ).then((res) => {
        if (res.status == 200) {
          this.getNotes();
          alert("Заметка удалена");
          this.dialog = false;
        }
      });
    },
    async deleteRecipe(recipeID) {
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbzU0Ei88Ofvx5-jSZWD3-1YB1Lto1iG-2mfibsVrm65CO-YwrV6T8aQOJKqx4lF3di6JQ/exec?value=${recipeID}`
      ).then((res) => {
        if (res.status == 200) {
          this.getRecipies();
          alert("Рецепт удален");
          this.dialog = false;
        }
      });
    },
  },
});
