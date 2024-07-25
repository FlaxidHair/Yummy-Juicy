import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      show: false,
      recipe: {
        nameIng: "",
        nameRecipe: "",
        recipies: [],
      },
    };
  },
  mutations: {
    showModal(state) {
      state.show = true;
      console.log(state.show);
    },
    closeModal(state) {
      state.show = false;
    },
    templateRecipe(state) {
      const fullRecipe = {
        name: state.recipe.nameRecipe,
        ing: state.recipe.nameIng,
      };
      state.recipe.recipies.push(fullRecipe);
      localStorage.setItem("recipies", JSON.stringify(state.recipe.recipies));
      state.recipe.recipies = JSON.parse(localStorage.getItem("recipies"));
    },
  },
  actions: {},
});

export default store;
