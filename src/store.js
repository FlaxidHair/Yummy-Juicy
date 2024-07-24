import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      show: false,
      recipe: {
        nameIng: "",
        nameRecipe: "",
        recipies: [],
        saveRecipe: "",
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
    },
  },
  actions: {},
});

export default store;
