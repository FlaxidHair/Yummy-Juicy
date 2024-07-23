import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      show: false,
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
  },
});

export default store;
