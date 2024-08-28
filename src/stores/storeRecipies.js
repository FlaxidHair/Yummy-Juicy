import { defineStore } from "pinia";
// import axios from "axios";
export const useStoreRecipies = defineStore("storeRecipies", {
  state: () => ({
    recipies: [],
    notes: [],
    lastRecipies: [],
    lastNotes: [],
    showingItems: [],
    amenities: [0],
    category: {
      meat: [],
      fish: [],
      salad: [],
      soup: [],
      garnish: [],
      dessert: [],
    },
    favoriteStatus: false,
    dialogRecipe: true,
    loaded: false,
    loading: false,
    searchShow: false,
    isActive: false,
    showSearchResult: false,
    loadingSearch: false,
    dialog: false,
    selectRecipe: null,
    selectNote: null,
    loadingRecipe: false,
    addToFavorite: false,
    randomCount: 0,
    randomState: 0,
    startShow: 0,
    inputText: "",
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
    getterMeat() {
      if (!this.loading) {
        return this.recipies.recipies.filter((item) => {
          return item.Category.includes("Мясо");
        });
      }
      return this.recipies.recipies;
    },
    getterFish() {
      if (!this.loading) {
        return this.recipies.recipies.filter((item) => {
          return item.Category.includes("Рыба");
        });
      }
      return this.recipies.recipies;
    },
    getterSalad() {
      if (!this.loading) {
        return this.recipies.recipies.filter((item) => {
          return item.Category.includes("Салаты");
        });
      }
      return this.recipies.recipies;
    },
    getterSoup() {
      if (!this.loading) {
        return this.recipies.recipies.filter((item) => {
          return item.Category.includes("Супы");
        });
      }
      return this.recipies.recipies;
    },
    getterDessert() {
      if (!this.loading) {
        return this.recipies.recipies.filter((item) => {
          return item.Category.includes("Десерт");
        });
      }
      return this.recipies.recipies;
    },
    getterGarnish() {
      if (!this.loading) {
        return this.recipies.recipies.filter((item) => {
          return item.Category.includes("Гарнир");
        });
      }
      return this.recipies.recipies;
    },
    getterRecipe() {
      let a = this.refresh;
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
    GetterRandom() {
      let hook = this.randomCount;
      return {
        meat: this.randomDish(0, this.getterMeat.length - 1),
        garnish: this.randomDish(0, this.getterGarnish.length - 1),
        salad: this.randomDish(0, this.getterSalad.length - 1),
      };
    },
    getMeatName() {
      return {
        name: this.getterMeat[this.GetterRandom.meat].Name,
        image: this.getterMeat[this.GetterRandom.meat].Image,
      };
    },
    getGarnishName() {
      return {
        name: this.getterGarnish[this.GetterRandom.garnish].Name,
        image: this.getterGarnish[this.GetterRandom.garnish].Image,
      };
    },
    getSaladName() {
      return {
        name: this.getterSalad[this.GetterRandom.salad].Name,
        image: this.getterSalad[this.GetterRandom.salad].Image,
      };
    },
    getterFavoriteItems() {
      if (!this.loading) {
        return this.recipies.recipies.filter((item) => {
          return item.Favorite == true;
        });
      }
      return this.recipies.recipies;
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
    showFavoriteStatus(item) {
      if (item) {
        return "mdi-star";
      } else {
        return "mdi-star-outline";
      }
    },
    setFavoriteStatus() {
      if (this.selectRecipe.Favorite == true) {
        return "false";
      } else {
        return "true";
      }
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
    async getRecipiesNOLOAD() {
      this.loadingRecipe = true;
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw4BJY0TtaC1QaUnZtxhHXusYcNV-AL_pQn2iZKbInP5serwWDpfJm_S9Cn_R6x4S8r3g/exec"
      );
      const data = await res.json();
      this.recipies = data;
      this.lastRecipies = data.recipies.slice(-4).reverse();
      this.loadingRecipe = false;
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
    async patchFavoriteStatus() {
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbwLaFelYDl-G7E1At08p7kg7MoE2BCW7CDg5UhjhH8mPc2PjhyLkmQ6QYkkOqnMTHAsWQ/exec?rowName=${
          this.selectRecipe.Name
        }&value=${this.setFavoriteStatus()}`,
        {
          method: "POST",
        }
      ).then(() => {
        this.getRecipiesNOLOAD();
      });
    },
  },
});
