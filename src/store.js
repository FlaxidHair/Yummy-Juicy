import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      show: false,
      recipe: {
        name: [],
        ing: [],
        nameIng: "",
        nameRecipe: "",
        recipies: [],
        recipies2: [],
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
    addNameRecipe(state) {
      state.recipe.name.push(state.recipe.nameRecipe);
      state.recipe.ing.push(state.recipe.nameIng);
    },
    templateRecipe(state) {
      this.commit("addNameRecipe");
      state.recipe.recipies.push(state.recipe.name.at(-1));
      state.recipe.recipies.push(state.recipe.ing.at(-1));
      const obj = {
        name: state.recipe.name.at(-1),
        ing: state.recipe.ing.at(-1),
      };
      state.recipe.recipies2.push(obj);
    },
  },
});

export default store;
